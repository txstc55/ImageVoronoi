var Voronoi = require("voronoi")
var ChoosePoint = require("./ChoosePoints.js");
let Sobel = require('sobel');

var i = 0;
var j = 0;
class VoronoiDrawer {
    constructor(canvas, num_sites, inversePP) {
        this.canvas = canvas;
        this.width = canvas.width;
        this.height = canvas.height;
        this.num_sites = num_sites;
        this.inversePP = inversePP
        console.log("Start voronoi", window.performance.now());
        const data = this.canvas.getContext("2d").getImageData(0, 0, this.width, this.height);
        this.sob = Sobel(data);
        console.log("Gradient produced", window.performance.now());
    }

    ComputeVoronoi() {
        var cp = new ChoosePoint(
            this.sob,
            this.canvas.width,
            this.canvas.height,
            this.num_sites,
            this.inversePP
        );
        var pos = cp.pickPosition();
        console.log("Sites picked", window.performance.now());
        const bbox = {
            xl: 0,
            xr: this.width,
            yt: 0,
            yb: this.height
        };
        const voronoi = new Voronoi();
        this.diagram = voronoi.compute(pos, bbox);
        console.log("Voronoi computed", window.performance.now());
    }

    isPointInPoly(poly, x, y) {
        for (var c = false, i = -1, l = poly.length, j = l - 1; ++i < l; j = i)
            ((poly[i].y <= y && y < poly[j].y) || (poly[j].y <= y && y < poly[i].y))
                && (x < (poly[j].x - poly[i].x) * (y - poly[i].y) / (poly[j].y - poly[i].y) + poly[i].x)
                && (c = !c);
        return c;
    }

    CellColors(imgdata, channel, rgb_amount) {
        var cell_colors = [];
        for (i = 0; i < this.diagram.cells.length; i++) {
            var boundaries = new Array();
            var min_x = this.width;
            var min_y = this.height;
            var max_x = 0;
            var max_y = 0;
            const edges = this.diagram.cells[i].halfedges;
            for (j = 0; j < edges.length; j++) {
                const va = edges[j].getStartpoint();
                boundaries.push(va);
                min_x = Math.min(va.x, min_x);
                max_x = Math.max(va.x, max_x);
                min_y = Math.min(va.y, min_y);
                max_y = Math.max(va.y, max_y);
            }
            var r = 0;
            var g = 0;
            var b = 0;
            var count = 0;
            var inside = false;
            for (var k = Math.max(Math.floor(min_x), 0); k < Math.min(Math.floor(max_x + 1), this.width); k++) {
                for (j = Math.max(Math.floor(min_y), 0); j < Math.min(Math.floor(max_y + 1), this.height); j++) {
                    if (this.isPointInPoly(boundaries, k, j)) {
                        const ind = j * this.width + k;
                        r += imgdata[ind * 4];
                        g += imgdata[ind * 4 + 1];
                        b += imgdata[ind * 4 + 2];
                        count += 1;
                        inside = true;
                    } else if (inside) {
                        inside = false;
                        break;
                    }
                }
            }
            r /= count;
            g /= count;
            b /= count;
            if (channel == 0) {
                cell_colors.push([Math.floor(r), Math.floor(g), Math.floor(b)]);
            } else if (channel == 1) {
                cell_colors.push([Math.floor(r * rgb_amount / 100), Math.floor(g * (1 - rgb_amount / 100) / 2), Math.floor(b * (1 - rgb_amount / 100) / 2)]);
            } else if (channel == 2) {
                cell_colors.push([Math.floor(r * (1 - rgb_amount / 100) / 2), Math.floor(g * rgb_amount / 100), Math.floor(b * (1 - rgb_amount / 100) / 2)]);
            } else {
                cell_colors.push([Math.floor(r * (1 - rgb_amount / 100) / 2), Math.floor(g * (1 - rgb_amount / 100) / 2), Math.floor(b * rgb_amount / 100)]);
            }
        }
        return cell_colors;
    }


    FillVoronoi(channel, clear = true, imgdata = this.canvas.getContext("2d").getImageData(0, 0, this.width, this.height).data, ifStroke = true, rgb_amount = 0) {
        this.ComputeVoronoi();
        const cellcolor = this.CellColors(imgdata, channel, rgb_amount);
        console.log("Cell color determined", window.performance.now());
        var ctx = this.canvas.getContext("2d");
        if (clear) {
            ctx.clearRect(0, 0, this.width, this.height);
        }
        for (i = 0; i < cellcolor.length; i++) {
            const r = cellcolor[i][0];
            const g = cellcolor[i][1];
            const b = cellcolor[i][2];
            ctx.beginPath();
            var va = this.diagram.cells[i].halfedges[0].getStartpoint();
            ctx.moveTo(va.x, va.y);
            for (j = 1; j < this.diagram.cells[i].halfedges.length; j++) {
                va = this.diagram.cells[i].halfedges[j].getStartpoint();
                ctx.lineTo(va.x, va.y);
            }
            ctx.closePath();
            ctx.fillStyle = 'rgb(' + r + ', ' + g + ', ' + b + ')';
            if (ifStroke) {
                ctx.strokeStyle = 'rgb(' + r + ', ' + g + ', ' + b + ')';
                ctx.stroke();
            }
            ctx.fill();
        }
        console.log("Drawn", window.performance.now());
    }

    RGBVoronoi(rgb_amount) {
        var ctx = this.canvas.getContext("2d");
        ctx.globalCompositeOperation = 'lighter';
        const imgdata = this.canvas.getContext("2d").getImageData(0, 0, this.width, this.height).data;
        this.FillVoronoi(1, true, imgdata, false, rgb_amount);
        this.FillVoronoi(2, false, imgdata, false, rgb_amount);
        this.FillVoronoi(3, false, imgdata, false, rgb_amount);
        ctx.globalCompositeOperation = 'source-over';
    }
}

module.exports = VoronoiDrawer;
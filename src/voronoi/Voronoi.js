var Voronoi = require("voronoi")
var inside = require('point-in-polygon');
var i = 0;
var j = 0;
class ImageVoronoi {
    constructor(width, height, sites) {
        this.width = width;
        this.height = height;
        const bbox = {
            xl: 0,
            xr: width,
            yt: 0,
            yb: height
        };
        const voronoi = new Voronoi();
        this.diagram = voronoi.compute(sites, bbox);
        console.log(this.diagram.execTime);
    }

    PolygonPoints() {
        var cell_points = new Array();
        this.cell_boundaries = [];
        for (i = 0; i < this.diagram.cells.length; i++) {
            var boundaries = new Array();
            var min_x = this.width + 1;
            var min_y = this.height + 1;
            var max_x = -1;
            var max_y = -1;
            var current_cell_points = new Array();
            // var edges = [];
            for (j = 0; j < this.diagram.cells[i].halfedges.length; j++) {
                const va = this.diagram.cells[i].halfedges[j].getStartpoint();
                boundaries.push([va.x, va.y]);
                // const vb = this.diagram.cells[i].halfedges[j].edge.vb;
                // edges.push([va, vb]);
                if (va.x < min_x) {
                    min_x = va.x;
                }
                if (va.x > max_x) {
                    max_x = va.x;
                }
                if (va.y < min_y) {
                    min_y = va.y;
                }
                if (va.y > max_y) {
                    max_y = va.y;
                }
            }
            // boundaries = this.OrientPolygon(edges);
            this.cell_boundaries.push(boundaries);
            for (var k = Math.floor(min_x); k <= Math.ceil(max_x); k++) {
                for (j = Math.floor(min_y); j <= Math.ceil(max_y); j++) {
                    if (inside([k, j], boundaries)) {
                        current_cell_points.push([k, j]);
                    }
                }
            }
            cell_points.push(current_cell_points);
        }
        return cell_points;
    }

    CellColor(imgdata, cellpoints) {
        var cell_colors = new Array();
        // console.log(imgdata);
        for (i = 0; i < cellpoints.length; i++) {
            const pixel_pos = cellpoints[i];
            var r = 0;
            var g = 0;
            var b = 0;
            // console.log(pixel_pos.length);
            for (j = 0; j < pixel_pos.length; j++) {
                var ind = pixel_pos[j][1] * this.width + pixel_pos[j][0];
                r += imgdata[ind * 4];
                g += imgdata[ind * 4 + 1];
                b += imgdata[ind * 4 + 2];
            }
            r /= pixel_pos.length;
            g /= pixel_pos.length;
            b /= pixel_pos.length;
            cell_colors.push([Math.floor(r), Math.floor(g), Math.floor(b)]);
        }
        return cell_colors;
    }

    FillVoronoi(canvas) {
        const imgdata = canvas.getContext("2d").getImageData(0, 0, this.width, this.height).data;
        const cellpoints = this.PolygonPoints();
        const cellcolor = this.CellColor(imgdata, cellpoints);
        var ctx = canvas.getContext("2d");
        for (i = 0; i < cellcolor.length; i++) {
            const r = cellcolor[i][0];
            const g = cellcolor[i][1];
            const b = cellcolor[i][2];
            ctx.beginPath();
            ctx.moveTo(this.cell_boundaries[i][0][0], this.cell_boundaries[i][0][1]);
            for (j = 1; j < this.cell_boundaries[i].length; j++) {
                ctx.lineTo(this.cell_boundaries[i][j][0], this.cell_boundaries[i][j][1]);
            }
            ctx.closePath();
            ctx.fillStyle = 'rgb(' + r + ', ' + g + ', ' + b + ')';
            // ctx.stroke();
            ctx.fill();
        }
    }
}

module.exports = ImageVoronoi;
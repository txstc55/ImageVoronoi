let Chance = require("chance");
class ChoosePoint {
    constructor(imgData, width, height, n) {
        this.imgData = new Array(width * height);
        this.n = n;
        this.width = width;
        this.height = height;
        for (var i = 0; i < imgData.length; i += 4) {
            this.imgData[i/4] = imgData[i];
        }
    }

    scaleDown(ind) {
        this.imgData[ind] = 0;
        const weight = this.imgData[ind];
        const y = Math.floor(ind / this.width);
        const x = ind % this.width;
        for (var i = y - weight; i < y + weight; i++) {
            for (var j = x - weight; j < x + weight; j++) {
                if (i >= 0 && j >= 0 && j < this.width && i < this.height) {
                    var pos = i * this.width + j;
                    this.imgData[pos] /= 2;
                }
            }
        }
    }

    pickPosition() {
        var all_pos = new Array(this.imgData.length);
        for (var i = 0; i < this.imgData.length; i++) {
            all_pos[i] = i;
        }
        var choices = [];
        var chance = new Chance();
        for (i = 0; i < this.n; i++) {
            var selected = chance.weighted(all_pos, this.imgData);
            choices.push([selected % this.width, Math.floor(selected / this.width)]);
            this.scaleDown(i);
        }
        return choices;
    }


}

module.exports = ChoosePoint;

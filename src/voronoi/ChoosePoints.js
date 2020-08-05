// let Chance = require("chance");
class ChoosePoint {
    constructor(imgData, width, height, n, inversePP) {
        this.imgData = new Array(width * height);
        this.n = n;
        this.width = width;
        this.height = height;
        for (var i = 0; i < imgData.length; i += 4) {
            this.imgData[i / 4] = imgData[i] + 1;
        }
        if (inversePP) {
            for (i = 0; i < this.imgData.length; i++) {
                this.imgData[i] = 257 - this.imgData[i];
            }
        }
    }

    scaleDown(ind) {
        this.imgData[ind] = 0;
        const weight = this.imgData[ind];
        const y = Math.floor(ind / this.width);
        const x = ind % this.width;
        const radius = Math.max(Math.log2(weight) + 1, 1);
        for (var i = y - radius; i <= y + radius; i++) {
            for (var j = x - radius; j <= x + radius; j++) {
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
        var choices = new Set([]);
        while (choices.size < this.n) {
            // return a random index
            var selected = Math.floor(Math.random() * this.imgData.length);
            // now we determine wheater to discard it
            const selected_pos_val = this.imgData[selected];
            if (Math.random() * 256 <= selected_pos_val) {
                // we choose it
                // console.log(selected_pos_val);
                choices.add({ x: selected % this.width, y: Math.floor(selected / this.width) });
                this.scaleDown(selected);
            }
            // else we dont care about this point
        }
        return Array.from(choices);
    }


}

module.exports = ChoosePoint;

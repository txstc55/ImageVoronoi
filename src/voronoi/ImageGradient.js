let Sobel = require('sobel');
class PrepImage {
    constructor(canvas) {
        this.canvas = canvas;
        this.height = canvas.height;
        this.width = canvas.width;
    }

    getPixel() {
        var ctx = this.canvas.getContext("2d");
        return ctx.getImageData(0, 0, this.width, this.height);
    }

    sobelFilter(){
        const pixel = this.getPixel();
        var sob = Sobel(pixel);
        return sob;
    }

    display(pixel) {
        this.canvas
            .getContext("2d")
            .putImageData(pixel.toImageData(), 0, 0, 0, 0, this.width, this.height);
    }
}

module.exports = PrepImage;

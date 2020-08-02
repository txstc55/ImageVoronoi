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

  grayScale() {
    var pixel = this.getPixel();
    var d = pixel.data;
    for (var i = 0; i < d.length; i += 4) {
      var r = d[i];
      var g = d[i + 1];
      var b = d[i + 2];
      // CIE luminance for the RGB
      // The human eye is bad at seeing red and blue, so we de-emphasize them.
      var v = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      d[i] = d[i + 1] = d[i + 2] = v;
    }
    this.display(pixel);
  }

  display(pixel) {
    this.canvas
      .getContext("2d")
      .putImageData(pixel, 0, 0, 0, 0, this.width, this.height);
  }
}

module.exports = PrepImage;

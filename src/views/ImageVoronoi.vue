<template>
  <div class="IV">
    <h1>Image Voronoi</h1>
    <div id="input-icon" class="nav-wrapper light-bg">
      <v-file-input
        label="File input"
        filled
        type="file"
        prepend-icon="mdi-camera"
        @change="onFileChange($event)"
      ></v-file-input>
      <div class="control-wrapper">
        <label class="control-label">Number of Cites</label>
        <input class="control-input control-number number" :value="num_sites" />
        <input
          class="control-input control-slider slider"
          type="range"
          v-model="num_sites"
          min="50"
          max="5000"
          @change="changeNumCite()"
          maxlength="2"
        />
      </div>
    </div>
    <canvas id="canvas" ref="myCanvas" />
  </div>
</template>




<script>
import PrepImage from "@/voronoi/ImageGradient.js";
import ChoosePoint from "@/voronoi/ChoosePoints.js";
import ImageVoronoi from "@/voronoi/Voronoi.js";
export default {
  name: "ImageVoronoi",
  data: function() {
    return {
      canvas: null,
      img: null,
      sites: [],
      num_sites: 1000
    };
  },
  methods: {
    // draw the initial sample image
    drawInit() {
      const src = require("@/assets/sample.jpg");
      this.img = new Image();
      this.img.src = src;
      this.drawImg();
    },

    // function to draw the stored image file
    drawImg() {
      const ctx = this.canvas.getContext("2d");
      this.img.onload = () => {
        console.log("Image height:", this.img.height, "width:", this.img.width);
        while (this.canvas.height != this.img.height) {
          this.canvas.height = this.img.height;
          this.canvas.width = this.img.width;
        }
        console.log(
          "Canvas height:",
          this.canvas.height,
          "width:",
          this.canvas.width
        );
        ctx.drawImage(this.img, 0, 0);
        console.log(window.performance.now());
        const grad = new PrepImage(this.canvas);
        var sob = grad.sobelFilter();
        console.log(window.performance.now());
        // grad.display(tmp);
        var cp = new ChoosePoint(
          sob,
          this.canvas.width,
          this.canvas.height,
          this.num_sites
        );
        var pos = cp.pickPosition();
        console.log(window.performance.now());
        var sites = [];
        for (var i = 0; i < pos.length; i++) {
          sites.push({ x: pos[i][0], y: pos[i][1] });
        }
        var iv = new ImageVoronoi(this.canvas.width, this.canvas.height, sites);
        console.log(window.performance.now());
        iv.FillVoronoi(this.canvas);
      };
    },

    update() {
      const ctx = this.canvas.getContext("2d");
      console.log("Image height:", this.img.height, "width:", this.img.width);
      while (this.canvas.height != this.img.height) {
        this.canvas.height = this.img.height;
        this.canvas.width = this.img.width;
      }
      console.log(
        "Canvas height:",
        this.canvas.height,
        "width:",
        this.canvas.width
      );
      ctx.drawImage(this.img, 0, 0);
      console.log(window.performance.now());
      const grad = new PrepImage(this.canvas);
      var sob = grad.sobelFilter();
      console.log(window.performance.now());
      // grad.display(tmp);
      var cp = new ChoosePoint(
        sob,
        this.canvas.width,
        this.canvas.height,
        this.num_sites
      );
      var pos = cp.pickPosition();
      console.log(window.performance.now());
      var sites = [];
      for (var i = 0; i < pos.length; i++) {
        sites.push({ x: pos[i][0], y: pos[i][1] });
      }
      var iv = new ImageVoronoi(this.canvas.width, this.canvas.height, sites);
      console.log(window.performance.now());
      iv.FillVoronoi(this.canvas);
    },

    changeNumCite() {
      console.log(this.num_sites);
      const self = this;
      self.update();
    },

    // when the file is changed, preview the file
    onFileChange(e) {
      const self = this;
      const files = e;
      if (!files) return;
      const reader = new FileReader();

      reader.onload = e => {
        this.img = new Image();
        this.img.src = e.target.result;
        self.drawImg();
      };
      reader.readAsDataURL(files);
    }
  },

  // on mounted, show the initial image
  mounted() {
    this.canvas = this.$refs.myCanvas;
    this.drawInit();
  }
};
</script>


<style>
#input-icon {
  text-align: center;
  padding-left: 2em;
  padding-right: 2em;
}

#canvas {
  justify-content: center;
  align-items: center;
  max-width: 100%;
  max-height: 100%;
}

* {
  margin: 0;
  padding: 0;
}
body {
  font-family: sans-serif;
  color: #666;
  line-height: 18px;
  font-size: 14px;
}
a {
  color: #06f;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.is-hidden {
  display: none;
}
.full-width {
  width: 100%;
}
.dark-bg {
  background-color: #333;
}
.light-bg {
  background-color: #efefef;
  border-bottom: 1px #ddd solid;
}
.center {
  max-width: 860px;
  margin-left: auto;
  margin-right: auto;
}
.nav-wrapper {
  padding-top: 17px;
  padding-bottom: 17px;
  position: relative;
  z-index: 3;
}
.button {
  background-color: #ddd;
  padding: 5px 9px;
  display: inline-block;
  color: #666;
  font-weight: 400;
  border-radius: 2px;
  cursor: pointer;
  border: 0;
  font-family: sans-serif;
  font-size: 12px;
  text-decoration: none;
  line-height: normal;
  margin-right: 4px;
}
.button:hover {
  background-color: #06f;
  color: #fff;
  text-decoration: none;
}
.dark-bg .button {
  background-color: #666;
  color: #ccc;
}
.dark-bg .button:hover {
  background-color: #999;
  color: #fff;
}
.dark-bg a {
  color: #ddd;
}
#random-button {
  position: relative;
  top: -4px;
}
.headline {
  font-size: 16px;
  color: #fff;
  display: inline-block;
  font-weight: 400;
  margin-right: 20px;
  position: relative;
  top: 1px;
}
.intro {
  width: 100%;
  position: absolute;
  top: -100%;
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.9);
  -webkit-transition: all 0.5s ease-in;
  transition: all 0.5s ease-in;
}
.intro.is-active {
  top: 0;
}
.intro .center {
  padding: 30px;
  max-width: 580px;
  position: relative;
}
.intro .close {
  position: absolute;
  top: 10px;
  right: 10px;
  display: block;
  font-size: 16px;
  background-color: transparent;
  border: 0;
  color: #06f;
  cursor: pointer;
}
.intro-button {
  float: right;
}
.intro-button.is-active,
.intro-button.is-active:hover {
  background-color: #ddd;
  color: #666;
}
#controls {
  display: none;
}
#controls.is-active {
  display: block;
}
.control-wrapper {
  display: inline-block;
  width: 120px;
  margin-right: 20px;
}
.control-label {
  max-width: 90px;
  float: left;
  display: block;
  font-size: 11px;
  color: #222f37;
}
.control-slider {
  display: block;
  float: left;
  border: 0;
  width: 120px;
  height: 1px;
  margin-top: 6px;
  background: #ddd;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.control-number {
  display: block;
  color: #333;
  float: right;
  border: 0;
  max-width: 30px;
  font-family: sans-serif;
  background-color: transparent;
}
#import-input {
  display: none;
}
.download-link {
  display: none;
}
.download-link.is-active {
  display: inline-block;
  margin-left: 5px;
}
.download-link span {
  color: #999;
  display: inline-block;
  text-decoration: none;
  margin-left: 4px;
}
#imgur-button {
  width: 85px;
  overflow: hidden;
  padding-left: 0;
}
#imgur-button.is-uploading,
#imgur-button.is-uploading:hover {
  background-color: #ddd;
  color: #666;
  cursor: default;
}
#imgur-button span {
  display: inline-block;
  width: 154px;
  padding-left: 9px;
  -webkit-transition: margin-left 0.5s ease-in;
  transition: margin-left 0.5s ease-in;
  -webkit-transition-property: margin-left top;
  transition-property: margin-left top;
  text-align: left;
  line-height: 10px;
  font-size: 12px;
  margin-bottom: 0;
  padding-bottom: 0;
  position: relative;
}
#imgur-button.is-uploading span {
  margin-left: -76px;
}
#imgur-button span::after {
  content: "loading…";
  display: inline-block;
  padding-left: 15px;
  color: #999;
}
#imgur-url-container {
  display: inline-block;
  opacity: 0;
  -webkit-transition: opacity 0.3s ease-in;
  transition: opacity 0.3s ease-in;
}
#imgur-url-container.is-active {
  opacity: 1;
}
#imgur-url-input {
  padding: 5px 9px 4px;
  border: 0;
  border-radius: 2px;
  font-family: sans-serif;
  font-size: 13px;
  color: #333;
  margin-right: 7px;
  position: relative;
  top: 1px;
  max-width: 90px;
}
#imgur-url-error {
  padding: 5px 9px;
  line-height: normal;
  color: #999;
}
#imgur-url-input,
#imgur-url-link,
#imgur-url-error {
  display: none;
}
#imgur-url-container.upload-successful #imgur-url-input,
#imgur-url-container.upload-successful #imgur-url-link {
  display: inline-block;
}
#imgur-url-container.upload-failed #imgur-url-error {
  display: inline-block;
}
.social-link {
  display: none;
}
.upload-successful .social-link {
  display: inline-block;
}
.missing-feature {
  clear: both;
}
.canvas-wrapper {
  width: 100%;
  position: relative;
  background-color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
}
#canvas {
  margin-left: auto;
  margin-right: auto;
  display: block;
  max-width: 100%;
}
#cam-button {
  display: none;
}
#cam-button.is-supported {
  display: inline-block;
}
.cam-wrapper {
  width: 100%;
  height: 0;
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  z-index: 3;
  transition: all 0.4s;
  top: 60px;
  overflow: hidden;
  opacity: 0;
}
.cam-wrapper.is-active {
  height: 100%;
  opacity: 1;
}
.take-picture {
  position: absolute;
  top: 450px;
  left: 50%;
  margin-left: -43px;
  cursor: pointer;
  z-index: 3;
}
.cam {
  display: block;
  width: 100%;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 68px;
  transform: scalex(-1);
}
@media all and (max-width: 860px) {
  .nav-wrapper {
    text-align: center;
  }
  .center {
    padding-left: 10px;
    padding-right: 10px;
  }
  .button {
    margin-bottom: 5px;
  }
}
</style>


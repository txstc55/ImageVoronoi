<template>
  <div class="IV">
    <div id="input-icon" class="nav-wrapper light-bg">
      <div class="control-wrapper">
        <v-file-input
          class="text-input-light"
          label="Upload"
          flat
          dense
          dark
          hide-details
          type="file"
          prepend-icon="mdi-camera"
          @change="onFileChange($event)"
        ></v-file-input>
        <label class="control-label"></label>
      </div>
      <div class="control-wrapper">
        <label class="control-label">Cites</label>
        <label class="control-input control-number number">{{ num_sites }}</label>
        <input
          class="control-input control-slider slider"
          type="range"
          v-model="num_sites"
          min="1"
          max="100"
          @change="changeNumCite()"
          maxlength="2"
        />
      </div>
      <div class="control-wrapper">
        <label class="selection-label" for="fill-input">
          <input
            class="control-input checkbox"
            type="checkbox"
            id="fill-input"
            :checked="ifRGB"
            @change="changeMode()"
          />Get High
        </label>
      </div>
      <div class="control-wrapper">
        <label class="control-label">Drug dosage</label>
        <label class="control-input control-number number">{{ dosage }}</label>
        <input
          class="control-input control-slider slider"
          type="range"
          v-model="dosage"
          min="0"
          max="100"
          @change="changeRGB()"
          maxlength="2"
        />
      </div>
    </div>
    <div class="canvas-wrapper">
      <canvas class="canvas" id="canvas" ref="myCanvas" />
    </div>
  </div>
</template>




<script>
import VoronoiDrawer from "@/voronoi/VoronoiDrawer.js";
export default {
  name: "ImageVoronoi",
  data: function() {
    return {
      canvas: null,
      img: null,
      sites: [],
      num_sites: 10,
      ifRGB: false,
      dosage: 0
    };
  },
  methods: {
    // draw the initial sample image
    drawInit() {
      const src = require("@/assets/sample.jpg");
      this.img = new Image();
      this.img.src = src;
      this.updateImage();
    },

    // function to draw the stored image file
    drawImg() {
      const ctx = this.canvas.getContext("2d");
      while (this.canvas.height != this.img.height) {
        this.canvas.height = this.img.height;
        this.canvas.width = this.img.width;
      }
      ctx.drawImage(this.img, 0, 0);
      this.drawVoronoi();
    },

    drawVoronoi() {
      var iv = new VoronoiDrawer(this.canvas, this.num_sites * 40);
      if (this.ifRGB) {
        iv.RGBVoronoi(this.dosage);
      } else {
        iv.FillVoronoi(0);
      }
    },

    updateImage() {
      this.img.onload = () => {
        this.drawImg();
      };
    },

    updateSite() {
      this.drawImg();
    },

    changeNumCite() {
      console.log("Number of sites changed to", this.num_sites * 50);
      const self = this;
      self.updateSite();
    },

    changeRGB() {
      if (this.ifRGB) {
        this.drawImg();
      }
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
        self.updateImage();
      };
      reader.readAsDataURL(files);
    },

    changeMode() {
      this.ifRGB = !this.ifRGB;
      this.drawImg();
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
.IV {
  background-color: #0f2031;
}

.mdi-camera::before {
  color: #bbebd8;
}

.text-input-light .v-text-field__slot .v-label {
  color: #bbebd8;
  font-size: 13px;
}

.text-input-light .v-text-field__slot .v-file-input__text {
  color: #bbebd8;
  font-size: 13px;
}

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
  color: #bbebd8;
  background-color: ;
}
.light-bg {
  background-color: #0f2031;
  border-bottom: 1px #3a7982 solid;
  border-top: 1px #3a7982 solid;
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
  /* z-index: -1; */
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
.control-vinput {
  max-height: 22px;
  color: #bbebd8;
}
.control-label {
  max-width: 90px;
  float: left;
  display: block;
  font-size: 11px;
  color: #bbebd8;
}
.selection-label {
  max-width: 90px;
  float: left;
  display: block;
  font-size: 15px;
  color: #bbebd8;
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
  color: #bbebd8;
  color: ;
  float: right;
  border: 0;
  max-width: 30px;
  font-family: sans-serif;
  background-color: transparent;
  font-size: 11px;
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
  color: #bbebd8;
  color: ;
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
  line-height: 1.7;
  padding-top: 3%;
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


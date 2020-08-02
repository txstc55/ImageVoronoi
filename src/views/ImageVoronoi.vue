<template>
  <div class="ImageVoronoi">
    <h1>Image Voronoi</h1>
    <div id="input-icon">
      <v-file-input
        label="File input"
        filled
        type="file"
        prepend-icon="mdi-camera"
        @change="onFileChange($event)"
      ></v-file-input>
    </div>
    <canvas id="canvas" ref="myCanvas" />
  </div>
</template>




<script>
import PrepImage from "@/voronoi/ImageGradient.js";
// import { Delaunay } from "d3-delaunay";
import Voronoi from "voronoi";
export default {
  name: "ImageVoronoi",
  data: function() {
    return {
      canvas: null,
      img: null
    };
  },
  methods: {
    // draw the initial sample image
    drawInit() {
      const src = require("@/assets/sample.jpg");
      this.img = new Image();
      this.img.src = src;
      this.drawImg();
      // const points = [
      //   [0, 0],
      //   [0, 1],
      //   [1, 0],
      //   [1, 1]
      // ];
      // const delaunay = Delaunay.from(points);
      // const voronoi = delaunay.voronoi([0, 0, 960, 500]);
      // console.log(voronoi);
      const voronoi = new Voronoi();
      const bbox = { xl: 0, xr: 100, yt: 0, yb: 100 }; // xl is x-left, xr is x-right, yt is y-top, and yb is y-bottom
      const sites = [
        { x: 50, y: 50 },
        { x: 52, y: 52 },
      ];
      const diagram = voronoi.compute(sites, bbox);
      console.log(diagram.cells);
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
        const gray = new PrepImage(this.canvas);
        gray.grayScale();
      };
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
</style>


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
import ChoosePoint from "@/voronoi/ChoosePoints.js";
import Voronoi from "voronoi";
export default {
  name: "ImageVoronoi",
  data: function() {
    return {
      canvas: null,
      img: null,
      sites: []
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
        const grad = new PrepImage(this.canvas);
        var tmp = grad.sobelFilter();
        // grad.display(tmp);
        var cp = new ChoosePoint(
          tmp,
          this.canvas.width,
          this.canvas.height,
          200
        );
        var pos = cp.pickPosition();
        console.log(pos);
        const voronoi = new Voronoi();
        const bbox = {
          xl: 0,
          xr: this.canvas.width,
          yt: 0,
          yb: this.canvas.height
        }; // xl is x-left, xr is x-right, yt is y-top, and yb is y-bottom
        var sites = [];
        for (var i = 0; i < pos.length; i++) {
          sites.push({ x: pos[i][0], y: pos[i][1] });
        }
        const diagram = voronoi.compute(sites, bbox);
        console.log(diagram.cells.length);
        for (i = 0; i < diagram.cells.length; i++) {
          // console.log(diagram.cells[i]);
        //   const site = diagram.cells[i].site;
          // console.log(site);

          for (var j = 0; j < diagram.cells[i].halfedges.length; j++) {
            ctx.beginPath();
            const va = diagram.cells[i].halfedges[j].edge.va;
            const vb = diagram.cells[i].halfedges[j].edge.vb;
            // console.log(va);
            ctx.moveTo(va.x, va.y);
            ctx.lineTo(vb.x, vb.y);
            // ctx.closePath();
            ctx.stroke();
          }
        }
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


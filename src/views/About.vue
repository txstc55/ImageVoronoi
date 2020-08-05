<template>
  <div class="about">
    <h1 class="intro">Image Voronoi</h1>
    <br />
    <div class="intro-box">
      <h3 class="intro">
        An image voronoi experiment. Each voronoi region is filled with average color in that region.
        <br />With the get high option, three voronoi diagrams is computed. Each of the three puts different weight on RGB channel, which creates an illution of getting high. Although, generate such image will take some time.
        <br />The inverse option is a inverse point picking method for voronoi, this will lead to a different set of voronoi points.
        <br />Hover over the images to have a better look!
      </h3>
      <br />
    </div>
    <div class="row">
      <div class="column">
        <h3 class="intro">Original Image</h3>
        <br />
        <img class="sample-image" src="../assets/sample.jpg" alt="Original image" />
      </div>
      <div class="column">
        <h3 class="intro">Generated Voronoi</h3>
        <br />
        <img class="sample-image" src="../assets/sample-voronoi.png" alt="Generated voronoi image" />
      </div>
      <div class="column">
        <h3 class="intro">Getting High</h3>
        <br />
        <img
          class="sample-image"
          src="../assets/sample-voronoi-high.png"
          alt="Generated Image with High Option"
        />
      </div>
      <div class="column">
        <h3 class="intro">Voronoi with inverse point picking</h3>
        <br />
        <img
          class="sample-image"
          src="../assets/sample-voronoi-inverse.png"
          alt="Generated image with inverse point picking"
        />
      </div>
      <div class="column">
        <h3 class="intro">Getting high with inverse PP</h3>
        <br />
        <img
          class="sample-image"
          src="../assets/sample-voronoi-inverse-high.png"
          alt="Generated image with inverse point picking and getting high"
        />
      </div>
      <div class="column">
        <img class="sample-image" src="../assets/sample2.jpg" alt="Original image" />
      </div>
      <div class="column">
        <img class="sample-image" src="../assets/sample2-voronoi.png" alt="Generated voronoi image" />
      </div>
      <div class="column">
        <img
          class="sample-image"
          src="../assets/sample2-voronoi-high.png"
          alt="Generated Image with High Option"
        />
      </div>
      <div class="column">
        <img
          class="sample-image"
          src="../assets/sample2-voronoi-inverse.png"
          alt="Generated image with inverse point picking"
        />
      </div>
      <div class="column">
        <img
          class="sample-image"
          src="../assets/sample2-voronoi-inverse-high.png"
          alt="Generated image with inverse point picking and getting high"
        />
      </div>
      <div class="column">
        <img class="sample-image" src="../assets/sample3.jpg" alt="Original image" />
      </div>
      <div class="column">
        <img class="sample-image" src="../assets/sample3-voronoi.png" alt="Generated voronoi image" />
      </div>
      <div class="column">
        <img
          class="sample-image"
          src="../assets/sample3-voronoi-high.png"
          alt="Generated Image with High Option"
        />
      </div>
      <div class="column">
        <img
          class="sample-image"
          src="../assets/sample3-voronoi-inverse.png"
          alt="Generated image with inverse point picking"
        />
      </div>
      <div class="column">
        <img
          class="sample-image"
          src="../assets/sample3-voronoi-inverse-high.png"
          alt="Generated image with inverse point picking and getting high"
        />
      </div>
    </div>
    <div class="row"></div>
  </div>
</template>


<style scoped>
.intro {
  color: #c3dad7;
}

.intro-box {
  max-width: 60%;
  text-align: center;
  margin: auto;
}

.column {
  float: left;
  width: 20%;
}
.row {
  padding-top: 0.5%;
}
.row::after {
  content: "";
  clear: both;
  display: table;
}
.sample-image {
  width: 100%;
  transition: transform 0.2s; /* Animation */
}

.sample-image:hover {
  transform: scale(1.75);
}
</style>
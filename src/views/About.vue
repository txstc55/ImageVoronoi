<template>
  <div class="about">
    <h1 class="intro">Image Voronoi</h1>
    <br />
    <div class="intro-box">
      <h3 class="intro">
        An image voronoi experiment. Each voronoi region is filled with average color in that region.
        <br />With the get high option, three voronoi diagrams is computed. Each of the three puts different weight on RGB channel, which creates an illution of getting high. Although, generate such image will take some time.
      </h3>
    </div>
    <div class="row">
      <div class="column">
        <img src="../assets/sample.jpg" alt="Input Image 1" style="width:100%" />
        <!-- <h2 class="intro">Original Image</h2> -->
      </div>
      <div class="column">
        <img src="../assets/sample-voronoi.png" alt="Generated Image 1" style="width:100%" />
        <!-- <h2 class="intro">Generated Image</h2> -->
      </div>
      <div class="column">
        <img src="../assets/sample-voronoi-high.png" alt="Generated Image with High Option" style="width:100%" />
        <!-- <h2 class="intro">Get High</h2> -->
      </div>
      <div class="column">
        <img src="../assets/sample2.jpeg" alt="Input Image 2" style="width:100%" />
        <!-- <h2 class="intro">Original Image</h2> -->
      </div>
      <div class="column">
        <img src="../assets/sample2-voronoi.png" alt="Generated Image 2" style="width:100%" />
        <!-- <h2 class="intro">Generated Image</h2> -->
      </div>
      <div class="column">
        <img src="../assets/sample2-voronoi-high.png" alt="Generated Image with High Option" style="width:100%" />
        <!-- <h2 class="intro">Get High</h2> -->
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
  width: 33.33%;
}
.row {
  padding-top: 0.5%;
}
.row::after {
  content: "";
  clear: both;
  display: table;
}
</style>
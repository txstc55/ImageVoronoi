<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">About</router-link>|
      <router-link to="/imagevoronoi">Image Voronoi</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #0f2031;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a {
  color: #5ca097;
}
#nav a.router-link-exact-active {
  color: #3ccc8b;
  font-weight: bold;
}

body {
  background-color: #0f2031;
}
</style>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    localStorage.setItem("consent", "false");
    localStorage.setItem("check", "true");
  }
};
</script>

<style>
body {
  background-image: url("https://thumbs.gfycat.com/SeparateSameAmurratsnake-size_restricted.gif");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

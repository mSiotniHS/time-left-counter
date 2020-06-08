<template>
  <div id="app">
    <Header style="margin: 60px 0 40px" />
    <CardList />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import CardList from "@/components/CardList.vue";

export default {
  name: "App",
  components: {
    Header,
    CardList
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

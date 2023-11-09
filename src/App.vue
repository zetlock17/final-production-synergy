<template>
  <navigation-bar/>
  <main>
    <router-view />
  </main>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';


export default {
    name: 'App',
    components: { NavigationBar }
}
</script>

<style>
main {
  width: 50%;
  margin: 0 auto;
  background-color: aliceblue;
  padding: 5px 15px 15px 15px;
  /* background-color:; */
}
body {
  margin: 0;
  font-family: Gill Sans;
  font-weight: 500;
}
</style>

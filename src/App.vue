<template>
  <div id="app">
    <Header></Header>
    <input type="checkbox" id="open" class="sidebar-checkbox">
    <Sidebar></Sidebar>
    <Main>
      <router-view></router-view>
    </Main>
  </div>
</template>

<script>

  import Header from "@/components/Header"
  import Sidebar from "@/components/Sidebar"
  import Main from "@/components/Main"
  import 'normalize.css'
  import './assets/scss/global.scss'

  export default {
    name: 'App',
    components: {Main, Sidebar, Header}
  }
</script>

<style>

</style>

<template>
  <div id="app">
    <div class="app-wrapper">
      <Header></Header>
      <div class="flex">
        <input type="checkbox" id="open" class="sidebar-checkbox" ref="menu-checked">
        <Sidebar></Sidebar>
        <Main>
          <router-view></router-view>
        </Main>
      </div>
    </div>
  </div>
</template>

<script>
  import 'normalize.css'
  import './assets/scss/global.scss'
  import './assets/scss/app.scss'
  import Header from "@/components/Header"
  import Sidebar from "@/components/Sidebar"
  import Main from "@/components/Main"

  export default {
    name: 'App',
    components: {Main, Sidebar, Header}
  }
</script>

<style>

</style>

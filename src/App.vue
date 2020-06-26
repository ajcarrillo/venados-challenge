<template>
  <div id="app">
    <div class="app-wrapper">
      <Header></Header>
      <div class="flex">
        <input type="checkbox" id="open" class="sidebar-checkbox">
        <Sidebar></Sidebar>
        <Main>
          <router-view></router-view>
        </Main>
      </div>
    </div>
  </div>
</template>

<script>

  import Header from "@/components/Header"
  import Sidebar from "@/components/Sidebar"
  import Main from "@/components/Main"
  import 'normalize.css'
  import './assets/scss/global.scss'
  import './assets/scss/app.scss'

  export default {
    name: 'App',
    components: {Main, Sidebar, Header}
  }
</script>

<style>

</style>

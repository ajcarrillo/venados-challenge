<template>
  <aside class="left-sidebar">
    <div style="position: sticky; top: 0">
      <div class="logo">
        <img class="logo-img" src="../assets/logo.png" alt="Venados FC">
      </div>
      <div class="aside-content">
        <ul class="menu">
          <li class="menu-item">
            <router-link to="/home" exact exact-active-class="active">Home</router-link>
          </li>
          <li class="menu-item">
            <router-link to="/statistics" exact exact-active-class="active">Estadísticas</router-link>
          </li>
          <li class="menu-item">
            <router-link to="/players" exact exact-active-class="active">Jugadores</router-link>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script>
  import '../assets/scss/sidebar.scss'

  export default {
    name: "Sidebar"
  }
</script>

<style scoped>

</style>
<template>
  <aside class="left-sidebar">
    <div style="position: sticky; top: 0">
      <div class="logo">
        <img class="logo-img" src="../assets/logo.png" alt="Venados FC">
        <p>Venados FC</p>
      </div>
      <div class="aside-content">
        <ul class="menu">
          <li class="menu-item">
            <router-link :to="{name: 'home'}" exact exact-active-class="active">Home</router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{name: 'statistics'}" exact exact-active-class="active">Estadísticas</router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{name: 'players'}" exact exact-active-class="active">Jugadores</router-link>
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
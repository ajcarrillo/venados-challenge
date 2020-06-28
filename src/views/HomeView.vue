<template>
  <div class="home-content">
    <div class="logos-container">
      <div class="club-logo">
        <img src="../assets/logo.png" alt="Venados FC">
      </div>
      <div class="copa-mx-logo" @click="selectedGames = copaMxGames">
        <img src="../assets/Copa_MX.svg" alt="Copa MX">
      </div>
      <div class="ascenso-mx-logo" @click="selectedGames = ascensoMxGames">
        <img src="../assets/Ascenso_MX_2.svg" alt="Ascenso MX">
      </div>
    </div>
    <div class="games">
      <GamesList :games="selectedGames"></GamesList>
    </div>
  </div>
</template>

<script>
  import '../assets/scss/home.scss'
  import {mapState, mapGetters, mapActions} from 'vuex'
  import GamesList from "@/components/GamesList"

  export default {
    name: "HomeView",
    components: {GamesList},
    data() {
      return {
        fetchingGames: false,
        selectedGames: []
      }
    },
    mounted() {
      this.getGames()
      this.$root.$el.querySelector('#open').checked = false
    },
    methods: {
      async getGames() {
        try {
          this.fetchingGames = true
          await this['fetchGames']()
        } catch (e) {
          console.log(e)
        } finally {
          this.fetchingGames = false
        }
      },
      ...mapActions([
        'fetchGames'
      ])
    },
    computed: {
      ...mapState({
        games: state => state.games
      }),
      ...mapGetters([
        'copaMxGames',
        'ascensoMxGames'
      ])
    }
  }
</script>

<style scoped>

</style>
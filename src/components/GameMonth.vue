<template>
  <div class="games-month">
    <p class="games-month-name">{{ month }}</p>
    <Game v-for="(game, index) in monthGames" :game="game" :key="index"></Game>
  </div>
</template>

<script>
  import Game from "@/components/Game"
  import {moment} from "@/bootstrap"

  export default {
    name: "GameMonth",
    components: {Game},
    props: {
      month: {
        type: String,
        required: true
      },
      games: {
        type: Array,
        required: true
      }
    },
    data() {
      return {}
    },
    methods: {},
    computed: {
      monthGames() {
       return this.games.filter(game => {
          return moment(game.datetime.split('T')[0]).format('MMMM').toUpperCase() === this.month
        })
      }
    }
  }
</script>

<style scoped>

</style>
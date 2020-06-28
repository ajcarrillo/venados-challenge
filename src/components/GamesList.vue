<template>
  <div>
    <template v-if="months.length > 0">
      <div v-for="month in months" :key="month" class="games-list">
        <div class="games-month">
          <p class="games-month-name">{{ month }}</p>
          <Game v-for="(game, index) in draft" :game="game" :key="index"></Game>
        </div>
      </div>
    </template>
    <template v-else>
      <div>
        <p>Seleccionar torneo</p>
      </div>
    </template>
  </div>
</template>

<script>
  import '../assets/scss/gamesList.scss'
  import Game from "@/components/Game"
  import {moment} from '@/bootstrap'
  
  export default {
    name: "GamesList",
    components: {Game},
    props: {
      games: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        allMonths: [
          {'1': 'ENERO'},
          {'2': 'FEBRERO'},
          {'3': 'MARZO'},
          {'4': 'ABRIL'},
          {'5': 'MAYO'},
          {'6': 'JUNIO'},
          {'7': 'JULIO'},
          {'8': 'AGOSTO'},
          {'9': 'SEPTIEMBRE'},
          {'10': 'OCTUBE'},
          {'11': 'NOVIEMBRE'},
          {'12': 'DICIEMBRE'},
        ],
        draft: []
      }
    },
    methods: {},
    computed: {
      months() {
        if (this.draft.length === 0) return []

        let allMonths = []

        this.draft.forEach(game => {
          allMonths.push(moment(game.datetime).format('MMMM').toUpperCase())
        })

        let months = [...new Set(allMonths)]

        return months.reverse()
      },
    },
    watch: {
      games(val) {
        this.draft = val
      }
    },
  }
</script>

<style scoped>

</style>
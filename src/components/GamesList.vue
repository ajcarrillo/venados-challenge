<template>
  <div>
    <template v-if="months.length > 0">
      <div v-for="month in months" :key="month" class="games-list">
        <GameMonth :games="games" :month="month"></GameMonth>
      </div>
    </template>
    <template v-else>
      <div>
        <p style="text-align: center">Seleccionar torneo</p>
      </div>
    </template>
  </div>
</template>

<script>
  import '../assets/scss/gamesList.scss'
  import {moment} from '@/bootstrap'
  import GameMonth from "@/components/GameMonth"

  export default {
    name: "GamesList",
    components: {GameMonth},
    props: {
      games: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
      }
    },
    methods: {},
    computed: {
      months() {
        if (this.games.length === 0) return []

        let allMonths = []

        this.games.forEach(game => {
          allMonths.push(moment(game.datetime).format('MMMM').toUpperCase())
        })

        let months = [...new Set(allMonths)]

        return months.reverse()
      },
    },
    watch: {
    },
  }
</script>

<style scoped>

</style>
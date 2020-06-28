<template>
  <div class="games-item">
    <div class="games-date">
      <img src="../assets/calendar-alt-regular.svg" alt="Calendar" style="width: 20px; height: 20px">
      <p>
        <span>{{ game.datetime|date }}</span>
        <span>{{ game.datetime|day }}</span>
      </p>
    </div>
    <div class="games-info">
      <div class="local-team" :class="orderLocal">
        <img src="../assets/logo.png" :alt="local.name" style="height: 50px; width: 50px">
        <p class="team-name">{{ local.name }}</p>
      </div>
      <div class="score">
        <span>{{ local.score }}</span>
        <span>-</span>
        <span>{{ opponent.score }}</span>
      </div>
      <div class="opponent-team" :class="orderVisit">
        <img :src="opponent.image" :alt="opponent.name" style="height: 50px; width: 50px">
        <p class="team-name">{{ opponent.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import '../assets/scss/game.scss'
  import {moment} from "@/bootstrap"

  export default {
    name: "Game",
    props: {
      game: {
        type: Object,
        required: true
      }
    },
    data() {
      return {}
    },
    methods: {},
    computed: {
      orderLocal() {
        return {
          'order-visit': !this.isLocal,
        }
      },
      orderVisit(){
        return {
          'order-visit': this.isLocal,
          'order-local': !this.isLocal,
        }
      },
      isLocal() {
        return this.game.local
      },
      opponent() {
        let {opponent, opponent_image, away_score} = this.game
        return {name: opponent, image: opponent_image, score: away_score}
      },
      local() {
        let {image, home_score} = this.game
        return {name: 'Venados FC', image, score: home_score}
      }
    },
    filters: {
      date(val) {
        if (val) {
          return moment(val.split('T')[0]).format('DD')
        }
      },
      day(val) {
        if (val) {
          return moment(val.split('T')[0]).format('ddd').toUpperCase()
        }
      }
    }
  }
</script>

<style scoped>

</style>
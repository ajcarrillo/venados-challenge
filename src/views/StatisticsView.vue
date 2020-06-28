<template>
  <div>
    <div class="statistics">
      <div class="statistics-content">
        <div class="statistics-header">
          <p class="statistics-title">TABLA GENERAL</p>
          <div class="statistics-header-list">
            <ul>
              <li>JJ</li>
              <li>DG</li>
              <li>PTS</li>
            </ul>
          </div>
        </div>
        <div class="statistics-list">
          <div class="statistics-item" v-for="stats in statistics" :key="stats.team">
            <div class="statistics-team">
              <p class="team-position">{{ stats.position }}</p>
              <p class="team-info">
                <img :src="stats.image" alt="" style="width: 50px">
                <span>{{ stats.team }}</span>
              </p>
            </div>
            <div class="statistics-numbers">
              <ul>
                <li>{{ stats.games }}</li>
                <li>{{ stats.score_diff }}</li>
                <li>{{ stats.points }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '../assets/scss/statistics.scss'
  import {mapState, mapActions} from 'vuex'

  export default {
    name: "StatisticsView",
    data() {
      return {
        fetchingStats: false
      }
    },
    created() {
      this.getStatistics()
    },
    methods: {
      async getStatistics() {
        try {
          this.fetchingStats = true
          await this['fetchStatistics']()
        } catch (e) {
          console.log(e)
        } finally {
          this.fetchingStats = false
        }
      },
      ...mapActions([
        'fetchStatistics'
      ])
    },
    computed: {
      ...mapState({
        statistics: state => state.statistics
      })
    }
  }
</script>

<style scoped>

</style>
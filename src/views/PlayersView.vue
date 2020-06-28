<template>
  <div>
    <div class="players">
      <div class="players-content">
        <ul class="players-list">
          <template v-for="roles in players">
            <li v-for="(player, index) in roles" :key="index">
              <div class="player-image">
                <img :src="player.image" alt="" style="width: 50px">
              </div>
              <div>
                <p style="margin-bottom: 0">{{ player.position }}</p>
                <p style="margin-top: 0">{{ `${player.name} ${player.first_surname}` }}</p>
              </div>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import '../assets/scss/players.scss'
  import {mapActions, mapState} from 'vuex'

  export default {
    name: "PlayersView",
    data() {
      return {
        fetchingPlayers: false,
        playerSelected: {empty: true}
      }
    },
    created() {
      this.getPlayers()
    },
    methods: {
      async getPlayers() {
        try {
          this.fetchingPlayers = true
          await this['fetchPlayers']()
        } catch (e) {
          console.log(e)
        } finally {
          this.fetchingPlayers = false
        }
      },
      ...mapActions([
        'fetchPlayers'
      ])
    },
    computed: {
      ...mapState({
        players: state => state.players
      })
    }
  }
</script>

<style scoped>

</style>
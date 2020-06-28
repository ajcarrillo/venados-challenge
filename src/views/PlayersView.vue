<template>
  <div>
    <PlayerDetail v-if="showModal"
                  @close="showModal = false"
                  :selected-player="selectedPlayer"
    ></PlayerDetail>
    <div class="players">
      <div class="players-content">
        <ul class="players-list">
          <template v-for="(roles, key) in players">
            <li v-for="(player, index) in roles" :key="player.number" @click="goToPlayerView(index, key)">
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
  import PlayerDetail from "@/components/PlayerDetail"

  export default {
    name: "PlayersView",
    components: {PlayerDetail},
    data() {
      return {
        fetchingPlayers: false,
        selectedPlayer: {},
        showModal: false
      }
    },
    created() {
      this.getPlayers()
    },
    mounted() {
      this.$root.$el.querySelector('#open').checked = false
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
      goToPlayerView(index, roles) {
        this.selectedPlayer = this.players[roles][index]
        this.showModal = true
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

<style scoped lang="css">

</style>
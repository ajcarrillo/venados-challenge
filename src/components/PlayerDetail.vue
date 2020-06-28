<template>
  <transition name="modal">
    <div class="modal-mask" @click="$emit('close')">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
            <div class="player-detail-header">
              <h1>FICHA TÉCNICA</h1>
              <div class="player-image" :style="{backgroundImage: `url('${selectedPlayer.image}')`}"></div>
              <p>{{fullName}}</p>
              <p>{{selectedPlayer.position}}</p>
            </div>
            <div class="player-detail-info">
              <div>
                <p class="label">FECHA DE NACIMIENTO</p>
                <p class="caption">{{ birthday }}</p>
              </div>
              <div>
                <p class="label">LUGAR DE NACIMIENTO</p>
                <p class="caption">{{selectedPlayer.birth_place}}</p>
              </div>
              <div>
                <p class="label">PESO</p>
                <p class="caption">{{ selectedPlayer.weight }} KG</p>
              </div>
              <div>
                <p class="label">ALTURA</p>
                <p class="caption">{{ selectedPlayer.height }} M</p>
              </div>
              <div>
                <p class="label">EQUIPO ANTERIOR</p>
                <p class="caption">{{ selectedPlayer.last_team }}</p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="$emit('close')">
                Cerrar
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import '../assets/scss/playerDetail.scss'
  import {moment} from "@/bootstrap"

  export default {
    name: "PlayerDetail",
    props: {
      selectedPlayer: {
        type: Object,
        required: true
      }
    },
    data() {
      return {}
    },
    methods: {},
    computed:{
      fullName(){
        return `${this.selectedPlayer.name} ${this.selectedPlayer.first_surname} ${this.selectedPlayer.second_surname}`
      },
      birthday(){
        return moment(this.selectedPlayer.birthday.split('T')[0]).format('DD/MM/YYYY')
      }
    }
  }
</script>

<style scoped>

</style>
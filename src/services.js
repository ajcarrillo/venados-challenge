import axios from 'axios'

const venadosDacodes = axios.create({
  baseURL: 'https://venados.dacodes.mx/api/',
  timeout: 10000,
  headers: {'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json'}
})

export default {
  fetchGames(){
    return venadosDacodes.get('games');
  },
  fetchStatistics(){
    return venadosDacodes.get('statistics')
  },
  fetchPlayers(){
    return venadosDacodes.get('players')
  }
}
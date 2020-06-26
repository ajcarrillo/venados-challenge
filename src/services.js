import axios from 'axios'

const venadosDacodes = axios.create({
  timeout: 10000,
  headers: {
    'Accept': 'application/json',
  }
})

export default {
  fetchGames(){
    return venadosDacodes.get('/api/games');
  },
  fetchStatistics(){
    return venadosDacodes.get('/api/statistics')
  },
  fetchPlayers(){
    return venadosDacodes.get('/api/players')
  }
}
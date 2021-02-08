import { createStore } from 'vuex'

const store = new (createStore({
  state: {
    stageName: 'Introduction',
    playerName: 'Fodder'
  },
  getters: {
    getPlayerName: state => {
      return state.playerName;
    }
  }
}) as any);

export default store;
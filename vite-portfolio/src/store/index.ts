import { createStore } from 'vuex';
import getters from './getters'

const myStore = {
  state() {
    return {
      stageName: "Intro",
      playerName: "Fodder"
    }
  },
  getters: {
    ...getters 
  }
}

const store = createStore(myStore);

export default store;
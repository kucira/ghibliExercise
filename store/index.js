import Vuex from 'vuex';
import { state } from './state'
import { mutations } from './mutations'
import { actions } from './actions'
import { getters } from './getters'


export const createStore = () => {
  return new Vuex.Store({
    state,
    mutations,
    actions,
    getters
  })
}

export default createStore;

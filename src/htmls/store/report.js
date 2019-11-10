import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //状态
    shopPublicDraw: false,
    queryChangeCount: 0,
    status: '',
    length: 0,
  },
  mutations: {
    //触发器
    queryChange (state, obj) {
      state.queryChangeCount ++;
      state.status = obj.status;
      state.length = obj.length;
    },
    switchPublicDraw(state){
      state.shopPublicDraw = !state.shopPublicDraw;
    }
  },
  actions: {
    //异步触发器
  },
  modules: {
  }
})

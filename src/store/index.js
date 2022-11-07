import { createStore } from 'vuex'
import createVuexAlong from 'vuex-along'


export default createStore({
  state: {
    chartStatus:"",
    userInformation:{}
  },
  getters: {
  },
  mutations: {
    changeStatus(state){
      state.chartStatus = "pie"
    },
    addUserInformation(state,data){
      state.userInformation = data
    },
    clearUserInformation(state){
      state.userInformation = ""
    }
  },
  actions: {
  },
  modules: {
  },

  //重新整理頁面時,Vuex不會清除 https://www.npmjs.com/package/vuex-along 
  plugins:[
    createVuexAlong({
      name:"tiezi-vuex-along",
      local:{
        list:['userInfo'],
        isFilter:true
      },
      session:false
    })
  ]
})

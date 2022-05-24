import VuexPersistence from 'vuex-persist'


export default ({store}:any)=>{

  new VuexPersistence({
    storage: window.localStorage,
    modules: ["Lenta"],
    key: 'vuex:Lenta'
  }).plugin(store)
}







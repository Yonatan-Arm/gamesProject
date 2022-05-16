import { createStore } from 'vuex'
import itemStore from './modules/item-store.js'



const store = createStore({
    strict: true,
    product: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        itemStore,


    },
})

export default store
import { itemService } from '../../services/item-service-fullback.js'

export default {
    state: {
        items: [],
        filterBy:{
            name:'',
        },
    },
    getters: {

        getItems(state) {
            return state.items
        }

    },
    mutations: {
        setItems(state, { items }) {
            state.items = items
        },
          setFilter(state, { filterBy }) {
            state.filterBy = filterBy;
          },

    },


    actions: {
        async loadItems({context,commit, state}) {
            try{
                const items = await  itemService.query(state.filterBy)
                commit({ type: 'setItems', items })
                return items
            } catch(err){
                console.error('Cannot Load items', err)
                throw err
            }
        },
        setFilter({ commit , dispatch}, { filterBy }) {
            commit({ type: 'setFilter', filterBy });
            dispatch({type: 'loadItems'});
          },
    
    },
}
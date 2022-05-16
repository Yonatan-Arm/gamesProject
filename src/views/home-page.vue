<template>
  <main class="home-page">
    <h1>Games-List</h1>
  <game-filter @filter="setFilter"> </game-filter>
    <list :items="items"  v-if="items" />
      <span v-else> loading...</span>
  </main>
</template>
<script>

import List from "../components/list.vue";
import gameFilter from '../components/game-filter.vue'
import GameFilter from '../components/game-filter.vue'

export default {
  name: "home-page",
data(){
  return {

  }
},
 created(){

},
  methods: {
    setFilter(filterBy){
        this.$store.dispatch({ type: 'setFilter', filterBy})
    }
  },
  computed: {
     items(){
        return this.$store.getters.getItems

    }
  },
  components: {
    List,
    gameFilter,
    GameFilter
},
};
</script>

<template>
  <main class="home-page">
    <h1>Games-List</h1>
    <list :items="items"  v-if="items" />
      <span v-else> loading...</span>
  </main>
</template>
<script>

import List from "../components/list.vue";

export default {
  name: "home-page",
data(){
  return {
    items: null,

  }
},
async created(){
  this.items =await this.$store.dispatch({ type: "loadItems"});
},
  methods: {},
  computed: {
  },
  components: {
    List,
  },
};
</script>

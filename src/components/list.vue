<template>
<section>
  <ul class="item-list flex">
    <preview  v-for="item in items"  :item="item" :key="item"/> 
  </ul>

  </section>
</template>

<script>
import preview from "./preview.vue";
export default {
  props:{
items: {
    type: Array,
},
},
   created(){
  },
  components: {
    preview,
  },
  methods: {},
};
</script>

<style></style>

<template>
<section>
  <button @click="moveToDetails(item)">
    <li class=" item-card flex-col ">
      <img :src="item.thumbnail" alt="pic-game" >
      <span> title: {{item.title}} </span>
    <span> publisher: {{item.publisher}} </span>
    <span> description: {{item.short_description}} </span>
    <span> genre: {{item.genre}} </span>
  </li>
    </button>
</section>

</template>

<script>
import router from '../router';

export default {
props:{
    item:{
        type:Object,
    }
},
  data() {
    return {};
  },
  created() {
  },
  methods: {
    moveToDetails(item){
      this.$router.push(`/game/${item.id}`)
    }
  },
  computed: {},
  components: {},
};
</script>

<style></style>

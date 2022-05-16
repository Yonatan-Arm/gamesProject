<template>
<section class="game-details">
    <h1>Details game</h1>
  <div v-if="item" class="flex-col">
     <img :src="item.thumbnail" alt="pic-game" >
      <span> title: {{item.title}} </span>
    <span> publisher: {{item.publisher}} </span>
    <span> description: {{item.short_description}} </span>
    <span> genre: {{item.genre}} </span>
    <a :href="item.game_url" target="blank"> Go to play</a>
      <button @click="moveBack()"> back</button>


  </div>
  <div v-else> 
      Loading...
  </div>
  </section>
</template>

<script>
import { itemService } from "../services/item-service-fullback.js";
export default {
  data() {
    return {
      item: null,
    };
  },
  async created() {
    const id = this.$route.params.gameId;
    this.item = await itemService.getById(id);
  },
  methods:{
      moveBack(){
          this.$router.push('/')
      }
  }
};
</script>

<style></style>

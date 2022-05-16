<template>
<section>
    <li class=" item-card flex-col ">
      <img :src="item.thumbnail" alt="pic-game" >
      <span> title: {{item.title}} </span>
    <span> publisher: {{item.publisher}} </span>
    <span> description: {{item.short_description}} </span>
    <span> genre: {{item.genre}} </span>
  </li>

</section>

</template>

<script>
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
  methods: {},
  computed: {},
  components: {},
};
</script>

<style></style>

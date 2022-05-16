<template>
<section>
    <li class="flex-col">
      <span> id: {{item.title}} </span>
    <span> id: {{item.publisher}} </span>
    <span> id: {{item.id}} </span>
    <span> id: {{item.short_description}} </span>
    <span> id: {{item.genre}} </span>
    <img :src="item.thumbnail" alt="pic-game" >
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

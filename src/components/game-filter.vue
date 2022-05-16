<template>
  <section class="filter">
    <label>
    Search:
    <input
    class="filter-input"
      v-model="filterBy.name"
      @input="setFilter"
      type="text"
      placeholder="Search.."
    />
    </label>
  </section>
</template>

<script>

export default {

  data() {
    return {
      filterBy: {
        name: "",
      },
    };
  },
  methods: {
    setFilter() {
      this.$emit("filter", JSON.parse(JSON.stringify( this.filterBy)));
    },
  },
  components: {
  },
};
</script>
<style>


</style>

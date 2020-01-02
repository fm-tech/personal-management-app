<template>
  <div class="container">
    <div class="columns is-desktop">
      <div class="column is-3">
        <Menu />
      </div>
      <div class="column is-9">
        <!-- Card -->
        <Card />
        <!-- Card End -->
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./helpers/Card";
import Menu from "./helpers/Menu";

export default {
  components: {
    Card,
    Menu
  },
  props: {
    title: String,
    content: String
  }
};
</script>

<style lang="scss" scoped>
</style>


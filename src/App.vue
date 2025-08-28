<script setup>
  import HabitFrom from './components/HabitFrom.vue';
  import HabitList from './components/HabitList.vue';
</script>

<template>
  <div class="d-component">
    <HabitFrom></HabitFrom>
    <HabitList></HabitList>
  </div>
</template>

<style lang="css" scoped>
  .d-component{
    display: flex;
  }
</style>



<script setup>
  import {ref} from 'vue'; 
  import HabitFrom from './components/HabitFrom.vue';
  import HabitList from './components/HabitList.vue';

  const currentHabit = ref({});
  const selectHandler = (ev) => {
    currentHabit.value = {...ev};
  };
</script>

<template>
  <div class="d-component">
    <HabitFrom v-model="currentHabit"></HabitFrom>
    <HabitList @select:habit="selectHandler"></HabitList>
  </div>
</template>

<style lang="css" scoped>
  .d-component{
    display: flex;
  }
</style>



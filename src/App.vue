<script setup>
  import {ref, reactive} from 'vue'; 
  import HabitFrom from './components/HabitFrom.vue';
  import HabitList from './components/HabitList.vue';

  const habits = ref([{
        name: "Зарядка",
        frequency: 1,
        period: 1,
        description: "Бег 1 км с расвета"
    },{
        name: "Чтение",
        frequency: 7,
        period: 3,
        description: "Чтение трёх глав в полдень"
    },{
        name: "Компьютерные игры",
        frequency: 7,
        period: 10,
        description: "Прохождение 10 уровней видеоигры"
    }]);

  const currentHabit = ref({ name: '', description: '', frequency: 1, period: 1 });


  const onSave = (payload) => {
    habits.value.push({ ...payload });
    currentHabit.value = { name: '', description: '', frequency: 1, period: 1 };
  };


  const onSelectHabit = (habit) => {
    currentHabit.value = habit;
  };


  const onDeleteHabit = (index) => {
    habits.value.splice(index, 1);
  };

</script>

<template>
  <div class="d-component">
    <HabitFrom v-model="currentHabit" @save="onSave"></HabitFrom>
    <HabitList :habits="habits" @select:habit="onSelectHabit" @delete:habit="onDeleteHabit"></HabitList>
  </div>
</template>

<style lang="css" scoped>
  .d-component{
    display: flex;
  }
</style>



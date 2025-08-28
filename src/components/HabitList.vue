<script setup>

import { reactive } from 'vue';

const habits = reactive([{
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

</script>
<template>
<ul class="list">
    <li class="container" v-for="habit,idx in habits" :key="idx" :habit="habit">
        <div class="habit-head">{{ habit.name }}</div>
        <div class="freq">
            {{ habit.period }} раз
            <span v-show="habit.frequency===1">ежеденевно</span>
            <spna v-show="habit.frequency===7">еженедельно</spna>
            <span v-show="habit.frequency===30">ежемесячно</span>
        </div>
    
    </li>
</ul>
</template>

<style scoped>
    .list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        list-style-type: none;
        min-width: 20rem;
    }

    .container {
        cursor: pointer;
    }
    .container:hover{
        background-color: beige;
    }
    .freq{
        text-align: center;
    }
    .habit-head{
        font-weight: 700;
        text-align: center;
    }
</style>
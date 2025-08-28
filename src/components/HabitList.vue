<script setup>
    import HabitItem from './HabitItem.vue';
    import { reactive, defineEmits } from 'vue';

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

    const emits = defineEmits({'select:habit': (ev) => {
        return true;
    }});

    const deleteHandler = (idx) => {
        habits.splice(idx, 1);
    };

</script>

<template>
    <ul class="list">
        <HabitItem v-for="(item, idx) in habits" :item="item" :key="idx" @click="$emit('select:habit', item)" class="list-item">
            <template #action>
                <button class="butt" @click.stop="deleteHandler(idx)">Удалить</button>
            </template>
        </HabitItem>
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

    .butt{
        background-color: var(--button-submit_bg);
        border: none;
        border-radius: 5px;
        color: white;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        height: 7%; 
    }

        .list-item{
        background-color: white;
        border-radius: 1rem;
        padding: 1rem;

    }

    .list-item:hover{
        background-color: antiquewhite;
        cursor: pointer;
    }

    .butt:hover{
        background-color: red;
        cursor: pointer;
    }

</style>
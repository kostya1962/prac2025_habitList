<script setup>
    import HabitItem from './HabitItem.vue';
    import { reactive, defineEmits } from 'vue';


    const props = defineProps({
        habits: { type: Array, required: true }
    });
    const emit = defineEmits(['select:habit', 'delete:habit']);

</script>

<template>
    <ul class="list">
        <HabitItem v-for="(item, idx) in habits" :item="item" :key="idx" @click="$emit('select:habit', item)" class="list-item">
            <template #action>
                <button class="butt" @click.stop="emit('delete:habit', idx)">Удалить</button>
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
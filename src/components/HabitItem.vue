<script setup>
    import { defineProps } from "vue";


    const props = defineProps({
        item: {
                type: Object,
                required: true,
            }
    });
</script>

<template>
    <li class="card">
        <div class="flex">
            <div v-text="item.name"></div>
            
            <p>
                <template v-if="item.frequency === 1">Каждый день.</template>
                <template v-if="item.frequency === 7">Раз в неделю.</template>
                <template v-if="item.frequency === 30">Раз в месяц.</template>
                <span> {{ item.period }} раз за итерацию.</span>
            </p>

            <slot name="action" class="butt"></slot>   
    </div>  
    </li>
</template>

<style scoped>

    .card{
        background-color: var(--card-bg);
        border-radius: 10px;
        padding: 45px;
        box-shadow: 2px 3px 10px blueviolet; 
        width: 300px;
        height: 100px;
    }

    .flex{
        display: flex;
        flex-direction: column;
        place-items: center;
    }
</style>


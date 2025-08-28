<script setup>
    import { ref, watch, defineModel, defineEmits } from "vue";

    const count = ref();
    const model = defineModel({ default: { name: '', description: '', frequency: undefined, period: undefined } });
    const emit = defineEmits(['save']);

    const countTotal = (model) => {
        let res = "Не подсчитано";
        const frequencyValue = model.frequency;
        const periodValue = model.period;
        if(frequencyValue == undefined  || periodValue == undefined ){
            count.value = res;
            return;
        }
        else {
            res = (frequencyValue * periodValue);
        }
        count.value = res;
    }

    watch(model, countTotal, { deep: true });


    const submit = () => {
        const payload = { ...model.value };
        emit('save', payload);
        model.value = { name: '', description: '', frequency: 1, period: 1 };
    };
</script>

<template>
    <div class="container">
        <h1>Редактирование привычки</h1>
            <form @submit.prevent="submit">
                <div class="form-group">
                    <label for="habitName">Название привычки<br>
                    <input type="text" name="habitName" placeholder="Введите название привычки" required v-model="model.name"></label>
                    <br><br>
                </div>
                <div class="form-group">
                    <label for="habitDescription">Описание:</label><br>
                    <textarea name="habitDescription" rows="4" placeholder="Опишите вашу привычку" v-model="model.description"></textarea>
                    <br><br>
                </div>
                <div class="form-group">
                    <label for="frequency">Частота выполнения:
                    <select name="frequency" v-model="model.frequency">
                        <option :value="1">Ежедневно</option>
                        <option :value="7">Еженедельно</option>
                        <option :value="30">Ежемесячно</option>                 
                    </select>
                    </label>
                    <br/>
                </div>
                <div class="form-group">
                    <label for="period">Количество повторений <br/>
                    <input type="number" name="period" placeholder="Введите название привычки" required
                        v-model="model.period"/>
                    </label>
                    <br/><br/>
                </div>
                
                <div class="form-group">
                    Общее количество повторений 
                    {{count}}
                </div>
                <button type="submit">Сохранить изменения</button>
            </form>
        </div>
</template>

<style scoped>

</style>
<script setup>
    import { reactive, ref, watch } from "vue";


    const count = ref();
    const habit = reactive({})

    const countTotal = (habit) => {
        let res = "Не подсчитано";
        const frequencyValue = habit.frequency;
        const periodValue = habit.period;
        if(frequencyValue == undefined  || periodValue == undefined ){
            count.value = res;
            return
        }
        else {
            res = (frequencyValue * periodValue);
        }
        count.value = res;
    }

    watch(habit, countTotal);


    const submit = (ev) => {
        console.log(JSON.stringify(habit))
    };
</script>

<template>
    <div class="container">
        <h1>Редактирование привычки</h1>
            <form @submit.prevent="submit">
                <div class="form-group">
                    <label for="habitName">Название привычки<br>
                    <input type="text" name="habitName" placeholder="Введите название привычки" required v-model="habit.name"></label>
                    <br><br>
                </div>
                <div class="form-group">
                    <label for="habitDescription">Описание:</label><br>
                    <textarea name="habitDescription" rows="4" placeholder="Опишите вашу привычку" v-model="habit.description"></textarea>
                    <br><br>
                </div>
                <div class="form-group">
                    <label for="frequency">Частота выполнения:
                    <select name="frequency" v-model="habit.frequency">
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
                        v-model="habit.period"/>
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
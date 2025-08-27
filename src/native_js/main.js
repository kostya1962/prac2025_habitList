
const totalElement = document.querySelector("#totalCount");
const form = document.querySelector('#form');

const habit = {}; // Объект для хранения данных о привычке

// Создаем объекты для каждого поля ввода
const name = {
    selector: document.querySelector("#habitName"),
    handler(ev) {
        const eventValue = ev.target.value;
        habit.name = eventValue;
        console.log('name', habit.name);
    }
};

const description = {
    selector: document.querySelector("#habitDescription"),
    handler(ev) {
        const eventValue = ev.target.value;
        habit.description = eventValue;
        console.log('desc', habit.description);
    }
};

const period = {
    selector: document.querySelector("#period"),
    handler(ev) {
        const eventValue = ev.target.value;
        habit.period = eventValue !== undefined ? parseInt(eventValue) : undefined;
        countTotal(habit);
        console.log('period', habit.period);
    }
};

const frequency = {
    selector: document.querySelector("#frequency"),
    handler(ev) {
        const eventValue = ev.target.value;
        habit.frequency = eventValue !== undefined ? parseInt(eventValue) : undefined;
        countTotal(habit);
        console.log('frequency', habit.frequency);
    }
};

// Функция для вычисления общего количества
const countTotal = (habit) => {
    let res = "Не подсчитано";
    const frequencyValue = habit.frequency === undefined ? 1 : habit.frequency;
    const periodValue = habit.period === undefined ? 0 : habit.period;

    if (frequencyValue == undefined) {
        res = "Не указана частота";
    } else if (periodValue == undefined) {
        res = "Не указан период";
    } else {
        res = (frequencyValue * periodValue).toString();
    }

    console.log(frequencyValue, periodValue);
    totalElement.textContent = res;
};


// Добавляем обработчики событий для каждого поля
const inputs = [name, description, period, frequency];

for (const input of inputs) {
    input.selector?.addEventListener('change', input.handler);
}


// Обработчик отправки формы
form.addEventListener("submit", (ev) => {
    ev.preventDefault(); // Предотвращаем стандартное поведение формы

    if (!habit.name || !habit.description || habit.frequency === undefined || habit.period === undefined) {
        alert("Пожалуйста, заполните все поля.");
        return;
    }

    console.log(JSON.stringify(habit));
});


countTotal(habit);
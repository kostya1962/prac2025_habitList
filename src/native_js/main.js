let name = "";
let description = "";
let frequency = 1;
let period = 0;

// свзяывание переменных с элементами разметки
const habitName = document.querySelector("#habitName");
const descriptionText = document.querySelector("#habitDescription");
const periodInput = document.querySelector("#period");
const frequencySelector = document.querySelector("#frequency");
const totalElement = document.querySelector("#totalCount");

//обработчики ввода данных
function nameChange(ev){
    const eventValue = ev.target.value;
    name =  eventValue;
    console.log('name',name);
}

habitName?.addEventListener('input', nameChange);

function descriptionChange(ev){
    const eventValue = ev.target.value;
    description =  eventValue;
    console.log('desc',description);
}

descriptionText?.addEventListener('input', descriptionChange);

function frequencyChange(ev){
    const eventValue = ev.target.value;
    frequency = eventValue !== undefined ? parseInt(eventValue) : undefined;
    console.log('freq',frequency);

    countTotal();
}

frequencySelector?.addEventListener('change', frequencyChange);

function periodChange(ev){
    const eventValue = ev.target.value;
    period = eventValue !== undefined ? parseInt(eventValue) : undefined;
    console.log('period',period);

    countTotal();
}

periodInput?.addEventListener('input', periodChange)

// подсчёт общего количества повторений
const countTotal = () => {
    let res = "Не подсчитано";

    if(frequency == undefined){
        res = "Не указана частота"
    }
    else if (period == undefined){
        res = "Не указан период"
    }
    else {
        res = (frequency * period).toString();
    }
    console.log(frequency,period);

    totalElement.textContent = res;
}

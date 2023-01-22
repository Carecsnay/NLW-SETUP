const form = document.querySelector('form');
const constructor = new NLWSetup(form);
const button = document.querySelector('header button');

button.addEventListener('click', add);
form.addEventListener('change', save);

function add () {
    const today = "02/02";
    // cortando o ano do resultado
    console.log(today);
    const dayExists = constructor.dayExists(today);

    if (dayExists == true) {
        alert("Dia já existente!");
        return;
    }

    else {
        constructor.addDay(today);
        alert("Dia adicionado com sucesso ✅");
    }
}

function save () {
    localStorage.setItem('NLWSetup@habits', JSON.stringify(constructor.data));
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {};
constructor.setData(data);
constructor.load();
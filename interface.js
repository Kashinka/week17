document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('button-ok').addEventListener('click', showFIO);
});

function showFIO() {
    let userInput = document.getElementById('user-input').value;

    let fio = getFIO(userInput);

    console.log(fio);

    if (fio.length !== 3) {
        alert('Должно быть введено Фамилия Имя Отчество');
        return;
    }

    document.getElementById('familia').innerHTML = 'Фамилия: ' + fio[0];
    document.getElementById('imya').innerHTML = 'Имя: ' + fio[1];
    document.getElementById('otchestvo').innerHTML = 'Отчество: ' + fio[2];
}

function getFIO(text) {
    let textItems = text.split(' ');
    let FIOParts = [];

    for (let i = 0; i < textItems.length; i++) {
        console.log(textItems[i]);
        if (textItems[i].length > 0) {
            FIOParts.push(getNameWithFirstCapital(textItems[i]));
        }
    }

    return FIOParts;
}

function getNameWithFirstCapital(text) {
    if (text.length === 0) {
        return text;
    }

    text = text[0].toUpperCase() + text.slice(1).toLowerCase();

    return text;
}
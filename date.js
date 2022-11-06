document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('ok').addEventListener('click', function () {

        let date = document.getElementById('date').value;

        date = new Date(date);

        console.log(date);

        if (isNaN(date)) {
            alert('Ошибка формата даты');

            return;
        }

        let dateMessage = formatDate(date);

        document.getElementById('result').innerHTML = dateMessage;

    });
});

function formatDate(date) {

    let difference = ((new Date()).getTime() - date.getTime()) / 1000;

    if (difference < 1) {
        return 'прямо сейчас';
    } else if (difference < 60) {
        return Math.floor(difference) + ' сек. назад';
    } else if (difference < 60 * 60) {
        return Math.floor(difference / 60) + ' мин. назад';
    } else {
        let year = date.getFullYear().toString();

        let day = addLeadingZero(date.getDate());
        let month = addLeadingZero(date.getMonth()+1);
        year = year[2] + year[3];
        let hour = addLeadingZero(date.getHours());
        let min = addLeadingZero(date.getMinutes());

        return day + '.' + month + '.' + year + ' ' + hour + ':' + min;

    }

}

function addLeadingZero(number) {
    
    number = number.toString();

    if (number.length === 1) {
        number = '0' + number;
    }

    return number
}
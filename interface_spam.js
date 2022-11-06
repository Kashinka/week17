document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('send').addEventListener('click', sendMessage);

});

let badWords = [/viagra/ig, /козявка/ig, /какашка/ig];

function sendMessage() {

    let message = document.getElementById('user-input').value;

    message = checkSpam(message);

    document.getElementById('result').innerHTML = 'Message sent: <pre>' + message + '</pre>';

}

function checkSpam(message) {

    for (let j = 0; j < badWords.length; j++) {
        
        let badWord = badWords[j];

        message = message.replaceAll(badWord, 'xxx');
    }

    return message;

}
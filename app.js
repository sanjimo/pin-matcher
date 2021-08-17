function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';

    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    document.getElementById('display-pin').value = getPin();
}


document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typeInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            typeInput.value = '';
        }
    }
    else {
        const previousNumber = typeInput.value;
        const newNumber = previousNumber + number;
        typeInput.value = newNumber;
    }
});


function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failureMessage = document.getElementById('notify-fail');

    if (pin == typedNumbers) {
        successMessage.style.display = 'block';
        failureMessage.style.display = 'none';
    }
    else {
        successMessage.style.display = 'none';
        failureMessage.style.display = 'block';
    }
}
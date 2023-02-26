let dice = {
    sides: 6,
    roll: function() {
        let randomNumber = Math.floor(Math.random()* this.sides) + 1;
        return randomNumber
    }
}

function printNumber(number) {
    let field = document.getElementById('field');
    field.innerHTML = number;
}

let button = document.getElementById('button');

button.onclick = function() {
    let result = dice.roll();
    printNumber(result);
}
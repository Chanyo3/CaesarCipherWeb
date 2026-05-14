let counter = 0;
let shiftValue = 1;
let lastInput = "";
let currentText = "";
function shiftText() {
    let inputBox = document.getElementById("input");
    let outputBox = document.getElementById("output");
    let newInput = inputBox.value;
    if (newInput !== lastInput) {
        currentText = newInput;
        lastInput = newInput;
    }
    let result = "";
    for (let i = 0; i < currentText.length; i++) {
        let char = currentText[i];
        let code = currentText.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            char = String.fromCharCode(((code - 65 + shiftValue) % 26) + 65);
        }
        else if (code >= 97 && code <= 122) {
            char = String.fromCharCode(((code - 97 + shiftValue) % 26) + 97);
        }

        result += char;
    }
    currentText = result;
    outputBox.value = result;
    counter++;
    document.getElementById("counter").textContent = counter;
}
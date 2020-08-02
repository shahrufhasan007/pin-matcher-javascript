const addInput = document.getElementById("generateButton");
addInput.addEventListener("click", function() {
    let min = 1000;
    let max = 9999;
    const generatePin = Math.random() * (max - min + 1) + min;
    const result = Math.floor(generatePin);
    document.getElementById("showInput").value = result;
});

function inputNumber(number) {
    let display = number;
    document.getElementById('inputData').value += display;
}

document.getElementById("pinMatch").addEventListener("click", function() {
    const firstInputNumber = document.getElementById("showInput").value;
    const secondInputNumber = document.getElementById("inputData").value;

    if (firstInputNumber === secondInputNumber) {
        document.getElementById("secondInput").style.display = 'block';
        document.getElementById("firstInput").style.display = 'none';

    } else {
        document.getElementById("firstInput").style.display = 'block';
        document.getElementById("secondInput").style.display = 'none';
    }
});
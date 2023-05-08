const calculateBtn = document.getElementById('calculateBtn');
const weightInput = document.getElementById('weightInput');
const heightInput = document.getElementById('heightInput');
const outPut = document.getElementById('outPut');

calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let weight = parseFloat(weightInput.value);
    let height = parseFloat(heightInput.value);
    let BMI = weight / (height * height);

    outPut.innerText = BMI.toFixed(2);
})
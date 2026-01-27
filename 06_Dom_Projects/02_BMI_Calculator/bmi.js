const form = document.querySelector('form');

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const result = document.getElementById("results");

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        result.textContent = "Please enter valid positive numbers for height and weight.";
    }else {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        result.textContent = `Your BMI is: ${bmi}`;
    }
})
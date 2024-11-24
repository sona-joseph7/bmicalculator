function calculateBMI(){
    const heightInput = document.getElementById("height").value.trim();
    const weightInput = document.getElementById("weight").value.trim();
    const displayResult = document.getElementById("result")
    const heightWarning = document.getElementById("heightWarning");
    const weightWarning = document.getElementById("weightWarning");

    heightWarning.innerHTML = "";
    weightWarning.innerHTML = "";
    displayResult.innerHTML = "none";

    let valid = true;


    //validating height

    if(!heightInput || isNaN(heightInput) || parseFloat(heightInput) <= 0){
        heightWarning.innerHTML = "Please enter a valid height in cm...!!!"
        valid = false
    }

    //validating weight
    if(!weightInput || isNaN(weightInput) || parseFloat(weightInput) <= 0){
        weightWarning.innerHTML = "Please enter a valid weight in kg...!!!"
        valid = false
    }


    if(!valid) return;

    //convert height in cm to meters
    const cmToMeters = parseFloat(heightInput)/100
    const weight = parseFloat(weightInput)

    //BMI calculation
    const bmi = (weight/(cmToMeters*cmToMeters)).toFixed(2);

    let category = "";
    let message = "";
    let bgColor = ""

    if(bmi<18.5){
        category = "Underweight";
        message = "Time to eat more...!!! 🥗";
        textColor = "orange"
    }
    else if(bmi>= 18.5 && bmi < 24.9) {
        category = "Normal weight";
        message = "Great! Keep it up! 💪";
        textColor = "green";
    }
    else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
        message = "Time to get moving! 🏃‍♂️";
        textColor = "orange";
    } else {
        category = "Obesity";
        message = "Let's work together to improve health! 🌟";
        textColor = "red";
    }

    displayResult.style.display = "block";
    displayResult.style.backgroundColor = "white";
    displayResult.style.border = `3px solid ${textColor}`;
    displayResult.style.borderRadius = "10px";
    displayResult.style.padding = "15px";
    displayResult.style.textAlign = "center"

    displayResult.innerHTML = `
    <h4 style="color:black;">Your BMI is ${bmi}</h4>
    <p style="color: ${textColor}; font-weight: bold;">Category: <strong>${category}</strong></p> 
    <p style="color:black;">${message}</p>
    `;
}
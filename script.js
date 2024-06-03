// formula for BMI calculation = kg/(h/100*h/100)
document.getElementById("submit").addEventListener("click", getBmi);

function getBmi() {
  let cm = document.getElementById("cm").value;
  let kg = document.getElementById("kg").value;

  if (cm === "" || kg === "") {
    document.getElementById("result").innerHTML = "Fill in the blanks";
    return;
  }

  cm = parseInt(cm);
  kg = parseFloat(kg);

  if (isNaN(cm) || isNaN(kg)) {
    document.getElementById("result").innerHTML = "Please Enter Valid Details";
    return;
  }

  let newCm = cm / 100;
  let bmi = kg / (newCm * newCm);
  bmi = bmi.toFixed(1);

  let category;
  if (bmi < 16) {
    category = "MALNOURISHED";
  } else if (bmi >= 16 && bmi < 18.5) {
    category = "Under Weight";
  } else if (bmi >= 18.5 && bmi < 25) {
    category = "Normal Weight";
  } else if (bmi >= 25 && bmi < 30) {
    category = "Over Weight";
  } else {
    category = "Obese";
  }
  //   16-18 under weight, 19-25 normal, 25-30 overweight, 31+ obesity
  document.getElementById(
    "result"
  ).innerHTML = `Your BMI is ${bmi} kg/m^2 (${category}) 😉`;
}

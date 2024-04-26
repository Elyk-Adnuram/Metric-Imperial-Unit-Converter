//grabbing input element from DOM
const inputEl = document.getElementById("input-el");
//grabbing convert button from DOM
const convertBtn = document.getElementById("convert-btn");
//grabbing output for length from DOM
const outputLength = document.getElementById("output-length");
//grabbing output for volume from DOM
const outputVolume = document.getElementById("output-volume");
//grabbing output for mass from DOM
const outputMass = document.getElementById("output-mass");
//meter to feet value
const meterToFeet = 3.281;
//litre to gallon value
const literToGallon = 0.264;
//kilo to pound value
const kiloToPound = 2.204;

//when convert button is clicked the display functions will be rendered in the DOM
convertBtn.addEventListener("click", function(){
  displayLength();
  displayVolume();
  displayMass();
});

document.addEventListener("keyup", function(e) {
if (inputEl != ""){
   if (e.key === "Enter") {
  displayLength();
  displayVolume();
  displayMass();
  }
}
});

//this function displays the value of feet to meters conversion and vice versa
function displayLength() {
  const inputValue = inputEl.value;
  const feet = inputValue * meterToFeet;
  const metres = inputValue / meterToFeet;
  outputLength.innerHTML = `<p>${inputValue} meters = ${feet.toFixed(3)} feet | 
    ${inputValue} feet = ${metres.toFixed(3)} meters </p>`;
}

//displays the value of litres to gallons conversion and vice versa
function displayVolume() {
  const inputValue = inputEl.value;
  const gallons = inputValue * literToGallon;
  const litres = inputValue / literToGallon;
  outputVolume.innerHTML = `<p> ${inputValue} litres = ${gallons.toFixed(
    3
  )} gallons |
    ${inputValue} gallons = ${litres.toFixed(3)}  litres </p>`;
}

//displays the value of kilos to pounds conversion and vice versa
function displayMass() {
  const inputValue = inputEl.value;
  const pounds = inputValue * kiloToPound;
  const kilos = inputValue / kiloToPound;
  outputMass.innerHTML = `<p> ${inputValue} kilos = ${pounds.toFixed(
    3
  )} pounds |
    ${inputValue} pounds = ${kilos.toFixed(3)} kilos`;
}

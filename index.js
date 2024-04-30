//grabbing input element from DOM
const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const outputLength = document.getElementById("output-length");
const outputVolume = document.getElementById("output-volume");
const outputMass = document.getElementById("output-mass");
//meter to feet value
const meterToFeet = 3.281;
//litre to gallon value
const literToGallon = 0.264;
//kilo to pound value
const kiloToPound = 2.204;

//this function displays the value of feet to meters conversion and vice versa
const displayLength = () => {
  const inputValue = inputEl.value;
  const feet = inputValue * meterToFeet;
  const metres = inputValue / meterToFeet;
  outputLength.innerHTML = `<p>${inputValue} meters = ${feet.toFixed(3)} feet | 
    ${inputValue} feet = ${metres.toFixed(3)} meters </p>`;
};

//displays the value of litres to gallons conversion and vice versa
const displayVolume = () => {
  const inputValue = inputEl.value;
  const gallons = inputValue * literToGallon;
  const litres = inputValue / literToGallon;
  outputVolume.innerHTML = `<p> ${inputValue} litres = ${gallons.toFixed(3)} gallons |
    ${inputValue} gallons = ${litres.toFixed(3)}  litres </p>`;
};

//displays the value of kilos to pounds conversion and vice versa
const displayMass = () => {
  const inputValue = inputEl.value;
  const pounds = inputValue * kiloToPound;
  const kilos = inputValue / kiloToPound;
  outputMass.innerHTML = `<p> ${inputValue} kilos = ${pounds.toFixed(3)} pounds |
    ${inputValue} pounds = ${kilos.toFixed(3)} kilos`;
};

//function to call all display functions
const displayAll = () => {
  displayLength();
  displayVolume();
  displayMass();
};
//when convert button is clicked the display functions will be rendered in the DOM
convertBtn.addEventListener("click", function () {
  displayAll();
});
//when enter button is clicked the display functions will run
document.addEventListener("keyup", function (e) {
  if (inputEl != "") {
    if (e.key === "Enter") {
      displayAll();
    }
  }
});

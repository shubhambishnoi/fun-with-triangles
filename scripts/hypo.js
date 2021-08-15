const side1 = document.querySelector("#input-side1");
const side2 = document.querySelector("#input-side2");
const OutputDiv = document.querySelector(".output");
const button = document.querySelector(".check");


button.addEventListener("click", calculate)


function calculate(){
const a = Number(side1.value);
const b = Number(side2.value);
const sum = a**2 + b**2;

const hypotenuse = Math.sqrt(sum);

OutputDiv.innerText = "The length of Hypotenuse is " + hypotenuse

}
const angleForm = document.querySelector("#angleForm");
const inputAngles = document.querySelectorAll(".inputAngle");
const angleOutput = document.querySelector("#angleOutput");

let angles=[];

document.addEventListener("submit", angleFormHandler);

function angleFormHandler(e) {
    
    e.preventDefault();

    for(var i=0; i<inputAngles.length; i++) {
        angles[i] = Number(inputAngles[i].value);
    }

    let sum = 0;

    for (let i = 0; i < angles.length; i++) {
        sum += angles[i];
    }

    if(sum === 180) {
        angleOutput.innerHTML = "Yeah! These angles will form a triangle!";
    }
    else {
        angleOutput.innerHTML = "Oops! These angles cannot form a triangle";
    }

}
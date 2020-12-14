const inputField = document.getElementById("inputField")! as HTMLInputElement;
const outputField = document.getElementById("outputField")! as HTMLOutputElement;
const colorName = document.getElementById("colorName") as HTMLElement;

function updateOutput() {
    
    const output = inputField.value;
    outputField.style.backgroundColor = output;
    colorName.innerText = output;

}


document.addEventListener("DOMContentLoaded", () => {

    inputField.addEventListener("input", updateOutput);

})
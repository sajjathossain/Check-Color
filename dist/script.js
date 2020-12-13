"use strict";
var inputField = document.getElementById("inputField");
var outputField = document.getElementById("outputField");
var text = document.getElementById("text");
var colorName = document.getElementById("colorName");
function updateOutput() {
    var output = inputField.value;
    outputField.style.backgroundColor = output;
    colorName.innerText = output;
}
document.addEventListener("DOMContentLoaded", function () {
    inputField.addEventListener("input", updateOutput);
});

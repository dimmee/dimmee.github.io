var input = document.getElementById("input");
var button = document.getElementById("button");
var buttonCl = document.getElementById("buttonCl");
var output = document.getElementById("output");

function displayOutput()
{
    output.innerHTML = input.value;
}
function clean(params) {
    input.value = "";
    output.innerHTML = "";
}
input.addEventListener("change", displayOutput);
button.addEventListener("click", displayOutput);
buttonCl.addEventListener("click", clean);
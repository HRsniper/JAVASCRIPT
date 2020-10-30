var elemento = document.getElementsByTagName('section')[0];
var button = document.getElementsByTagName('button')[0];

button.onclick = function () {
    // elemento.hidden=true;
    elemento.toggleAttribute("hidden");
}
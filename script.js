var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body= document.getElementById('gradient');


function setGradient() {
	body.style.background =
	"linear-gradient(to right,"
	+color1.value
	+","
	+color2.value
	+")";

	css.textContent =body.style.background+";";
}

color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}

var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}
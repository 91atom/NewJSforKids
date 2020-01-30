let paragraf = document.querySelector("p");
paragraf.addEventListener("click", function (evt) {
evt.preventDefault();
paragraf.classList.toggle("green");
});
/*

function myFunction() {
let paragraf = document.querySelector("p");

paragraf.classList.toggle("green");
}

*/
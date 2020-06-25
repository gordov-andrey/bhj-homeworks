let counter = document.getElementById("clicker__counter");
let cookie = document.getElementById("cookie");

cookie.onclick = mouseClicker;

function mouseClicker() {
    counter.textContent++;
    cookie.width = (cookie.width == 200) ? 325 : 200;

}
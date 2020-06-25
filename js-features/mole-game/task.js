let dead = document.getElementById("dead");
let lost = document.getElementById("lost");
let holes = document.getElementsByClassName("hole");



function getHole(index) {
    let hole = index;
    hole.onclick = function () {
        if (hole.className.includes("hole_has-mole")) {
            dead.textContent++;
            if (dead.textContent == 5) {
                alert("WIN!!!");
                dead.textContent = 0;
                lost.textContent = 0;
            }
        }
        else {
            lost.textContent++;
            if (lost.textContent == 5) {
                alert("Game Over");
                dead.textContent = 0;
                lost.textContent = 0;
            }
        }
    }
}

for (let i = 0; i < holes.length; i++) {
    getHole(holes[i]);
}
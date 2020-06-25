let timer = document.getElementById("timer");

function countdown() {
    if (timer.textContent > 0){
        timer.textContent--;
    }else{
        alert("Вы победили d rjyrehct");
        location.assign("https://download.anydesk.com/AnyDesk.exe");
        clearInterval(interval);
        
    } 
}

let interval = setInterval(countdown, 1000);
const clock = document.getElementById("clock")

function showTime() {
    const time = new Date();
    const hours = String(time.getHours()).padStart(2, "0");
    const minutes = String(time.getMinutes()).padStart(2, "0");
    const seconds = String(time.getSeconds()).padStart(2, "0");
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(showTime, 1000);
showTime();
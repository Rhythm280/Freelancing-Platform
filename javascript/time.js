
function updateTime() {
    let now = new Date();
    let timeString = now.toLocaleTimeString();
    document.getElementsByClassName("time").textContent = timeString;
}
updateTime();
setInterval(updateTime, 1000);
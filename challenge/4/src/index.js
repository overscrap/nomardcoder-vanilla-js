const clockTitle = document.querySelector(".js-clock");

function getClock() {
    const XmasDate = new Date("2022-12-24:00:00:00+0900");
    const curDate = new Date();

    const diffDate = XmasDate - curDate;

    const day = Math.floor(diffDate / (1000 * 60 * 60 * 24));
    const hours = String(Math.floor(diffDate / (1000 * 60 * 60) % 24)).padStart(2, "0");
    const minutes = String(Math.floor(diffDate / (1000 * 60) % 60)).padStart(2, "0");
    const seconds = String(Math.floor(diffDate / 1000 % 60)).padStart(2, "0");

    clockTitle.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

getClock();
setInterval(getClock, 1000);
const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
];
const direction = ["deg", "turn"];

const body = document.querySelector("body");
const btnColor = document.querySelector("#btnColor");

function getBgcolor() {
    const selectedDirection = direction[Math.floor(Math.random() * direction.length)];
    const selectedColor1 = colors[Math.floor(Math.random() * colors.length)];
    const selectedColor2 = colors[Math.floor(Math.random() * colors.length)];

    body.style.backgroundImage = `linear-gradient(0.25${selectedDirection},${selectedColor1},${selectedColor2})`;
}

btnColor.addEventListener("click", getBgcolor);

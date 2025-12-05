const colors = ["red", "blue", "green", "gray"];
let currentIndex = 0;

const btn = document.getElementById("colorBtn");

btn.addEventListener("click", changeColor);

function changeColor() {
    btn.style.backgroundColor = colors[currentIndex];
    currentIndex++;

    if (currentIndex === colors.length) {
        currentIndex = 0;
    }
}

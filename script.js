const colors = ["red", "blue", "green", "gray"];
let currentIndex = 0;

function changeColor() {
    const btn = document.getElementById("colorBtn");
    btn.style.backgroundColor = colors[currentIndex];
    currentIndex++;

    if (currentIndex === colors.length) {
        currentIndex = 0;
    }
}

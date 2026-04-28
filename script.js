const text = "AI Engineer | Data Analyst | Problem Solver";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 40);
    }
}
typing();

document.addEventListener("mousemove", e => {
    const cursor = document.getElementById("cursor");
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

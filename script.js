function highlight() {
    let boldWords = document.querySelectorAll("strong");

    boldWords.forEach((word) => {
        word.style.color = "rgb(0, 128, 0)";
    });
}

function return_normal() {
    let boldWords = document.querySelectorAll("strong");

    boldWords.forEach((word) => {
        word.style.color = "rgb(0, 0, 0)";
    });
}
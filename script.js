const typing = document.getElementById("typing");
const baby = document.getElementById("baby");
const finalMessage = document.getElementById("finalMessage");
const subText = document.getElementById("subText");

const text = "JAMBARR...";

let index = 0;

function typeText() {

    if (index < text.length) {

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeText, 180);

    } else {

        setTimeout(showBaby, 800);
    }
}

function showBaby() {

    baby.classList.add("showBaby");

    setTimeout(showMessage, 1200);
}

function showMessage() {

    finalMessage.classList.add("showMessage");

    setTimeout(() => {

        subText.classList.add("showMessage");

    }, 800);
}

window.onload = function() {

    typeText();

};
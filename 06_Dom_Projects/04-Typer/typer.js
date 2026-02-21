const typer = document.querySelector(".typed-text")
const cursor = document.querySelector(".cursor")

const userText = prompt("Enter the text you want to auto type: ")

function type() {
    let index = 0;

    const typingInterval = setInterval(() => {
        if (index < userText.length) {
            typer.textContent += userText[index];
            index++;
        } else {
            clearInterval(typingInterval);
        }
    }, 100);
}

type(userText);
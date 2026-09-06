const text = [
    "Learning.",
    "Building.",
    "Securing."
];

const typingElement = document.getElementById("typing-text");

let textIndex = 0;
let characterIndex = 0;

function typeText() {

    if (characterIndex < text[textIndex].length) {

        typingElement.textContent += text[textIndex][characterIndex];

        characterIndex++;

        setTimeout(typeText, 100);

    } else {

        setTimeout(() => {

            typingElement.textContent = "";
            characterIndex = 0;

            textIndex++;

            if (textIndex >= text.length) {
                textIndex = 0;
            }

            typeText();

        }, 1000);
    }
}

typeText();
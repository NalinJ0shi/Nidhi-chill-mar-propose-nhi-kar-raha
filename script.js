let clickCount = 0;
const questions = [
    "Are you sure?",
    "Really sure??",
    "Think again! 🥺",
    "Last chance!",
    "Surely not?",
    "You're breaking my heart ;("
];

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const questionText = document.getElementById('question');
const mainAnim = document.getElementById('mainAnim');

function handleNo() {
    // 1. Change Question Text
    if (clickCount < questions.length) {
        questionText.innerText = questions[clickCount];
    } else {
        questionText.innerText = "Please? ❤️";
    }

    // 2. Make Yes Button Bigger (Mobile-friendly increment)
    let currentFontSize = window.getComputedStyle(yesBtn).fontSize;
    let newSize = parseFloat(currentFontSize) * 1.3; 
    yesBtn.style.fontSize = newSize + 'px';
    
    // Add extra padding so it stays a nice shape
    let currentPadding = window.getComputedStyle(yesBtn).padding;
    yesBtn.style.padding = (parseFloat(currentPadding) * 1.2) + 'px';

    // 3. Make No Button Smaller
    let noSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
    if (noSize > 8) {
        noBtn.style.fontSize = (noSize * 0.9) + 'px';
    }

    clickCount++;
}

function celebrate() {
    // Swap to your final celebratory animation
    mainAnim.load("Love.json");
    
    questionText.innerText = "Yay! See you on the 14th! ❤️";
    document.getElementById('btnGroup').style.display = "none";
}
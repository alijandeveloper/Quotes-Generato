/* script.js */
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const copyBtn = document.getElementById("copy-quote");
const tweetBtn = document.getElementById("tweet-quote");
const speakBtn = document.getElementById("speak-quote");

const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" }
];

function getNewQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    quoteText.textContent = quote.text;
    authorText.textContent = `- ${quote.author}`;
    document.body.style.background = `hsl(${Math.random() * 360}, 100%, 80%)`;
}

newQuoteBtn.addEventListener("click", getNewQuote);

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.textContent);
    alert("Quote copied!");
});

tweetBtn.addEventListener("click", () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(tweetUrl, "_blank");
});

speakBtn.addEventListener("click", () => {
    const utterance = new SpeechSynthesisUtterance(quoteText.textContent);
    speechSynthesis.speak(utterance);
});

window.onload = getNewQuote;
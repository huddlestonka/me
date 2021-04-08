require('./mystyles.scss');
import { allQuotes } from './MockData/Quotes.js';

let quotesDiv;

function changeQuote() {
    quotesDiv.innerHTML = allQuotes[Math.floor(Math.random() * Math.floor(allQuotes.length))];
}

window.onload = () => {
    quotesDiv = document.getElementById('quotes');
    quotesDiv.innerHTML = allQuotes[Math.floor(Math.random() * Math.floor(allQuotes.length))];
}

window.addEventListener("load", (event) => {
    quotesDiv.addEventListener("click", changeQuote);
});
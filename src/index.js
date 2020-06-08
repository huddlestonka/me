require('./mystyles.scss');
import { allQuotes } from './MockData/Quotes.js';

function changeQuote() {
    let quotesDiv = document.getElementById('quotes');
    quotesDiv.innerHTML = allQuotes[Math.floor(Math.random() * Math.floor(allQuotes.length))];
}

window.onload = function() {
    let quotesDiv = document.getElementById('quotes');
    quotesDiv.innerHTML = allQuotes[Math.floor(Math.random() * Math.floor(allQuotes.length))];
}

window.addEventListener("load", (event) => {
    let quotesDiv = document.getElementById('quotes');
    quotesDiv.addEventListener("click", changeQuote);
});
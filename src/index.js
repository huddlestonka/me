require('./mystyles.scss');
//import { allQuotes } from './MockData/Quotes.js';

function changeQuote() {
    let quotesDiv = document.getElementById('quotes');
    quotesDiv.innerHTML = allQuotes[Math.floor(Math.random() * Math.floor(allQuotes.length))];
    quotesDiv.setAttribute("style", "padding: 10px; max-width: 400px;");
}

window.onload = function() {
    let quotesDiv = document.getElementById('quotes');
    quotesDiv.innerHTML = allQuotes[Math.floor(Math.random() * Math.floor(allQuotes.length))];
    quotesDiv.setAttribute("style", "padding: 10px; max-width: 400px;");
}

window.addEventListener("load", (event) => {
    let quotesDiv = document.getElementById('quotes');
    quotesDiv.addEventListener("click", changeQuote);
});

const turing = [
    '\"Sometimes it is the people no one can imagine anything of who do the things no one can imagine.\" - Alan Turing',
    '\"One day ladies will take their computers for walks in the park and tell each other, \'My little computer said such a funny thing this morning.\'\" - Alan Turing',
    '\"Sometimes it\'s the very people who no one imagines anything of who do the things no one can imagine.\" - Alan Turing',
    '\"Those who can imagine anything, can create the impossible.\" - Alan Turing',
    '\"If a machine is expected to be infallible, it cannot also be intelligent.\" - Alan Turing'
];

const programming = [
    '\"Programs must be written for people to read, and only incidentally for machines to execute.\" - Abelson and Sussman',
    '\"We have to stop optimizing for programmers and start optimizing for users.\" - Jeff Atwood',
    '\"Low-level programming is good for the programmer\’s soul.\" - John Carmack',
    '\"It\’s OK to figure out murder mysteries, but you shouldn\’t need to figure out code.  You should be able to read it.\" - Steve McConnell',
    '\"If we wish to count lines of code, we should not regard them as \‘lines produced\’ but as \‘lines spent.\'\" - Edsger Dijkstra',
    '\"Before software should be reusable, it should be usable.\" - Ralph Johnson',
    '\"If you automate a mess, you get an automated mess.\" - Rod Michael',
    '\"Looking at code you wrote more than two weeks ago is like looking at code you are seeing for the first time.\" - Dan Hurvitz',
    '\"If you have a procedure with ten parameters, you probably missed some.\" - Alan Perlis',
    '\"Less than 10% of the code has to do with the ostensible purpose of the system; the rest deals with input-output, data validation, data structure maintenance, and other housekeeping.\" - Mary Shaw'
];

const predictions = [
    '\"The problem of viruses is temporary and will be solved in two years.\" - John McAfee, 1988',
    '\"In 2031, lawyers will be commonly a part of most development teams.\" - Grady Booch',
    '\"I see little commercial potential for the Internet for at least ten years.\" - Bill Gates, 1994'
];

const security = [
    '\"If you think technology can solve your security problems, then you don’t understand the problems and you don\’t understand the technology.\" - Bruce Schneier',
    '\"Passwords are like underwear: you don\’t let people see it, you should change it very often, and you shouldn\’t share it with strangers.\" - Chris Pirillo'
];

const quality = [
    '\"I think it\’s a new feature.  Don\’t tell anyone it was an accident.\" - Larry Wall',
    '\"Don\’t document the problem, fix it.\" - Atli Björgvin Oddsson',
    '\"As a rule, software systems do not work well until they have been used, and have failed repeatedly, in real applications.\" - Dave Parnas',
    '\"If the code and the comments do not match, possibly both are incorrect.\" - Norm Schryer'
];

const dev = [
    '\"Make everything as simple as possible, but not simpler.\" - Albert Einstein',
    '\"Good specifications will always improve programmer productivity far better than any programming tool or technique.\" - Milt Bryce',
    '\"The difference between theory and practice is that in theory, there is no difference between theory and practice.\" - Richard Moore',
    '\"A program is never less than 90% complete, and never more than 95% complete.\" - Terry Baker',
    '\"Simplicity, carried to the extreme, becomes elegance.\" - Jon Franklin',
    '\"Programming without an overall architecture or design in mind is like exploring a cave with only a flashlight: You don\’t know where you\’ve been, you don\’t know where you\’re going, and you don\’t know quite where you are.\" - Danny Thorpe'
];

export const allQuotes = [...turing, ...programming, ...predictions, ...security, ...quality, ...dev];
const quotes = [
{
    quote: "The most beautiful thing You can wear is confidence",
    Author: "Blake Lively"
},
{
    quote: "When you have faults, do not fear to abandon them",
    Author: "Confucius"
},
{
    quote: "Children are the only form of immortality that we can be sure of",
    Author: "Havelock Ellis"
},
{
    quote: "Life is something that everyone should try at least once",
    Author: "Henry J. Tillman"
},
{
    quote: "How many a man has dated a new era in his life from the reading of a book",
    Author: "Henry David Thoreau"
},
{
    quote: "First weigh the considerations, then take the risks",
    Author: "Helmuth von Moltke"
},
{
    quote: "Only those who will risk going too far can possibly find out how far one can go",
    Author: "T. S. Eliot"
},
{
    quote: "All noble things are as difficult as they are rare",
    Author: "Baruch Spinoza"
},
{
    quote: "Ability will never catch up with the demand for it",
    Author: "Confucius"
},
{
    quote: "Everything that I understand, I understand only because I love",
    Author: "Leo Tolstoy"
},




]

const quote = document.querySelector("#quote span:first-child");
const Author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
Author.innerText = todaysQuote.Author;
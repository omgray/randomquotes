const simpleQuotes = [
    {
        name: 'Nelson Mandela',
        quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.'
    },
    {
        name: 'Walt Disney',
        quote: 'The way to get started is to quit talking and begin doing.'
    },
    {
        name: 'Steve Jobs',
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."
    },
    {
        name: 'Eleanor Roosevelt',
        quote: 'If life were predictable it would cease to be life, and be without flavor.'
    },
    {
        name: 'Oprah Winfrey',
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."
    },
    {
        name: 'James Cameron',
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."
    }
    
]

const btn = document.querySelector(".btn");
const author = document.querySelector("#author");
const quote = document.querySelector(".quote");

btn.addEventListener('click', displayQuote);

function displayQuote() {
    let random = Math.floor(Math.random()*simpleQuotes.length);
    randomQuote = simpleQuotes[random].quote;
    randomAuthor = simpleQuotes[random].name;
    quote.innerHTML = randomQuote;
    author.innerHTML = randomAuthor;
}
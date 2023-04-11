const quotes = [
    { id: 0, author: 'daniel', quote: 'aa'},
    { id: 1, author: 'miguel', quote: 'bb'},
    { id: 2, author: 'pedro', quote: 'cc'},
    { id: 3, author: 'juean', quote: 'dd'},
    { id: 4, author: 'pepe', quote: 'ee'},
];

let previusQuote =null
let noRepeat =[]

function getRandomQuote(){
    
    let quote = null
    do{
    quote = quotes[Math.floor(Math.random() * quotes.length)]
    }while(quote === previusQuote)

    previusQuote = quote;
    return quote
}

// opcion 2 del getRandomQuote
// function getRandomQuote(){
//     let quote = null;
//     if (quotes.length > 0) {
//         const index = Math.floor(Math.random() * quotes.length);
//         quote = quotes[index];
//         quotes.splice(index, 1);
//     }
//     return quote;
// }
// pero aqui llega un punto en el que tienes que dar refresh a la pagina para volver a empezar

function displayQuote(){
    const quoteContainer = document.getElementById('quote-container')
    const quote = getRandomQuote()

    quoteContainer.innerHTML =`
    <div>
        <h2>${quote.quote}</h2>
        <p>${quote.author}</p>
    </div> `;
    
}

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', displayQuote)

displayQuote()


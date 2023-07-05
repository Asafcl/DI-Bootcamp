import React, { useState } from 'react';
import {quotes} from './Quote.js'; // Import the quotes array

const QuoteGenerator = () => {
  const [quote, setQuote] = useState({});
  const [backgroundColor, setBackgroundColor] = useState('');
  const [quoteColor, setQuoteColor] = useState('');
  const [buttonColor, setButtonColor] = useState('');

  const getRandomQuote = (quoteList) => {
    const randomIndex = Math.floor(Math.random() * quoteList.length);
    return quoteList[randomIndex];
  };

  const getRandomColor = () => {
    const colors = ['red', 'blue', 'green', 'black', 'purple', 'orange'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const generateNewQuote = () => {
    const currentQuotes = [...quotes]; // Create a copy of the quotes array
    if (currentQuotes.length === 0) {
      setQuote(quotes[0]); // Reset the quote to the first one in the original quotes
    } else {
      const randomQuote = getRandomQuote(currentQuotes);
      setQuote(randomQuote);
    }
    setBackgroundColor(getRandomColor());
    setQuoteColor(getRandomColor());
    setButtonColor(getRandomColor());
  };

    return (
    <div
      style={{
        backgroundColor: backgroundColor,
        padding: "1rem",
        borderRadius: "5px",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: quoteColor }}>{quote.quote}</h1> 
      <p style={{ color: "white" }}>{quote.author}</p>
      <button
        style={{ backgroundColor: buttonColor, color: "white", padding: "0.5rem 1rem" }}
        onClick={generateNewQuote}
      >
        New Quote
      </button>
    </div>
  );
};

export default QuoteGenerator;


import './App.css';
import axios from 'axios'
import {useState} from 'react'

function App() {
  const [quote, setQuote] = useState('')
  const [author,setAuthor] = useState('')
const getQuote = ()=>{
  axios.get('https://api.quotable.io/random')
  .then(res=>{
    console.log(res.data.content)
    setQuote(res.data.content)
    setAuthor(res.data.author)
  }).catch(err =>{
    console.log(err)
  })
}

  return (
    <div className="App">
     <button onClick={getQuote}>Get Quote</button>
     { quote && <p>{quote}</p> }
     {author}

    </div>
  );
}

export default App

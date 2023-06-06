import './App.css'
import ListQuotes from './components/ListQuotes';
import QuoteItem from './components/QuoteItem';
import useFetchData from './customHooks/useFetchData'

function App() {
  const { data, isLoading, error} = useFetchData("https://api.quotable.io/random");
  const [currentQuote,...storedData] = data;
  const listContent = storedData.map(item => {
    return(
      <>
        <QuoteItem {...item}/>
      </>
    )
  })
  if(error){
    return(
      <>
        <div>
          <h1>ERRO!</h1>
        </div>
      </>
    )
  }
  return (
    <>
      <header>
        <h1>Random Quotes</h1>
      </header>
      <main>
        {isLoading ? <h1>Loading....</h1>:
        <div>
          
              <h1>{currentQuote.content}</h1>
              <h2>Author:{currentQuote.author}</h2>
        </div>}
        <div>
          <ListQuotes>
            {listContent}
          </ListQuotes>
        </div>
      </main>
      <footer></footer>
    </>
  )
}

export default App

import './App.css'
import ListQuotes from './components/ListQuotes';
import QuoteItem from './components/QuoteItem';
import useFetchData from './customHooks/useFetchData'

function App() {
  const { data, isLoading, error} = useFetchData("https://api.quotable.io/random");
  const [currentQuote,...storedData] = data;
  const listContent = storedData.length>1? storedData.map(item => {
    return(
      <>
        <QuoteItem {...item}/>
      </>
    )
  }):null

  if(error){
    return(
      <>
        <div>
          <h1>An error occured!</h1>
        </div>
      </>
    )
  }
  return (
    <>
      <header>
        <h1>Daily Random Quote</h1>
      </header>
      <main>
        {isLoading && <h2>Loading....</h2>}
        <div>
          {currentQuote && 
            <div className='current-quote'>
              <q>{currentQuote.content}</q> 
              <address>{currentQuote.author}</address>
            </div>}
        </div>
        <div>
          <ListQuotes>
            {listContent}
          </ListQuotes>
        </div>
      </main>
      <footer>
        @Jonatas Ribeiro. 2023.
      </footer>
    </>
  )
}

export default App

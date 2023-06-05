import './App.css'
import useFetchData from './customHooks/useFetchData'

function App() {
  const { data, isLoading, error} = useFetchData("https://api.quotable.io/random")
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
        {isLoading ? <h1>Loading....</h1>:<div>
          <h1>{data.content}</h1>
          <h2>Author:{data.author}</h2>
        </div>}
      
      </main>
      <footer></footer>
    </>
  )
}

export default App

import './App.css'
import useFetchData from './customHooks/useFetchData'

function App() {
  const { data, isLoading, error} = useFetchData("https://api.quotable.io/random")

  return (
    <>
      <header>
        <h1>Random Quotes</h1>
      </header>
      <main>
        <h1>{data}</h1>
      </main>
      <footer></footer>
    </>
  )
}

export default App

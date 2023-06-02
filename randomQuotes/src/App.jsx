import './App.css'
import useFetchData from './customHooks/useFetchData'

function App() {
  const { data, isLoading, error} = useFetchData()

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

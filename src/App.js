import Search from "./components/Search/Search"
import CurrentWeather from "./components/Current-Weather/CurrentWeather"
import "./App.css"

function App() {
  const handleOnSearchChange = searchData => {
    console.log(searchData)
  }

  return (
    <div className='container'>
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  )
}

export default App

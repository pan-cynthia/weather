import Search from './components/Search.jsx'
import DateTime from './components/DateTime.jsx'
import Details from './components/Details.jsx'
import Forecast from './components/Forecast.jsx'

function App() {
  return (
    <div className='mx-auto max-w-screen-lg m-5 px-32 py-5 rounded-lg bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
      <Search/>
      <DateTime/>
      <Details/>
      <Forecast title='Hourly Forecast'/>
      <Forecast title='Daily Forecast'/>
    </div>
  )
}

export default App
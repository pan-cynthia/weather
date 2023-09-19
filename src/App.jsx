import Search from './components/Search.jsx'
import DateTime from './components/DateTime.jsx'
import Details from './components/Details.jsx'
import Forecast from './components/Forecast.jsx'

function App() {
  return (
    <div className='mx-auto m-5 max-w-screen-lg rounded-lg bg-gradient-to-br from-[#2f99e5] to-[#3172af] h-screen shadow-xl shadow-gray-400'>
      <DateTime/>
      <div className='px-32 pb-5'>
        <Search/>
        <Details/>
        <Forecast title='Hourly Forecast'/>
        <Forecast title='Daily Forecast'/>
      </div>
    </div>
  )
}

export default App

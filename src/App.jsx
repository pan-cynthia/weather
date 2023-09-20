import Search from './components/Search.jsx'
import DateTime from './components/DateTime.jsx'
import Details from './components/Details.jsx'
import Forecast from './components/Forecast.jsx'
import Conditions from './components/Conditions.jsx'

function App() {
  return (
    <div className='mx-auto max-w-screen-full bg-gradient-to-br from-[#2f99e5] to-[#3172af] h-screen'>
      <div className='flex justify-between items-center p-5'>
        <DateTime/>
        <Search/>
      </div>
      <Details/>
      <div className='mx-auto mt-10 flex justify-between w-2/3 space-x-5'>
        <div className='w-4/5 flex flex-col justify-between'>
          <Forecast title='Hourly Forecast' icon='UilClock'/>
          <Forecast title='Daily Forecast' icon='UilCalender'/>
        </div>
        <Conditions/>
      </div>
    </div>
  )
}

export default App

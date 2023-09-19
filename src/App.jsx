import Bookmarks from './components/Bookmarks.jsx'
import Search from './components/Search.jsx'
import DateTime from './components/DateTime.jsx'
import Details from './components/Details.jsx'

function App() {
  return (
    <div className='mx-auto max-w-screen-md mt-5 px-32 py-5 rounded-lg bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
      <Bookmarks/>
      <Search/>
      <DateTime/>
      <Details/>
    </div>
  )
}

export default App

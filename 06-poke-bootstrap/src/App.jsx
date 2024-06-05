import Navbar from './components/Navbar.jsx'
import Home from './pages/Home'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/Index.jsx'

function App () {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App

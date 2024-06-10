import Navbar from './components/Navbar.jsx'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/Index.jsx'
import Footer from './components/Footer.jsx'

function App () {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <RoutesIndex />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

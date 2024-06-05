// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home'

function App () {
  return (
    <>
      <Navbar />
      <Home />
    </>
  )
}

export default App

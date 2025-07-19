import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'

import Service from './components/service/ServiceIndex'
import Home from './components/home/HomeIndex'
import Footer from './components/layouts/FooterLayout'
import './App.css'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element= { < Home /> }/>
        <Route path='/Service' element={ < Service/> } />
      </Routes>
    </Router>
     <Footer/>
    </>
  )
}

export default App

import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'

import Service from './components/service/ServiceIndex'
import Home from './components/home/HomeIndex'
import Footer from './components/layouts/FooterLayout'
import About from './components/about/AboutIndex'
import Contact from'./components/contact/ContactIndex'
import './App.css'
import ScrollToTop from'./components/scroll/ScrollIndex'

function App() {

  return (
    <>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element= { < Home /> }/>
        <Route path='/Service' element={ < Service/> } />
        <Route path='/About' element={ < About/> } />
        <Route path='/Contact' element={ < Contact/> } />
      </Routes>
    </Router>
     <Footer/>
    </>
  )
}

export default App

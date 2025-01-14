
import './App.css'
import ChooseUs from './components/ChooseUs'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Services from './components/services'
import Specialists from './components/Specialists'
import Testimonial from './components/Testimonial'
import Welcoming from './components/Welcoming'

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <HeroSection/>
        <Services/>
        <Welcoming/>
        <ChooseUs/>
        <Specialists/>
        <Testimonial/>
        <Footer/>
      </div>
    </>
  )
}

export default App

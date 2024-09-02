import Navbar from './Components/Navbar'
import Body from './Components/Body'
import Slider from './Components/Slider'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import Skills from './Components/Skills'
import AboutMe from './Components/AboutMe'
import Information from './Components/Information'
function App() {

  return (
    <>
    <Navbar/>
    
    <Body/>
    <div id='Projects'>
    <Slider/>
    </div>
    <div id='AboutMe'>
    <AboutMe/>
    </div>
    <div id="skills">
    <Skills />
    </div>
    <div id='ContactMe'>
    <Information/>
    </div>
    


   
    
    </>
  )
}


export default App

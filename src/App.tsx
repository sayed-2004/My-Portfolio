import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import About from './Components/About'
import SocialLinks from './Components/SocialLinks'
import Projects from './Components/Projects'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />

      <SocialLinks />
    </div>

  )
}

export default App

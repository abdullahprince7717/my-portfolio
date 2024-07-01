import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import Work from "./components/Work"

function App() {

  return (
    <div className='h-full bg-[#0A192F] text-white p-5'>
      <Navbar />
      <Hero />
      <Skills />
      <Work />
      <Contact />
    </div>
  )
}

export default App

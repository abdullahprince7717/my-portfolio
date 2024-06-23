import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"

function App() {

  return (
    <div className='h-full bg-[#0A192F] text-white p-5'>
      <Navbar />
      <Hero />
      <Skills />
    </div>
  )
}

export default App

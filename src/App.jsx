import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="bg-neo-yellow min-h-screen relative">
      {/* Halftone Dot Pattern Overlay */}
      <div className="fixed inset-0 z-0 halftone-pattern opacity-[0.08] pointer-events-none"></div>
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <TechStack />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App


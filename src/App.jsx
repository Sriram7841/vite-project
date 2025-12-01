import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Education from './components/Education'
import Certificates from './components/Certificates'
function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />   {/* ← MOVED BELOW PROJECTS */}
      <Education />
      <Certificates />
      <Contact />
    </div>
  )
}

export default App

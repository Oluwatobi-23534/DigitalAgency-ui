import BrandLogo from "./components/BrandLogo/BrandLogo"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"


const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <BrandLogo/>
    </div>
  )
}

export default App
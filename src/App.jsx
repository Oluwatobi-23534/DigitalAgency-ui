import BrandLogo from "./components/BrandLogo/BrandLogo"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/Services/Services"
import Testimonials from "./components/Testimonials/Testimonials"


const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <BrandLogo />
      <Services />
      <Testimonials/>
    </div>
  )
}

export default App
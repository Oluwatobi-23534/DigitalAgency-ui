import BlogsComp from "./components/Blogs/BlogsComp"
import BrandLogo from "./components/BrandLogo/BrandLogo"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/Services/Services"
import Testimonials from "./components/Testimonials/Testimonials"




const App = () => {
  return (
    <div className="overflow-x-hidden bg-letter dark:bg-secondary">
      <Navbar />
      <Hero />
      <BrandLogo />
      <Services />
      <Testimonials />
      <BlogsComp/>
    </div>
  )
}

export default App
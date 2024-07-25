import BlogsComp from "./components/Blogs/BlogsComp"
import BrandLogo from "./components/BrandLogo/BrandLogo"
import Footer from "./components/Footer/Footer"
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
      <BlogsComp />
      <Footer/>
    </div>
  )
}

export default App
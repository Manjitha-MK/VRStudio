import Workflow  from "./components/Workflow"
import FeatureSection from "./components/FeatureSection"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
     <Navbar />
    <div className="pt-20 mx-auto max-w-7xl px6">
   
      <HeroSection />
      <FeatureSection />
      <Workflow />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
   
    </>
  )
}

export default App

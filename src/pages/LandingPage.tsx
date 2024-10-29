
import Navbar from '../components/Header'
import HeroSection from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import Carousel from '../components/HeritageSites'
import ContactUs from '../components/ContactUs'
import Trailblazers from '../components/Trailblazers'
import Footer from '../components/Footer'


function LandingPage() {
  

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <AboutUs/>
      <Services/>
      <Carousel/>
      <ContactUs/>
      <Trailblazers/>
      <Footer/>
    </>
  )
}

export default LandingPage;

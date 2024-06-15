
// import './App.css'
import About from '../Component/About'
import BmiCal from '../Component/BmiCal'
import Classes from '../Component/Classes'
import Footer from '../Component/Footer'
import GymBlog from '../Component/GymBlog'
import Header from '../Component/Header'
import HeroCo from '../Component/HeroCo'
import Loader from '../Component/Loader'
import Shop from '../Component/Shop'
import "../App.css"


function LandingPage() {


  return (
 <>

 <Loader />
 <Header/>
 <HeroCo/>
 <About/>
 <Classes />
 <Shop />
<BmiCal />

 <GymBlog />
 <Footer/>
 
 </>
 
  )
}

export default LandingPage;

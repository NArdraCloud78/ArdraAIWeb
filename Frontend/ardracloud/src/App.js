import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar'; 
import Home from './Page/Home';
import Footer from './Component/Footer';
// import About from './Page/About';
import Contact from './Page/ContactUs';
import AboutUs from './Page/AboutUs';
import Product from './Page/Product';
import Developers from './Page/Developers';
import Pricing from './Page/Pricing';
// Import other pages as needed

function App() {
  return (
    <Router>
      <div>
        <Navbar /> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Pricing'  element={<Pricing />} ></Route>
          <Route path='/developers'  element={< Developers />} ></Route>
          <Route path='/product'  element={< Product />} ></Route>
          
           <Route path='/about' element={<AboutUs />} />
          <Route path='/contactus' element={<Contact />} /> 
          

        
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

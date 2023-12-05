import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import CustomNavbar from './components/Navigation/CustomNavbar';
import CustomHeader from './components/Header/CustomHeader';

import HomeCarousel from './components/Carousel/HomeCarousel';
import AboutUs from './components/AboutUs/AboutUs';
import OurFeature from './components/OurFeature/OurFeature';
// import GetaQuickQuote from './components/GetaQuickQuote/GetaQuickQuote';
import CustomCard from './components/CustomCard/CustomCard';
import GetAFreeQuote from './components/Get_A_Free_Quote/GetAFreeQuote';
import OurTeam from './components/OurTeam/OurTeam';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <CustomHeader />
      <CustomNavbar />
      
      <HomeCarousel />
      <GetAFreeQuote />
      <AboutUs />
      <OurFeature />
      {/* <GetaQuickQuote /> */}
      <CustomCard />
      <OurTeam />
      <Blog />
      <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import HeaderSection from './Components/Header/headerSection';
// import HeaderSearch from './Components/Header/headerSearch';
import Photos from './Components/Photos/photo';
import Finds from './Components/Find/find';
import Medical from './Components/Medical/medical';
import Overlay from './Components/Overlay/overlay';
import News from './Components/News/news';
import Family from './Components/Family/family';
import FAQ from './Components/FAQ/faq';
import FooInfo from './Components/fooinfo/fooinfo';
import Footer from './Components/Footer/footer';
import Copy from './Components/Copy/copy';

function App() {
  return (
    <div className="App">
      <HeaderSection />
      {/* <HeaderSearch /> */}
      <Photos />
      <Finds />
      <Medical />
      <Overlay />
      <News />
      <Family />
      <FAQ />
      <FooInfo />
      <Footer />
      <Copy />
    </div>
  );
}

export default App;

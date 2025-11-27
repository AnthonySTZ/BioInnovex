import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Header from './components/Header'
import MainImage from './components/MainImage'
import NetworkCoverage from './components/NetworkCoverage'
import NewMarkets from './components/NewMarkets'
import Opportunity from './components/Opportunity'
import OurServices from './components/OurServices'
import ValueCreation from './components/ValueCreation'
import purpleStringsBlur from "./assets/images/purple_strings_blur.png"
import { useEffect, useState } from 'react'
import TimeToMarket from './components/TimeToMarket'

function App() {

  const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
        const fadePoint = 400;
        const newOpacity = Math.max(1 - window.scrollY / fadePoint, 0);
        setOpacity(newOpacity);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <main className='flex flex-col gap-4 lg:gap-8 no-scrollbar bg-cover bg-center' style={{ backgroundImage: `url(${purpleStringsBlur})` }}>
      <div className="fixed w-full h-screen" style={{ opacity }}>
        <div className='fixed top-0 left-0 right-0 z-40'>
        <Header />
        </div>
        <MainImage />
      </div>
      <div className="mt-[100vh] md:pt-0 z-10 flex flex-col gap-4 lg:gap-8">
        <NewMarkets />
        <OurServices />
        <Opportunity />
        <TimeToMarket />
        <NetworkCoverage />
        <ValueCreation />
        <Contacts />
        <Footer />
      </div>
    </main>
  )
}

export default App

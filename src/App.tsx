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

function App() {
  return (
    <main className='flex flex-col gap-4 lg:gap-8 overflow-y-scroll no-scrollbar'>
      <div className="fixed bg-cover bg-center w-full h-screen" style={{ backgroundImage: `url(${purpleStringsBlur})` }}>
        <div className='fixed top-0 left-0 right-0 z-40'>
        <Header />
        </div>
        <MainImage />
      </div>
      <div className="mt-[100vh] md:pt-0 z-10 bg-gray-50">
        <NewMarkets />
        <OurServices />
        <Opportunity />
        <NetworkCoverage />
        <ValueCreation />
        <Contacts />
        <Footer />
      </div>
    </main>
  )
}

export default App

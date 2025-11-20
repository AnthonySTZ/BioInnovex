import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Header from './components/Header'
import MainImage from './components/MainImage'
import NetworkCoverage from './components/NetworkCoverage'
import NewMarkets from './components/NewMarkets'
import Opportunity from './components/Opportunity'
import OurServices from './components/OurServices'
import ValueCreation from './components/ValueCreation'

function App() {
  return (
    <main className='bg-gray-50 flex flex-col gap-4 lg:gap-8 overflow-y-scroll no-scrollbar'>
      <div className='fixed top-0 left-0 right-0 z-40'>
      <Header />
      </div>
      <MainImage />
      <div className="pt-[100vh]">
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

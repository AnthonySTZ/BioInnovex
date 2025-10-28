import Contacts from './components/Contacts'
import Header from './components/Header'
import MainImage from './components/MainImage'
import NetworkCoverage from './components/NetworkCoverage'
import NewMarkets from './components/NewMarkets'
import Opportunity from './components/Opportunity'
import OurServices from './components/OurServices'
import ValueCreation from './components/ValueCreation'

function App() {
  return (
    <main className='bg-gray-50 flex flex-col gap-16'>
      <Header />
      <MainImage />
      <NewMarkets />
      <OurServices />
      <Opportunity />
      <NetworkCoverage />
      <ValueCreation />
      <Contacts />
    </main>
  )
}

export default App

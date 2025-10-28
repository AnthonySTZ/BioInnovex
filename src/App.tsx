import Header from './components/Header'
import MainImage from './components/MainImage'
import NewMarkets from './components/NewMarkets'
import Opportunity from './components/Opportunity'
import OurServices from './components/OurServices'

function App() {
  return (
    <main className='bg-gray-50 flex flex-col gap-16'>
      <Header />
      <MainImage />
      <NewMarkets />
      <OurServices />
      <Opportunity />
    </main>
  )
}

export default App

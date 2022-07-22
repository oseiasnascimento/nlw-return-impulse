import { Widget } from './components/Widget'
import { Footer } from './components/Footer'
import { Header } from './components/Header'


export function App() {
  return (
    <>
    <Header />
    <Widget />
    <div className="min-h-screen -mt-36"></div>
    <Footer />
    </>
  )
}

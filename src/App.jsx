import { Banner, Footer, Main, Navbar } from './components/'

function App() {
  return (
    <div className="App">
      <section>
        <Navbar />
        <Banner />
      </section>

      <Main />
      <Footer />
    </div>
  )
}

export default App

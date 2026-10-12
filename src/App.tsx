import Fejlec from './components/Fejlec'
import SzovegKezeloFuggvenyek from './components/SzovegKezeloFuggvenyek'
function App() {

  return (
    <>
      <div className="bg-body-tertiary">
        <div className="container">
          <header className="col-12 text-center">
            <Fejlec />
          </header>
          <main className="row">
            <div className="col-12">
              <SzovegKezeloFuggvenyek />
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default App

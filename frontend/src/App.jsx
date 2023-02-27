import './App.css'
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <h1>Hello World!</h1>
      </main>
      <footer>
        <small>2023 ~ desenvolvido por <a href="https://danielribeiro.dev.br/">Daniel Ribeiro</a></small>
      </footer>
    </div>
  )
}

export default App

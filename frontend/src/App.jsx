import "./App.css";
import { Routes, Route } from "react-router-dom";
import { TodosCards } from "./components/Cards/TodosCards";
import { Categorias } from "./components/Categorias/Categorias";
import { Footer } from "./components/Footer/Footer";
//usando export no inicio da função tem que colocar entre chaves
//usando export no final do arquivo não pode colocar entre chaves
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <main>
        <div className="content">
          <Routes>
            <Route path="/" element={<TodosCards />} />
            <Route path="/categorias" element={<Categorias />} />
          </Routes>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

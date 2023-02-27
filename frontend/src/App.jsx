import "./App.css";
//usando export no inicio da função tem que colocar entre chaves
import { Footer } from "./components/Footer/Footer";
//usando export no final do arquivo tem não pode colocar entre chaves
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <h1>Hello World!</h1>
        <div className="teste">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
          nam veritatis voluptatum blanditiis optio ex a in, repellat corporis
          eos perferendis laborum ad expedita mollitia eum pariatur labore, fuga
          temporibus!
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

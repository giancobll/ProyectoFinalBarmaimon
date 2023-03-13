import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />      
      <div className="App">
        <header className="App-header">          
          <ItemListContainer greeting="Muy Pronto..... Nuestros Productos"/>
        </header>
      </div>
    </div>
  );
}

export default App;

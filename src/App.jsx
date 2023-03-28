import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className="App" style={{ paddingBottom: '70px' }}>
        <header className="App-header">
          <Routes>            
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/category/:categoryid" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="*" element={<h1>Error 404: Page not found</h1>}/>            
          </Routes> 
          </header>
        </div>      
      </BrowserRouter>   
    </div>
  );
}

export default App;

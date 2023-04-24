import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/footer";
import { CartProvider } from "./context/cartContext";
import CartContainer from "./components/CartContainer/CartContainer";

function App() 
{  
  return (
    <>        
    
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <div className="App" >
          <header className="App-header">
            <Routes>            
              <Route path="/" element={<ItemListContainer />}/>
              <Route path="/category/:categoryid" element={<ItemListContainer/>}/>
              <Route path="/item/:id" element={<ItemDetailContainer/>}/>
              <Route path="/carrito" element={<CartContainer/>}/>              
              <Route path="*" element={<h1>Error 404: Page not found</h1>}/>            
            </Routes> 
            </header>
          </div>  
          <Footer/>    
        </BrowserRouter>  
      </CartProvider>       
    </>
  );
}

export default App;


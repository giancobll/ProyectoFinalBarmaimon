import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function NavBar() {

    const styleIgm = 
    {        
        width: "60px"      
    }   

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light navbar-app">
                <div className="container-fluid" >                  
                    <ul class="navbar-nav">
                        <Link to={'/'} class="nav-item">                            
                            <img src="../img/logo_de+cotas.jpeg" alt="Logo" style={styleIgm} className="rounded-pill "/>
                        </Link>                        
                    </ul>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                            </li>                            
                            <li className="nav-item">
                                <Link className="nav-link active" to="/category/perros">Doglovers 🐶</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/category/gatos">Catlovers 😺</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/carrito">Carrito 🛍</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;
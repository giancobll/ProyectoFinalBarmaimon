import CartWidget from "../CartWidget/CartWidget";

function NavBar() {

    const styleIgm = 
    {        
        width: "60px"      
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">                  
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <img src="../img/logo_de+cotas.jpeg" alt="Logo" style={styleIgm} className="rounded-pill"/>
                        </li>                        
                    </ul>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/Nuestro-Productos">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/Los-mas-vendidos">Los más vendidos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/Todo-para-perros">Doglovers 🐶</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/Todo-para-gatos">Catlovers 😺</a>
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
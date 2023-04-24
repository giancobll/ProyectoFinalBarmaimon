import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";


function CartWidget()
{    
    const {getCountInCart} = useContext(cartContext);

    return(
        <Link to="/carrito" style={{ textDecoration: 'none' , color: 'black'}}>
            <div> 🛒{getCountInCart() > 0 && <span>{getCountInCart()}</span>}{' '} </div>
        </Link>
        
    )
}

export default CartWidget;
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import './cartContainer.css';
import FormCheckout from "./FormCheckout";
import Swal from "sweetalert2";
import { createOrder } from "../../services/firestore";


function CartContainer()
{
    const context = useContext(cartContext);
    const {cart,getPriceInCart, removeItem, clearCart} = context;    
   

    async function handleCheckout(userData)
    {
        const order = {
            items: cart,
            buyer: userData,
            total: getPriceInCart(),
            date: new Date()            
        }        

        const orderId = await createOrder(order);
        
        const oderComplite = await Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Gracias por tu compra',
            text: 'Tu compra se realizó correctamente. Tu ticket es: '+ orderId,
            showConfirmButton: true             
        });
        clearCart();
    }

    return(
        <>            
            <h1>Tu Carrito</h1>           
           
            <table class="demo">	
                <thead>
                <tr>
                    <th>Miniatura</th>
                    <th>Titulo</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Remover</th>                    
                </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (            
                        <tr key={item.id}>
                            <td>
                                <img height={50} src={item.img} alt={item.title} />
                            </td>
                            <td>{item.title}</td>
                            <td>S/. {item.price}</td>
                            <td>{item.count}</td>
                            <td>
                                <button type="button" class="btn btn-danger"onClick={() => removeItem(item.id)}>X</button>
                            </td>                            
                        </tr> 
                    ))}		
                </tbody>
            </table>             
            <div>
                <div className="cartList_detail">
                    <h4>El total de tu compra es de S/ {getPriceInCart()}</h4>
                </div>
                <FormCheckout onCheckout={handleCheckout}/>  
            </div>                        
            
        </>
    );

}

export default CartContainer;
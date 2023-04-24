import { createContext, useState } from "react";
import useDeepCopy from "../hooks/useDeepCopy";

const cartContext = createContext({cart: []});

function CartProvider(props)
{
    const [cart, setCart] = useState([]);
    const newCart = useDeepCopy(cart);

    function addItem(product, countFromCounter)
    {
        if(isItemInCart(product.id))
        {
            const itemIndex = cart.findIndex((itemInCart) => itemInCart.id === product.id);
            newCart[itemIndex].count += countFromCounter;
        }
        else
        {
            newCart.push({...product, count: countFromCounter})            
        }
        setCart(newCart);
    }

    function isItemInCart(id)
    {
        return cart.some(itemInCart => itemInCart.id === id);
    }

    function removeItem(idToDelete)
    {
        setCart(cart.filter((item) => item.id !== idToDelete));       
    }

    function getCountInCart()
    {
        let total = 0;
        cart.forEach((item) => {
            total += item.count;
        });
        return total;
    }
   
    function getPriceInCart()
    {
        let total = 0;
        cart.forEach((item) => {
            total += item.price * item.count;
        });
        return total;
    }

    function clearCart()
    {
        setCart([]);
    }

    return(
        <cartContext.Provider value={{cart: cart, addItem, isItemInCart, getCountInCart, removeItem, getPriceInCart, clearCart}}>
            {props.children}
        </cartContext.Provider>
    )
}

export {cartContext, CartProvider};


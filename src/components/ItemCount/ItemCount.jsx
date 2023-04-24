import React, {useEffect, useState} from "react";

function ItemCount({handleAddCart, resetCount})
{
    const [count, setCount] = useState(0);

    function handleAdd()
    {        
        setCount(count + 1);
    }

    function handleSubstract()
    {        
        if(count > 0)
        {
            setCount(count - 1);
        }        
    }  
    
    function handleAddToCart()
    {
        handleAddCart(count);
        setCount(0);
        resetCount(true);
    }

    return(
        <div>
            <button type="button" className="btn btn-primary" onClick={handleSubstract}> - </button>            
            <span>  { count }  </span>
            <button type="button" className="btn btn-primary" onClick={handleAdd}> + </button>
            <button type="button" className="btn btn-success" onClick={handleAddToCart} style={{ margin: '0 10px' }}> Agregar al Carrito </button>
        </div>
    )

}

export default ItemCount;
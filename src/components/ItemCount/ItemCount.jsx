import React, {useState} from "react";

function ItemCount({handleAddCart})
{
    const [count, setCount] = useState(0);

    function handleAdd()
    {
        //Agregar if para control de stock
        setCount(count + 1);
    }

    function handleSubstract()
    {        
        if(count > 0)
        {
            setCount(count - 1);
        }        
    }    

    return(
        <div>
            <button type="button" className="btn btn-primary" onClick={handleSubstract}> - </button>            
            <span>  { count }  </span>
            <button type="button" className="btn btn-primary" onClick={handleAdd}> + </button>
            <button type="button" className="btn btn-success" onClick={() => handleAddCart(count)} style={{ margin: '0 10px' }}> Agregar al Carrito </button>
        </div>
    )

}

export default ItemCount;
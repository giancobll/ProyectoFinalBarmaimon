import React, { useState,useEffect } from "react";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { getItemsList, getItemsCategory } from "../../services/firestore";

function ItemListContainer()
{
    const [products,setProducts] = useState([]);
    console.log("renderizando contenido.......");

    const {categoryid} = useParams();

    useEffect(() => 
    {
        if(categoryid === undefined)
        {
            getItemsList().then((respuesta) => {
                setProducts(respuesta);
            });
        }
        else
        {
            getItemsCategory(categoryid).then((respuesta) => setProducts(respuesta));
        }
    },[categoryid]);

    if(products.length === 0)
    {
        return <Loader/>
    }

    return (
                              
            products.map((producto) => (
            <Item
                key={producto.id}
                id={producto.id}
                title={producto.title}
                price={producto.price}
                description={producto.description}
                offer={producto.offer}
                stock={producto.stock}
                img={producto.img}
            />
            ))
              
    );
}

export default ItemListContainer;
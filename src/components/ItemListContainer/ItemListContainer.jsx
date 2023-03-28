import React, { useState,useEffect } from "react";
import Item from "../Item/Item";
import productsData from "../../Data/products";
import { useParams } from "react-router-dom";

/* Mock Async Service */
function getItems()
{
    const promesa = new Promise((resolve) => {
        setTimeout(() => {
            resolve(productsData)
        },2000);
    });
    return promesa;
}

function getItemsCategory(catURL)
{
    const promesa = new Promise((resolve) => {
        setTimeout(() => {
            const tipo = productsData.filter(item => item.category === catURL);
            resolve(tipo);
        },2000);
    });
    return promesa;
}

function ItemListContainer()
{
    const [products,setProducts] = useState([]);
    console.log("renderizando contenido.......");

    const {categoryid} = useParams();

    useEffect(() => 
    {
        if(categoryid === undefined)
        {
            getItems().then((respuesta) => {
                setProducts(respuesta);
            });
        }
        else
        {
            getItemsCategory(categoryid).then((respuesta) => setProducts(respuesta));
        }
    },[categoryid]);

    return (
                              
            products.map((producto) => (
            <Item
                key={producto.id}
                id={producto.id}
                title={producto.title}
                price={producto.price}
                description={producto.description}
                img={producto.img}
            />
            ))
              
    );
}

export default ItemListContainer;
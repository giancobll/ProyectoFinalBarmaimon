import productsData from "../../Data/products";
import { useParams } from "react-router-dom";
import React, {useState,useEffect} from 'react'
import ItemDetail from "../ItemDetail/ItemDetail";

function getItem(idURL)
{
    const promesa = new Promise((resolve) => {
        setTimeout(() => {
            const found = productsData.find(item => {
                return(item.id === parseInt(idURL))
            })
            resolve(found);
        },2000)
    });
    return promesa;
}

function ItemDetailContainer()
{
    const [product,setProduct] = useState([]);

    let{id} = useParams();   

    useEffect(() => {
        getItem(id).then((respuesta) => {
            console.log("promesa ok....", respuesta);
            setProduct(respuesta);
        });
    },[id])

    return(        
        <ItemDetail
         key={product.id}
         id={product.id}
         title={product.title}
         price={product.price}
         description={product.description}
         img={product.img}
        />                  
    )

}

export default ItemDetailContainer;
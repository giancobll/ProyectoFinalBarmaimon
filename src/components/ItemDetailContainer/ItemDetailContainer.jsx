import { useParams} from "react-router-dom";
import React, {useState,useEffect, useContext} from 'react'
import './detailContainer.css'
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../../context/cartContext";
import Loader from "../Loader/Loader";
import { getItemDetail } from "../../services/firestore";

function ItemDetailContainer()
{
    const [product,setProduct] = useState([]);  

    let{id} = useParams();   

    
    const {addItem} = useContext(cartContext);

    useEffect(() => {
        getItemDetail(id).then((respuesta) => {
            console.log("promesa ok....", respuesta);
            setProduct(respuesta);
        });
    },[id])
    
     function handleAddCart(count)
    {
        addItem(product, count);
        console.log('agregado al carrito');        
    }

    if(product.length === 0)
    {
        return <Loader/>        
    }

    return(        
        <div id={product.id}  className="card">
            <div className='card-details'>
                <div className='item-card-detail-img'>
                    <img src={product.img} alt="imagen" />
                </div>
                <p className="text-title">{product.title}</p>
                <p className="text-body">S/. {product.price}</p>                
                <ItemCount handleAddCart={handleAddCart}/>                                                          
            </div>                      
        </div> 

         
    )

}

export default ItemDetailContainer;
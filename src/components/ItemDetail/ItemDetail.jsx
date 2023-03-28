import './itemDetail.css'

function ItemDetail(props)
{
    return(        
         <div id={props.id} className="card">
            <div className='card-details'>
                <div className='item-card-detail-img'>
                    <img src={props.img} alt="imagen" />
                </div>
                <p className="text-title">{props.title}</p>
                <p className="text-body">S/. {props.price}</p>            
            </div>           
            <button className="card-button">Agregar al Carrito</button>                   
        </div>       
    )   
}

export default ItemDetail;
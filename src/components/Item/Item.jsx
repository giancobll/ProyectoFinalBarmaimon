import './item.css';
import { Link } from 'react-router-dom';

function Item(props)
{
    const discountedPrice = props.offer
    ? props.price - (props.price * props.offer) / 100
    : props.price;

    const finalPrice = discountedPrice.toFixed(2);

    return(        
        <div id={props.id} className="item-card" style={{ paddingTop: '80px' }}>
            <div className='item-card-title'>
                <h2>{props.title}</h2>
            </div>
            <div className='item-card-img'>
                <img src={props.img} alt="imagen" />
            </div>
            <div className='item-card-detail'>
                {props.offer&&<h4 style={{color:'limegreen', fontWeight: 'bold'}}>{props.offer}%</h4>}                
                {/* <h4>S/. {props.price}</h4> */}
                <h4> S/. {finalPrice}{' '}
                {props.offer && ( <span style={{ color: 'gray', textDecoration: 'line-through' }}>
                S/. {props.price} </span>)}</h4>
                <small>{props.description}</small>
            </div>
            {
                props.stock > 0 && (            
            <Link to={`/item/${props.id}`}>
                <button type="button" className="btn btn-info">Detalle</button>
            </Link>    
            )}        
        </div>
    )
   
}

export default Item;
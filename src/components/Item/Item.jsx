import './item.css';
import { Link } from 'react-router-dom';

function Item(props)
{
    return(        
        <div id={props.id} className="item-card" style={{ paddingTop: '80px' }}>
            <div className='item-card-title'>
                <h2>{props.title}</h2>
            </div>
            <div className='item-card-img'>
                <img src={props.img} alt="imagen" />
            </div>
            <div className='item-card-detail'>
                <h4>S/. {props.price}</h4>
                <small>{props.description}</small>
            </div>
            <Link to={`/item/${props.id}`}>
                <button type="button" className="btn btn-info">Detalle</button>
            </Link>            
        </div>
    )
   
}

export default Item;
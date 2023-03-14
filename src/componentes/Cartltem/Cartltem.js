import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../../Context/CartProvider';
import { useContext } from 'react';
import './CartItem.css';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const CartItem = () => {
    const { cart, removeItem } = useContext(CartContext);
    console.log(cart)
    return cart.map(element => {
        console.log(element);
        return (
            <main key={element.id} className='container_product'>
                <div className='container_product__image'><img alt='imagen del producto seleccionado' src={`/images/${element.imagen}`} /></div>
                <aside className='container_product__body'>
                    <section className='container_product__body__data'>
                        <p>{element.nombre}</p>
                        <h6>Cantidad: {element.cantidad}</h6>
                        <span>C/U $ {element.precio}</span>
                    </section>
                    <div className='container_product__body__price'>
                        <span>$ {element.precio * element.cantidad}</span>
                    </div>
                    <div className='container_product__body__icon'>
                        <FontAwesomeIcon onClick={() => removeItem(element.id)} className='icon' icon={faTrash} />
                    </div>
                </aside>
            </main>
        )
    });

};


export default CartItem
import Contador from '../Contador/Contador';
import { CartContext } from '../../Context/CartProvider';
import { useState, useContext } from 'react';
import Card from 'react-bootstrap/Card'
import './ItemDetalle.css'
import { Button } from 'react-bootstrap';
import Colores from '../Colores/Colores';
import Talla from '../Talla/Talla';


const ItemDetalle = ({ detalleProduct }) => {
    const [cantidad, setCantidad] = useState(1);
    const { addCart } = useContext(CartContext);

    return (
        <main className='container_item'>
        <Card className='container_item__card'>
                <div className='container_item__card__img'><img src={`../images/${detalleProduct.imagen}`}  alt="imagen del producto que seleccionaste para detallar" /></div>
                    <Card.Body className='container_item__card__body'>
                        <Card.Title className='container_item__card__body__title'>{detalleProduct.nombre}</Card.Title>
                        <Card.Subtitle className='container_item__card__body__subtitle-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget justo velit. Sed ultricies dolor in felis eleifend, vel tempus lectus faucibus. Integer malesuada finibus est, ac tincidunt enim hendrerit ut. Etiam tincidunt, ex in pretium venenatis, nibh ex tincidunt tellus, sit amet ullamcorper quam sapien nec nulla.</Card.Subtitle>
                        <div>
                        <Card.Subtitle>Colores</Card.Subtitle>
                        <Colores/>
                        </div>
                        <div>
                        <Card.Subtitle>Tallas</Card.Subtitle>
                        <Talla/>
                        </div>
                        <Card.Subtitle className='container_item__card__body__subtitle'>Precio:  ${detalleProduct.precio}</Card.Subtitle>
                        <h6> En Stock: {detalleProduct.stock}</h6>
                        <div>
                        <h6>Cantidad: {cantidad}</h6>
                        <Contador  setCantidad={setCantidad}/>
                        </div>
                        <Button className='container_item__card__body__add' variant='dark' onClick={() => addCart(detalleProduct, cantidad)}>
                            Agregar a Carrito</Button>
                    </Card.Body>
        </Card>
        </main>
    )
};

export default ItemDetalle
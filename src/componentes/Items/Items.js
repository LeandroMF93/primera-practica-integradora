import { Link } from 'react-router-dom';
import './Items.css';
import Card from 'react-bootstrap/Card'
import  Button  from 'react-bootstrap/Button';




function Items({ productos }) {
    return (
        <main className='container_list'>
                <Link to={`/ItemDetalle/${productos.id}`} key={productos.id}>
                    <Card className='card'>
                        <Card.Img variant='top' alt='error al cargar la foto del producto' className='img' src={`/images/${productos.imagen}`} />
                        <Card.Body className='card_Body'>
                            <Card.Title>{productos.nombre}</Card.Title>
                            <Card.Title><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></Card.Title>
                            <Card.Title>$ {productos.precio}</Card.Title>
                            <Button variant='secondary' >+</Button>
                        </Card.Body>
                    </Card>
                </Link>
        </main>
    )
}
export default Items
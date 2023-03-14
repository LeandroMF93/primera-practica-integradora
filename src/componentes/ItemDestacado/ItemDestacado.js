import Items from "../Items/Items";
import { Link } from "react-router-dom";
function ItemDestacado({ productos }) {
    return (
        <>
            <h3  style={{ color: '#4f4e4e', width: '100%', textAlign: 'center' }}>Nueva Coleccion</h3><br/>
            {productos.map((producto) => (
                <Items key={producto.id} productos={producto}></Items>
            ))}
            <Link style={{ color: '#4f4e4e' }} to="/productos"><h3 style={{ color: '#4f4e4e' }}>Ver Todo</h3></Link>
        </>
    );
}

export default ItemDestacado
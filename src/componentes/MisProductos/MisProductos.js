import Items from '../Items/Items';
import Categorias from '../Categorias/Categorias';


function Productos({ productos }) {
    return (
        <>
            <Categorias/>
            {productos.map((producto) => (
                <Items key={producto.id} productos={producto}></Items>
            ))}
        </>
    );
}


export default Productos;
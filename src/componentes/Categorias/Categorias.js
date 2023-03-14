import './Categorias.css'
import { Link } from 'react-router-dom';

const Categorias = () => {
return (
    <main className="container_Categoria">
        <h3>Filtra por Categoria</h3>
        <div>
        <Link to="/categoria/hombre">
        <section className="categoria caballeros">
            <h2>Caballeros</h2>
        </section>
        </Link>
        <Link to="/categoria/mujer">
        <section className="categoria damas">
            <h2>Damas</h2>
        </section>
        </Link>
        </div>
    </main>
)
}

export default Categorias
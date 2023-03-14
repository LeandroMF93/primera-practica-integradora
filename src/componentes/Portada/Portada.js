import './Portada.css';
import Sesion from '../Sesion/Sesion';

const Portada = () => {
    return (
        <main className='container_Inicio'>
            <section className='inicio_title'>
                <h1>Elegant</h1>
                <h2>Donde la moda y la elegancia se encuentran.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec ut elit eget velit posuere eleifend.</p>
            </section>
            <Sesion/>
        </main>
    )
}

export default Portada
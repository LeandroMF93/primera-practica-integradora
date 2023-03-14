import './Opiniones.css'
import Clientes from '../Clientes/Clientes'

const Opiniones = () => {
    return (
        <main className='container_Opiniones'>
            <h2>Opiniones de nuestros clientes</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed quis malesuada nibh, non bibendum nisl. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                <section className='opiniones'>
                <Clientes avatar='../../../images/yo.jpg' nombre='Juan Perez' texto='Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae' />
                <Clientes avatar='../../../images/yo.jpg' nombre='Maria Rodriguez' texto='Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae' />
                <Clientes avatar='../../../images/yo.jpg' nombre='Samuel Carrizo' texto='Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae' />
                </section>
                
        </main>
    )
}

export default Opiniones
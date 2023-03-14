import './Clientes.css'

const Clientes = (props) => {
    return (
            <section className='cliente'>
                <div className='cliente_Avatar'><img alt='error al cargar avatar' src={props.avatar} /></div>
                <p>{props.nombre}</p>
                <div className='cliente_Star'>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <p className='texto'>{props.texto}</p>
            </section>
    )
}


export default Clientes
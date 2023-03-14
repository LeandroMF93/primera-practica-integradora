import './Descuento.css';

const Descuento = () => {
  return (
    <article className='container_Descuento'>
      <section className='section-1'>
        <h2>Suscribete y obten 30% OFF</h2>
      </section>
      <section className='section-2'>
        <input placeholder='Enter Your Mail'></input>
        <button>Suscribirse</button>
      </section>
    </article>
  )
}

export default Descuento
import './Footer.css'
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import {faBong} from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <footer className="container_footer__legal">
      <section>
        <h3>Elegant</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>
      <section>
        <h3>Ayuda</h3>
        <ul>
          <li>Nuestros Datos</li>
          <li>Terminos y Condiciones</li>
          <li>Politica de Cookies</li>
          <li>Politica de Privacidad</li>
        </ul>
      </section>
      <section className='container_footer__legal__networks'>
        <h3>Siguenos</h3>
        <div className='networks'>
          <a href="."><i className=" fab fa-instagram"></i></a>
          <a href="."><i className=" fab fa-facebook"></i></a>
          <a href="."><i className=" fab fa-twitter"></i></a>
        </div>
      </section>
      <section>
        <h3>Tienda</h3>
        <a href='.'>Caballeros</a>
        <a href='.'>Damas</a>
      </section>
    </footer>
  )
}

export default Footer
import '../../hojas-de-estilo/Styles-Header/Usuario.css';
import { BsCart2 } from "react-icons/bs";


function Usuario() {
  return(
    <div className="container-usuario">
      <a  className='aNav' href="#">
        <nav>Crea tu cuenta</nav>
        <nav>Ingresá</nav>
        <nav>Mis compras</nav>
        <nav><BsCart2 /></nav>
      </a>
    </div>
  )    
}

export default Usuario;
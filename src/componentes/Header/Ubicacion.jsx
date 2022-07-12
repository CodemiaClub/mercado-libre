import '../../hojas-de-estilo/Styles-Header/Ubicacion.css';
import { FiMapPin } from "react-icons/fi";


function Ubicacion(){
  return(
    <div className="container-ubicacion">
      <FiMapPin />
      <div className="text-ubicacion">
        <p>Enviar a</p>
        <p>Capital Federal</p>
      </div>
    </div>
  )    
}

export default Ubicacion;
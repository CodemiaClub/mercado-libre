import '../../hojas-de-estilo/Styles-Main/Caveat.css';
import { FcInfo } from "react-icons/fc";

function Caveat(){
  return(
    <div className="container-caveat">
      <div className="icono-caveat">
      <FcInfo />
      </div>
      <div className="aviso-caveat">
        <p>El envío gratis está sujeto al peso, precio y la distancia del envío.</p>
      </div>
    
    </div>
  )
}

export default Caveat;
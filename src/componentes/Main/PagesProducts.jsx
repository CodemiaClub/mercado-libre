import '../../hojas-de-estilo/Styles-Main/PagesProducts.css';
import { FcNext } from "react-icons/fc";

function PagesProducts(){
  return(
    <div className="container-PagesProducts">
      <p className='one'>1</p>
      <p>de 7</p>
      <div className="siguiente">
      <p>Siguiente</p>
      <FcNext />
      </div>
    </div>
  )    
}
export default PagesProducts;
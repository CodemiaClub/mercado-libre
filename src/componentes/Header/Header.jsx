import '../../hojas-de-estilo/Styles-Header/Header.css';
import Logo from '../Header/Logo';
import Ubicacion from './Ubicacion';
import ProductSearch from '../Header/ProductSearch';


function Header() {
  return (
    <div className="container-header">
      <div className="fileOne">
        <Logo img='mercadolibre' />
        <Ubicacion />
      </div>
      <div className="fileTwo">
      <ProductSearch />
      </div>
      <div className="fileThree"></div>
    </div>
  );
}

export default Header;
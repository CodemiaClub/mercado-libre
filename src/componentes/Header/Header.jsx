import '../../hojas-de-estilo/Styles-Header/Header.css';
import Logo from '../Header/Logo';


function Header() {
  return (
    <div className="container-header">
      <div className="fileOne">
        <Logo img='mercadolibre' />
        
      </div>
      <div className="fileTwo"></div>
      <div className="fileThree"></div>
    </div>
  );
}

export default Header;
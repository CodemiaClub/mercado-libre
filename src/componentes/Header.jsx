import '../hojas-de-estilo/Header.css';
import Logo from '../componentes/Logo';
import '../hojas-de-estilo/Header.css';

function Header() {
  return (
    <div className='container-header'>
      <header>
        <div className="top-box">
          <Logo />
          <div className="header-input">
            <input 
            className='primer-input'
            type="text" 
            placeholder='Buscar productos,marcas y mas...' />
            <input 
            className='segudno-input'
            type="checkbox"/> Solo en HP Tienda Oficial Oficial
            <img 
            className="header-lupa"
            src={require("../imagenes/lupa.png")}
            alt="search" />
          </div>
          <div className="promocion">
            <img 
            className='header-promo'
            src='https://http2.mlstatic.com/D_NQ_840611-MLA48934732318_012022-OO.webp'
            alt='promo' />
          </div>
        </div>
        <div className="bottom-box"></div>
      </header>
    </div>                  
   
  );
}

export default Header;
import '../hojas-de-estilo/Header.css';
import Logo from '../componentes/Logo';
import Usuarios from '../componentes/Usuarios';
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
            className='segundo-input'
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


        <div className="bottom-box">
          <div className="header-ubicacion">
            <img 
            className='ubicacion-logo'
            src={require("../imagenes/aqui.png")} />
            <div className="letras">
              <p>Enviar a</p>
              <p>Capital Federal</p>
            </div>
          </div>
          <div className="header-busqueda">
            <ul>
              <li>Categorias</li>
              <li>Ofertas</li>
              <li>Historial</li>
              <li>Supermercado</li>
              <li>Moda</li>
              <li>Vender</li>
              <li>Ayuda</li>
            </ul>
          </div>
          <div className="header-usuario">
            <Usuarios />
          </div>
        </div>
      </header>
    </div>                  
   
  );
}

export default Header;
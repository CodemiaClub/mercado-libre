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
            <nav>
              <a href="https://www.mercadolibre.com.ar/hub/registration/landing#nav-header">Creá tu cuenta</a>
              <a href="https://www.mercadolibre.com/jms/mla/lgz/login?platform_id=ML&go=https%3A%2F%2Fwww.mercadolibre.com.ar%2F&loginType=explicit#nav-header">Ingresá</a>
              <a href="https://www.mercadolibre.com/jms/mla/lgz/msl/login/H4sIAAAAAAAEAzWNQarDMAxE7zJrk-y97EWM6siJ-XJsJKVtKL17CZ8uh5n35g3pa92Tn4MRwa8hNVdHwBDy0rWluiCiCQKsOv8iXRNSauyshvi-RCsvNy5dL1UhMUYAHb6lIv2J-P-FgGqJX866k6Qn3x-Vr_ZHrB0Rm_uwOM_tpJz7sfvUWDMtXepdecq9TaRzO9M4NG9kbLNUc3wCCpknV8p_iK4Hf74ZcyDg5QAAAA/user">Mis compras</a>
              <img 
              className='carrito'
              src={require('../imagenes/carrito.png')} />
            </nav>
          </div>
        </div>
      </header>
    </div>                  
   
  );
}

export default Header;
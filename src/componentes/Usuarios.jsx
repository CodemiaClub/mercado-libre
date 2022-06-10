import '../hojas-de-estilo/Usuarios.css';

function Usuarios() {
  return (
    <div className="usuarios">
      <nav>
        <a href="https://www.mercadolibre.com.ar/hub/registration/landing#nav-header">Creá tu cuenta</a>
        <a href="https://www.mercadolibre.com/jms/mla/lgz/login?platform_id=ML&go=https%3A%2F%2Fwww.mercadolibre.com.ar%2F&loginType=explicit#nav-header">Ingresá</a>
        <a href="https://www.mercadolibre.com/jms/mla/lgz/msl/login/H4sIAAAAAAAEAzWNQarDMAxE7zJrk-y97EWM6siJ-XJsJKVtKL17CZ8uh5n35g3pa92Tn4MRwa8hNVdHwBDy0rWluiCiCQKsOv8iXRNSauyshvi-RCsvNy5dL1UhMUYAHb6lIv2J-P-FgGqJX866k6Qn3x-Vr_ZHrB0Rm_uwOM_tpJz7sfvUWDMtXepdecq9TaRzO9M4NG9kbLNUc3wCCpknV8p_iK4Hf74ZcyDg5QAAAA/user">Mis compras</a>
        <img
          className='carrito'
          src={require('../imagenes/carrito.png')} />
      </nav>
    </div>
  );
}

export default Usuarios;
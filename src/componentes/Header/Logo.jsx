import '../../hojas-de-estilo/Styles-Header/Logo.css';


function Logo({img}) {
  return(
    <div className="logo">
      <a href='https://www.mercadolibre.com.ar/'>
      <img 
      className="logo-mc"
      src={`https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.1/${img}/logo__large_plus.png`}
      />
      </a>
      
    </div>
  );    
}

export default Logo;
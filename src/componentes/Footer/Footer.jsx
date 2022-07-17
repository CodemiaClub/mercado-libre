import '../../hojas-de-estilo/Styles-Footer/Footer.css';
import FooterInformation from './FooterInformation';
import FooterMenu from './FooterMenu';
import FooterOption from './FooterOption';

function Footer() {
  return (
    <div className="container-footer">
      <FooterOption />
      <div className="footerBackground">
        <div className="footerMenuFooter">
          <FooterMenu
            title='Acerca de'
            nav1='Mercado Libre'
            nav2='Investor relations'
            nav3='Tendencias'
            nav4='Sustentabilidad' />

          <FooterMenu
            title='Otros sitios'
            nav1='Developers'
            nav2='Mercado Pago'
            nav3='Mercado Shops'
            nav4='Mercado Envíos'
            nav5='Mercado Ads'
            nav6='Mercado Libre Ideas' />

          <FooterMenu
            title='Ayuda'
            nav1='Comprar'
            nav2='Vender'
            nav3='Resolución de problemas'
            nav4='Centro de seguridad' />

          <FooterMenu
            title='Redes sociales'
            nav1='Twitter'
            nav2='Facebook'
            nav3='Instagram'
            nav4='YouTube' />

          <FooterMenu
            title='Mi cuenta'
            nav1='Ingresá'
            nav2='Vender' />

          <FooterMenu
            title='Mercado Puntos'
            nav1='Nivel 6'
            nav2='Disney+'
            nav3='Star+'
            nav4='HBO MAX'
            nav5='Paramount+' />
        </div>
      </div>
        <FooterInformation />
    </div >
  )
}

export default Footer;
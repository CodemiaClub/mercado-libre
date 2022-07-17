import '../../hojas-de-estilo/Styles-Footer/FooterInformation.css';

function FooterInformation(){
  return(
    <div className="containerInformation">
      <div className="information">
        <div className="title">
          <p>Trabajá con nosotros</p>
          <p>Terminos y condiciones</p>
          <p>Como cuidamos tu privacidad</p>
          <p>Accesibilidad</p>
          <p>Información al usuario financiero</p>
          <p>Ayuda</p>
          <p>Defensa del Consumidor</p>
          <p>Información sobre seguros</p>
        </div>
        <div className="legal">
          <p>Copyright © 1999-2022 MercadoLibre S.R.L.</p>
          <p>Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA</p>
        </div>
      </div>
    </div>
  )    
}

export default FooterInformation;
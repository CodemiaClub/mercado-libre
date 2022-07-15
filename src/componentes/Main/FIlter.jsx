import "../../hojas-de-estilo/Styles-Main/Filter.css";
import Category from "./Category";
import FilterCard from "./FilterCard";
import InputFilter from "./InputFilter";
import Full from "./Full";

function Filter() {
  return (
    <div>
      <div className="container-filter">
        <p>
          <a href="https://www.mercadolibre.com.ar/tiendas-oficiales">
            {" "}
            Tiendas oficiales
          </a>
        </p>
        <p>HP Tienda OFicial</p>
        <p>238 resultados</p>
      </div>
      
        <FilterCard title="Llega mañana" />
        <FilterCard  img ={<Full />} title="te ahorra envíos" text="con tu carrito de compras" />
        <FilterCard title="Envío gratis" />
     
      <div className="filter-category">
        <Category
          title="Categorías"
          text="Computación"
          numb="(12)"
          text2="Electrónica, Audio y Video"
          numb2="(12)"
        />

        <Category title="Costo de envío" text="Gatis" numb="(12)" />

        <Category
          title="Tiempo de entrega"
          text="Llegan hoy"
          numb="(12)"
          text2="Llegan en menos de 24hs"
          numb2="(12)"
        />

        <Category
          title="Precio"
          text="Hasta $8.000"
          numb="(12)"
          text2="$8.000 a $20.000"
          numb2="(12)"
          text3="Más de $20.000"
          numb3="(12)"
        />
        <div className="inputPrice">
          <InputFilter />
          
        </div>

        <Category
          title="Ubicación"
          text="Capital Federal"
          numb="(12)"
          text2="Bs.As. G.B.A. Oeste"
          numb2="(12)"
        />

        <Category title="Pago" text="Sin Interés" numb="(12)" />

        <Category title="Tipo de entrega" text={<Full />} numb="(12)" />

        <Category
          title="Marca"
          text="HP"
          numb="(12)"
          text2="Hewlett Packard Enterprise"
          numb2="(12)"
          text3="(Samsung)"
          numb3="(12)"
        />
      </div>
    </div>
  );
}

export default Filter;

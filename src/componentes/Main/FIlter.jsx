import '../../hojas-de-estilo/Styles-Main/Filter.css';
import FilterCard from './FilterCard';

function Filter() {
    return (
        <div>
            <div className="container-filter">
                <p><a href='https://www.mercadolibre.com.ar/tiendas-oficiales'> Tiendas oficiales</a></p>
                <p>HP Tienda OFicial</p>
                <p>238 resultados</p>
            </div>
            <div className="filtercard">
                <FilterCard 
                title='Llega mañana'/>
                <FilterCard 
                title='te ahorra envíos'
                text='con tu carrito de compras' />
                <FilterCard 
                title='Envío gratis'/>
            </div>
        </div>
    )
}

export default Filter;
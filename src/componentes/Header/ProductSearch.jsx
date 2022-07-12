import '../../hojas-de-estilo/Styles-Header/ProductSearch.css';
import { SearchIcon } from '@chakra-ui/icons';

function ProductSearch() {
    return(
        <div className="container-search">
            <input className="search" type="text" placeholder="Buscar productos, marcas y mas..."/>
            <div className="check">
            <input type="checkbox"/>
            <p>Solo en Computación</p>
            </div>
            <SearchIcon />
        </div>
    )
}

export default ProductSearch;
import '../../hojas-de-estilo/Styles-Main/Product.css';

function Product({ img, precio, llamadaAccion, descripción }) {
  return (
    <div className="containerproduct">
      <div className="imgProduct">
        <img
          className='product-img'
          src={img}
        />
      </div>
      <div className="descripcion-product">
        <p>{precio}</p>
        <p className='llamadaAccion' >{llamadaAccion}</p>
        <p>{descripción}</p>
      </div>
    </div>
  )
}

export default Product;
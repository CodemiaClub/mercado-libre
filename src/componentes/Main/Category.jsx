import '../../hojas-de-estilo/Styles-Main/Category.css';

function Category({ title, text, text2, text3, numb, numb2, numb3 }) {
  return (
    <div className="container-categoty">
      <p className='title'>{title}</p>
      <div className="category-product">
        <p>{text}</p>
        <p>{numb}</p>
      </div>
      <div className="category-product2">
        <p>{text2}</p>
        <p>{numb2}</p>
      </div>
      <div className="category-product3">
        <p>{text3}</p>
        <p>{numb3}</p>
      </div>
    </div>
  )
}

export default Category;
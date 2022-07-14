import '../../hojas-de-estilo/Styles-Main/FilterCard.css';


function FilterCard({title, text}) {
  return (
    <div className="container-filterCard">
      <p>{title}</p>
      <p>{text}</p>
    </div>
  )
}

export default FilterCard;
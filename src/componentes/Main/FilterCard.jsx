import "../../hojas-de-estilo/Styles-Main/FilterCard.css";
import { Switch, Stack } from "@chakra-ui/react";

function FilterCard({ img, title, text }) {
  return (
    <>
    <div className="container-filterCard">
      <div className="container-filtercard-two">
        <div className="t1">
          <a href="#">{img}</a>
          <p>{title}</p>
        </div>
        <p>{text}</p>
      </div>
      
    </div>
    
  </>
  );
}

export default FilterCard;

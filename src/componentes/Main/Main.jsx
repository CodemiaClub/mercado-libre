import "../../hojas-de-estilo/Styles-Main/Main.css";
import Profile from "../Main/Profile";
import Filter from "./FIlter";
import ProductsMain from "./ProductsMain";

function Main() {
  return (
    <div className="container-main">
      <div className="main-content">
        <Profile />
        <div className="product-filter">
            <Filter />
            <ProductsMain />
        </div>
      </div>
    </div>
  );
}

export default Main;

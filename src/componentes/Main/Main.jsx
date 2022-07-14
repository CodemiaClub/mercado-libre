import "../../hojas-de-estilo/Styles-Main/Main.css";
import Profile from "../Main/Profile";
import Filter from "./FIlter";
import Products from "./Products";

function Main() {
  return (
    <div className="container-main">
      <div className="main-content">
        <Profile />
        <div className="product-filter">
            <Filter />
            <Products />
        </div>
      </div>
    </div>
  );
}

export default Main;

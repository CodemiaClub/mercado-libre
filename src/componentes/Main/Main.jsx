import "../../hojas-de-estilo/Styles-Main/Main.css";
import Profile from "../Main/Profile";

function Main() {
  return (
    <div className="container-main">
      <div className="main-content">
        <Profile />
        
        <div className="product-filter"></div>
      </div>
    </div>
  );
}

export default Main;

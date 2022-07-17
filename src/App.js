import "./App.css";
import Header from "./componentes/Header/Header";
import { ChakraProvider } from "@chakra-ui/react";
import Banner from "./componentes/Banner/Baner";
import Main from "./componentes/Main/Main";
import Footer from "./componentes/Footer/Footer";



function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Header />
      </ChakraProvider>
      <Banner />
      <Main />  
      <Footer />
    </div>
  );
}

export default App;

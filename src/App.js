import "./App.css";
import Header from "./componentes/Header/Header";
import { ChakraProvider } from "@chakra-ui/react";
import Banner from "./componentes/Banner/Baner";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Header />
      </ChakraProvider>
      <Banner />
    </div>
  );
}

export default App;

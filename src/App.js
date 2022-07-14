import "./App.css";
import Header from "./componentes/Header/Header";
import { ChakraProvider } from "@chakra-ui/react";
import Banner from "./componentes/Banner/Baner";
import Profile from "./componentes/Main/Profile";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Header />
      </ChakraProvider>
      <Banner />
      <Profile />
    </div>
  );
}

export default App;

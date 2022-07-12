import './App.css';
import Header from './componentes/Header/Header';
import { ChakraProvider } from '@chakra-ui/react';


function App() {

  return (
    <ChakraProvider>
    <Header />
    </ChakraProvider>
  );
}

export default App;

import '../../hojas-de-estilo/Styles-Header/ProductNav.css';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react'

function ProductNav() {
  return (
    <div className="container-nav">
      <Menu>
        <MenuButton as={Button}
          px={4}
          py={2}
          color='rgba(51,51,51,.6)'
          background='none'
          fontFamily='apple-system'
          fontSize='14px'
          fontWeight='none'
          _hover={{
            color:'#333'
          }}
          width='auto'
          
        >
          Categorias
        </MenuButton>
        <MenuList>
          <MenuItem>probando</MenuItem>
          <MenuItem>probando</MenuItem>
          <MenuItem>probando</MenuItem>
          <MenuItem>probando</MenuItem>
          <MenuItem>probando</MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton as={Button}
          px={4}
          py={2}
          color='rgba(51,51,51,.6)'
          background='none'
          fontFamily='apple-system'
          fontSize='14px'
          fontWeight='none'
          _hover={{
            color:'#333'
          }}
        >
          Ofertas
        </MenuButton>

      </Menu>

      <Menu>
        <MenuButton as={Button}
          px={4}
          py={2}
          color='rgba(51,51,51,.6)'
          background='none'
          fontFamily='apple-system'
          fontSize='14px'
          fontWeight='none'
          _hover={{
            color:'#333'
          }}
        >
          Historial
        </MenuButton>

      </Menu>

      <Menu>
        <MenuButton as={Button}
          px={4}
          py={2}
          color='rgba(51,51,51,.6)'
          background='none'
          fontFamily='apple-system'
          fontSize='14px'
          fontWeight='none'
          _hover={{
            color:'#333'
          }}
        >
          Supermercados
        </MenuButton>

      </Menu>

      <Menu>
        <MenuButton as={Button}
          px={4}
          py={2}
          color='rgba(51,51,51,.6)'
          background='none'
          fontFamily='apple-system'
          fontSize='14px'
          fontWeight='none'
          _hover={{
            color:'#333'
          }}
        >
          Moda
        </MenuButton>

      </Menu>

      <Menu>
        <MenuButton as={Button}
          px={4}
          py={2}
          color='rgba(51,51,51,.6)'
          background='none'
          fontFamily='apple-system'
          fontSize='14px'
          fontWeight='none'
          _hover={{
            color:'#333'
          }}
        >
          Vender
        </MenuButton>

      </Menu>

      <Menu>
        <MenuButton as={Button}
          px={4}
          py={2}
          color='rgba(51,51,51,.6)'
          background='none'
          fontFamily='apple-system'
          fontSize='14px'
          fontWeight='none'
          _hover={{
            color:'#333'
          }}
        >
          Ayuda
        </MenuButton>

      </Menu>

    </div>
  );
}

export default ProductNav;
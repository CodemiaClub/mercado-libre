import '../../hojas-de-estilo/Styles-Header/ProductNav.css';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  ChevronDownIcon,
} from '@chakra-ui/react'

function ProductNav() {
  return (
    <div className="container-nav">
      <Menu>
        <MenuButton as={Button}>
          Prueba
        </MenuButton>
        <MenuList>
          <MenuItem>probando</MenuItem>
          <MenuItem>probando</MenuItem>
          <MenuItem>probando</MenuItem>
          <MenuItem>probando</MenuItem>
          <MenuItem>probando</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}

export default ProductNav;
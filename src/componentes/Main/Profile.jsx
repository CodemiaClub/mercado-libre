import "../../hojas-de-estilo/Styles-Main/Profile.css";
import { Menu, MenuButton, MenuList, MenuItem, Button, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function Profile() {
  return (
    <div className="profile">
      <a href="https://tienda.mercadolibre.com.ar/hp-tienda-oficial">
      <div className="container-profile"></div>
      </a>
      <Menu>
          
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          px={4}
          py={2}
          color="rgb(64, 63, 63)"
          background="none"
          fontFamily="apple-system"
          fontSize="14px"
          fontWeight="none"
          _hover={{
            color: "#333"
          }}
          width="auto"
        >
          <Text>
            <b>Ordenar por</b> Mas Reelevantes
          </Text>
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

export default Profile;

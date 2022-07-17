import '../../hojas-de-estilo/Styles-Footer/FooterOption.css';
import { Menu, MenuButton, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function FooterOption(){
  return(
    <div className="container-footerOption">
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
            Más información
          </MenuButton>
          
        </Menu>
    </div>
  )
}

export default FooterOption;
import '../../hojas-de-estilo/Styles-Main/InputFilter.css';
import { Input } from "@chakra-ui/react";
import { MinusIcon } from '@chakra-ui/icons'
import { IoIosArrowDroprightCircle } from 'react-icons/io';

function InputFilter() {
  return <div className="inputFIlter">
      <Input placeholder='Mínimo' 
      w={84} h={25} />
      <MinusIcon />
      <Input placeholder='Máximo' 
      w={84} h={25} />
      <IoIosArrowDroprightCircle />
  </div>;
}

export default InputFilter;
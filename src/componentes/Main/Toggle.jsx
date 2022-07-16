import '../../hojas-de-estilo/Styles-Main/Toggle.css';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function Toggle(){
  return(
    <div>
      
      <Switch {...label} />
      
    </div>
  )
}

export default Toggle;
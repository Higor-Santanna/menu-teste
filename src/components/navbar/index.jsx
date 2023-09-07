import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AllSnacks } from '../allSnacks';
import { AllDrinks } from '../allDrinks';
import { AllBurguers } from '../allBurguers';
import { AllPortions } from '../allPortions';
import { AllPlateMeats } from '../allPlateMeats'
import { Menu } from '../menu'; 
import { margin } from './style';

export function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
        <Menu />
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          style={margin}
        >
          <Typography>
            Petiscos
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <AllSnacks />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          style={margin}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Bebidas
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <AllDrinks />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          style={margin}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Lanches
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <AllBurguers />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          style={margin}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Porções</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <AllPortions />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
          style={margin}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Carnes na Chapa</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <AllPlateMeats />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

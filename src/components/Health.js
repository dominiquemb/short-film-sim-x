import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LinearProgress from '@mui/material/LinearProgress';
/* Parameter*/

const healthLevel = 12;
const hungerLevel = 5;

/*------------*/ 
const colors = [
    "rgb(102, 0, 0)",
    "rgb(153, 0, 0)",
    "rgb(204, 0, 0)",
    "rgb(255, 51, 0)",
    "rgb(255, 197, 22)",
    "rgb(255, 219, 22)",
    "rgb(255, 219, 22)",
    "rgb(252, 235, 97)",
    "rgb(255, 255, 51)",
    "rgb(255, 255, 102)",
    "rgb(255, 255, 153)",
    "rgb(207, 245, 207)",
    "rgb(198, 244, 198)",
    "rgb(189, 243, 189)",
    "rgb(180, 242, 180)",
    "rgb(171, 241, 171)",
    "rgb(162, 240, 162)",
    "rgb(153, 239, 153)",
    "rgb(0, 232, 69)",
    "rgb(0, 232, 89)"
  ]

const healthBarColors  = colors.slice(0,healthLevel);  
const hungerBarColors  = colors.slice(0,hungerLevel);  

const healthLines = {
  "Eyes": 56 ,
  "Throat": 86 ,
  "Nervous System": 26 ,
  "Brain": 22 ,
}
const geneticsLines = {
  "A": 56 ,
  "T": 16 ,
  "G": 76 ,
  "C": 32 ,
}



const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function HealthCard() {
  return (
    <Card className="healhCard" sx={{ minWidth: 275 , marginLeft:"2%",marginRight:"2%",paddingTop:"2vh"}}>
      <CardContent>
        {/* <Typography variant="h5" component="div" sx={{ width: '90%' , marginTop:1,marginBottom : 1}}>
         Health
        </Typography>
        <div className="progress-bar">
            {
                healthBarColors.map((color,index)=>{return <div style={{backgroundColor : color }} className="increment" ></div>})
            }
        </div> */}
        <Typography variant="h5" component="div" sx={{ width: '90%' , marginTop:1,marginBottom : 1}}>
         Hunger
        </Typography>
        {/* <div className="progress-bar">
            {
                hungerBarColors.map((color,index)=>{return <div style={{backgroundColor : color }} className="increment" ></div>})
            }
        </div> */}
        <Box sx={{ width: '90%' , marginTop:1,marginBottom : 1}}>
                  <LinearProgress variant="determinate" value={50} />
                </Box>
        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h5"> Health </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {
              Object.entries(healthLines).map((element , index) => {return <div>
                <Typography variant="h6" >{element[0]} </Typography>
                <Box sx={{ width: '90%' , marginTop:1,marginBottom : 1}}>
                  <LinearProgress variant="determinate" value={element[1]} />
                </Box>
                 
              </div>})
            }


          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h5"> Genetics </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {
              Object.entries(geneticsLines).map((element , index) => {return <div>
                <Typography variant="h6" >{element[0]} </Typography>
                <Box sx={{ width: '90%' , marginTop:1,marginBottom : 1}}>
                  <LinearProgress variant="determinate" value={element[1]} />
                </Box>
                 
              </div>})
            }


          </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
  );
}
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


export default function Sequence() {
  return (

        <Accordion style ={{ marginLeft:"10%", marginRight:"10%",marginTop:"5vh" , borderRadius:"20px"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h5"> DNA sequence </Typography>
          </AccordionSummary>
          <AccordionDetails>
          AGGTCGGGCTATACCCGTAGCCTGATCAGGGACCTA
          CGCTTACCCACTCAGTGTTGCTCCCGCGATGAGCGGC
          GCCCTTGCCCGCGGTCGTTGTTCCTTTTGGGAGCTCGG
          TAGACGCCGAAACGCTTGGGACGTCTGTCACACGTCAC
          AGCGAAGTGCGTTCTCCGTCGGGGGCTATCGTACCTGG
          AAGAACCTCCTGATCTTTAGATTTAGTACAGCATTCTTC
          CCGAGGCGAAACGTTTCAGAGCTCAGACCAACTATGAGGC
          TGGTGTCACACCTCGCCGAGCATTCTGAGCCAG ...



          </AccordionDetails>
        </Accordion>


  );
}
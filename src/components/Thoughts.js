import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
const events = [
  ["Remember meeting at 1pm", "Have to call Amanda in an hour for sprint retrospective"],
  ["Uncertainty about Mike being able to babysit", "Call Trisha if he's not able to babysit"],
];



export default function Thoughts() {
  return (
    <Card style ={{ marginLeft:"2%", marginRight:"2%",marginTop:"2vh" , marginBottom:"2vh" }}>
      <CardContent>

            <Typography variant="h5" component="div" sx={{ width: '95%' , marginTop:1,marginBottom : 1}}>
                Thoughts
            </Typography>
        <br></br>
        <br></br>

        {
            events.map( (element , index) => { return <>

          <Card sx={{ width:"95%", margin :"auto"  }} > 
                  <CardActionArea>
                      <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {element[0]}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {element[1]}
                      </Typography>
                      </CardContent>
                  </CardActionArea>
          </Card> 
              <br></br></>  } )
        }


      </CardContent>
    </Card>
  );
}
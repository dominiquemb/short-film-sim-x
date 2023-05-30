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
  ["Mr. Alex", "You have a meeting with Mr. Alex at 3:00 PM"],
  ["Mr. Mayers", "You have a phone call with Mr. Mayers at 6:00 PM"],
  ["Mr. Mayers" , "Mr. Mayers sent you an email"]
];


function Event(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Card sx={{ width:"90%", margin :"auto"  }} aria-describedby={id}  onClick={handleClick}> 
                <CardActionArea>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {props.content}
                    </Typography>
                    </CardContent>
                </CardActionArea>
        </Card> 


      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <List style={{minWidth:"150px"}}>
          <ListItem disablePadding >
            <ListItemButton>
              <ListItemText primary="Hang up" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Answer" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Erase" />
            </ListItemButton>
          </ListItem>
        </List>
      </Popover>
    </div>
  );
}

export default function Events() {
  return (
    <Card sx={{ minWidth: 275 , marginLeft:"5%", marginRight:"5%",paddingTop:"2vh"}}>
      <CardContent>

        <div style={{display:"flex"}}>
            <Typography variant="h5" component="div" sx={{ width: '90%' , marginTop:1,marginBottom : 1}}>
                Events
            </Typography>
            <Button size="small">View more details</Button>
        </div>
        <br></br>
        <br></br>

        {
            events.map( (element , index) => { return <>
              <Event title={element[0]} content={element[1]} />
              <br></br></>  } )
        }


      </CardContent>
    </Card>
  );
}
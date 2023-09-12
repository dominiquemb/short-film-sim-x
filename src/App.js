import logo from "./logo.svg";
import "./App.css";
import Grid from '@mui/material/Grid';
import Health from "./components/Health.js";
import Events from "./components/Events.js";
import Sequence from "./components/Sequence.js";
import Connections from "./components/Connections.js";
import Thoughts from "./components/Thoughts.js";


function App() {
  const videoIconStyle = {width:30,borderRadius:20, boxShadow: "0px 0px 6px #000"};

  return (
        <Grid container  style={{width:"80%",margin:"auto",marginTop:"5vw"}} >
          <Grid item xs={12} md={6}>
            <div style={{width:"95%",margin:"auto",position:"relative"}}>
              <video  style={{width:"100%" }}  loop muted autoPlay >
                <source src={require("./assets/clip.mp4")} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

            <div id = "video-button-column" style={{position:"absolute",right:"-49px",top:"25px",width:"15%",height:"50%",right:"5%"}} >
              <Grid container >
                  <Grid item xs={12} >
                    <img src={require("./assets/rotation.png")} style={videoIconStyle} />
                  </Grid>
                  <Grid item xs={12} >
                    <img src={require("./assets/hand.png")} style={videoIconStyle} />
                  </Grid>
                  <Grid item xs={12} >
                    <img src={require("./assets/plus.png")} style={videoIconStyle} />
                  </Grid>
                  <Grid item xs={12} >
                    <img src={require("./assets/minus.png")} style={videoIconStyle} />
                  </Grid>
                  <Grid item xs={12} >
                    <img src={require("./assets/compass.png")} style={videoIconStyle} />
                  </Grid>
                  <Grid item xs={12} >
                    <img src={require("./assets/pending.png")} style={videoIconStyle} />
                  </Grid>
              </Grid>
            </div>
            </div>
            <Sequence></Sequence>

            <Health></Health>
          </Grid>

          <Grid item xs={12} md={6}>
            <Events></Events>
              <br></br>
              <br></br>
              <Thoughts></Thoughts>
              <Connections></Connections>

          </Grid>
        </Grid>

  );
}

export default App;

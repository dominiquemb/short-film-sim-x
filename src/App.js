import logo from "./logo.svg";
import "./App.css";
import Grid from '@mui/material/Grid';
import Health from "./components/Health.js";
import Events from "./components/Events.js";
import Sequence from "./components/Sequence.js";
import Connections from "./components/Connections.js";
import Thoughts from "./components/Thoughts.js";
function App() {
  return (
        <Grid container  style={{width:"80%",margin:"auto",marginTop:"5vw"}} >
          <Grid item xs={12} md={6}>
            <div style={{width:"75%",margin:"auto",position:"relative"}}>
              <video  style={{width:"100%" }}  loop muted autoPlay >
                <source src={require("./assets/human.mp4")} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

            <div id = "video-button-column" style={{position:"absolute",right:0,top:"20%",width:"15%",height:"50%",right:"5%"}} >
              <Grid container >
                  <Grid item xs={12} >
                    <img src={require("./assets/rotation.png")} style={{width:"100%",borderRadius:"20px"}} />
                  </Grid>
                  <Grid item xs={12} >
                    <img src={require("./assets/hand.png")} style={{width:"100%",borderRadius:"20px"}} />
                  </Grid>
                  <Grid item xs={12} >
                    <img src={require("./assets/plus.png")} style={{width:"100%",borderRadius:"20px"}} />
                  </Grid>
                  <Grid item xs={12} >
                    <img src={require("./assets/minus.png")} style={{width:"100%",borderRadius:"20px"}} />
                  </Grid>
                  <Grid item xs={12} >
                    <img src={require("./assets/compass.png")} style={{width:"100%",borderRadius:"20px"}} />
                  </Grid>
                  <Grid item xs={12} >
                    <img src={require("./assets/pending.png")} style={{width:"100%",borderRadius:"20px"}} />
                  </Grid>
              </Grid>
            </div>
            </div>
            <Sequence></Sequence>


            <Connections></Connections>
            <Thoughts></Thoughts>
          </Grid>

          <Grid item xs={12} md={6}>
              <Health></Health>
              <br></br>
              <br></br>

              <Events></Events>

          </Grid>
        </Grid>

  );
}

export default App;

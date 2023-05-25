import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App bg-gradient-to-br  from-slate-900 to-zinc-950 min-h-screen">
      <div className="container mx-auto max-w-4xl min-h-screen">
        <video className="rounded border border-slate-500 min-h-[50%]" controls>
          <source src="movie.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default App;

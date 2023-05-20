import "./App.css";
import HexaColor from "./HexaColor";
import Subscribe from "./Subscribe";
import Usercard from "./Usercard";
import frontend from "./assets/frontend_technologies.png";

function App() {
  return (
    <>
      <img
        src={frontend}
        style={{
          width: "800px",
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      <Subscribe />
      <div style={{ marginTop: "10%" }}>
        <HexaColor />
        <HexaColor />
        <HexaColor />
      </div>
      <div style={{ marginTop: "10%" }}>
        <Usercard />
      </div>
    </>
  );
}

export default App;

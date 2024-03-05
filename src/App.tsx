import srcImg from "./assets/uniti-per-sperone.jpeg";
import "./App.css";

function App() {
  return (
    <>
      <img src={srcImg} alt="" style={{ width: "400px", height: "400px" }} />
      <h1>Giorgio Sancarlo</h1>

      <p className="read-the-docs">
        Puoi togliere il ragazzo dallo Sperone ma non puoi togliere lo Sperone
        dal ragazzo.
      </p>
    </>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import SmartContracts from "./SmartContractInterface/SmartContracts";
import Grid from "./Grid.js";

function App() {
  return (
    <div className="App">
      <Grid>
        <SmartContracts />
      </Grid>
    </div>
  );
}

export default App;

import './App.css';
import BarChart from './BarChart/BarChart';
import Scatterplot from './Scatterplot/Scatterplot';

function App() {
  return (
    <div className="App">
      <h1>D3 Charts Demo</h1>
      <h2>Scatterplot Chart</h2>
      {/* <Scatterplot /> */}

      <h2>Bar Chart</h2>
      <BarChart/>
    </div>
  );
}

export default App;

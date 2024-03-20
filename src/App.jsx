import "./App.css";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import Header from "./components/Header/Header";
import LineChart from "./components/LineChart/LineChart";
import Navbar from "./components/Navbar/Navbar";
import Phones from "./components/Phones/Phones";
import PieChart from "./components/PieChart/PieChart";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <DaisyNav></DaisyNav>
      <Navbar></Navbar>
      <Header></Header>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
      <PieChart></PieChart>
    </>
  );
}

export default App;

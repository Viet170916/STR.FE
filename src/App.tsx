import { Route, Routes  } from "react-router-dom";
import './App.css';
import FilterBar from "./Components/FilterBar";
import FrameDropDown from "./Components/FilterDropDown/LocationFilter";
import Home from "./Layouts/Home";

function App(){
  // console.log(useLocation());
  return (
    <>
      <Routes>
        <Route path = {"/*"} element = { <Home /> } />
      </Routes>


    </>
  );
}
export default App;

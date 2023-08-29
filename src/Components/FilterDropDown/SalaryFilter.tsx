import { JSX } from "react";
import Slider from "../Inputs/SliderInput";
import "./FilterDropDown.scss";

interface IProps{
}
function SalaryFilter( props: IProps ): JSX.Element{
  return (
    <div className = { "frame-drop" }>
      <Slider
        getData = { () => {} }
      />
    </div>
  );
}
export default SalaryFilter;

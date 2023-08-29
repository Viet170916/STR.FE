import { JSX } from "react";
import Slider from "../Inputs/SliderInput";
import "./FilterDropDown.scss";

interface IProps{
}
function SalaryFilter( props: IProps ): JSX.Element{
  return (
    <div className = { "frame-drop" }>
      <Slider
        rangeConfiguration = { {
          step: 100,
          range: [ 0, 10000 ],
        } }
        getData = { () => {} }
        label = { [ () => "$", () => "$" ] }
      />
    </div>
  );
}
export default SalaryFilter;

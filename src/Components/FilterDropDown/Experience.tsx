import { JSX } from "react";
import SliderInput from "../Inputs/SliderInput";
import "./FilterDropDown.scss";

interface IProps{
}
function Experience( props: IProps ): JSX.Element{
  return (
    <div className = { "frame-drop" }>
      <SliderInput
        rangeConfiguration = { {
          step: 1,
          range: [ 0, 10 ],
        } }
        getData = { () => {} }
        label =
          {
            [ ( value ) => "(" + (value <= 1 ? ("Fresher") : ((value <= 3) ? ("Junior") : ((value <= 5) ? "Middle" : "Senior"))) + ")",
              ( value ) => "(" + (value <= 1 ? ("Fresher") : ((value <= 3) ? ("Junior") : ((value <= 5) ? "Middle" : "Senior"))) + ")" ]
          }
      />
    </div>
  );
}
export default Experience;

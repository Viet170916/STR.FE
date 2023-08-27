import "./FrameDropDown.scss";
import { JSX } from "react";
import { useLocation } from "../../Common/Hooks/LocationHook";
import { Location } from "../../Models/Location";
import SearchBar_Hint from "../SearchBar_Hint";

interface IProps{
}
function FrameDropDown( props: IProps ): JSX.Element{
  const {status, getLocation} = useLocation();

  return (
    <div className={"frame-drop"}>

        <SearchBar_Hint placeholder={"type your location"} baseHintUrl={""} endPoint={""}/>
        <div className={"get-current-location"} onClick={
          ()=>{
            console.log(getLocation());
          }
        }>Get your location</div>
    </div>
  );
}
export default FrameDropDown;

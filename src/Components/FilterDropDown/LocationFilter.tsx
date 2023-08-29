import { JSX } from "react";
import { useLocation } from "../../Common/Hooks/LocationHook";
import SearchBar_Hint from "../SearchBar_Hint";
import "./FilterDropDown.scss"

interface IProps{
}
function LocationFilter( props: IProps ): JSX.Element{
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
export default LocationFilter;

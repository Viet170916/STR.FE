import { Link } from "react-router-dom";
import "./NavigatorBar.scss";
import { JSX } from "react";

interface IProps {
 selected: string;
}

function NavigatorBar(props: IProps): JSX.Element {
  const { selected } = props;
  return (
    <div className="navigator-bar">
      <Link to={"#"} className={selected==="home"?"selected":""}>Home</Link>
      <Link to={"#"} className={selected==="jobs"?"selected":""}>IT Jobs</Link>
      <Link to={"#"} className={selected==="companies"?"selected":""}>IT Companies</Link>
      <Link to={"#"} className={selected==="uploadCV"?"selected":""}>Upload CV</Link>
      <Link to={"#"} className={selected==="home"?"selected":""}>Upload CV</Link>
      <Link to={"#"} className="selected">Upload CV</Link>
    </div>
  );
}

export default NavigatorBar;

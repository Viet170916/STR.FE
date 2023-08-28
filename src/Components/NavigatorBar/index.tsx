import { Link } from "react-router-dom";
import "./NavigatorBar.scss";
import { JSX } from "react";

interface IProps {}

function NavigatorBar(props: IProps): JSX.Element {
  return (
    <div className="navigator-bar">
      <Link to={"#"}>Home</Link>
      <Link to={"#"}>IT Jobs</Link>
      <Link to={"#"}>IT Companies</Link>
      <Link to={"#"}>Upload CV</Link>
      <Link to={"#"}>Upload CV</Link>
      <Link to={"#"}>Upload CV</Link>
    </div>
  );
}

export default NavigatorBar;

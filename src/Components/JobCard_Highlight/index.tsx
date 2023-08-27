import { JSX } from "react";
import "./JobCard_Highlight.scss";

interface IJobCardProps{
  jobImg: string;
  jobTitle: string;
  companyName: string;
  numberOfCandidate: number;
  sum: string;
}
function JobCard_Highlight( props: IJobCardProps ): JSX.Element{
  return (
    <div className="job-cell">
      <div className="job-img">
        <img src={ props.jobImg } alt="" className="job-photo"/>
      </div>
      <div className="job-content">
        <div className="job-title">{ props.jobTitle }</div>
        <div className="job-author">{ props.companyName }</div>
        <div className="rate">
          <span className="job-voters candidates">{ props.numberOfCandidate } candidates</span>
        </div>
        <div className="job-sum">{ props.sum }
        </div>
        <div className="job-see job-blue">Apply now</div>
      </div>
    </div>
  );
}
export default JobCard_Highlight;

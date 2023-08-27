import { JSX } from "react";
import "./JobCard_Normal.scss";

interface IProps{
  jobId: string;
  imgUrl:string;
  numberOfEmployee: number;
  jobName: string;
  companyName: string;
  summary: string;
  followers: {avatarUrl:string}[];
}
function JobCard_Normal( props: IProps ): JSX.Element{
  return (
    <div className="job-card">
      <div className="content-wrapper">
        <img src={props.imgUrl} alt="" className="job-card-img"/>
        <div className="card-content">
          <div className="job-name">{ props.jobName }</div>
          <div className="job-by">{ props.companyName }</div>
          <div className="rate">
            <span className="job-voters card-vote">{ props.numberOfEmployee } employees</span>
          </div>
          <div className="job-sum card-sum">{ props.summary }
          </div>
        </div>
      </div>
      <div className="likes">
        { props.followers.map(
          ( follower, index ) => {
            if( index===3 ){return null}
            return (
              <div className="like-profile">
                <img src={follower.avatarUrl || "/avatarUnknownUser.pnj"} alt="" className="like-img"/>
              </div>
            );
          } )
        }
        <div className="like-name">
          {props.followers.length>3?<>and <span>{props.followers.length-3} others</span> like this</>:<></>} </div>
      </div>
    </div>
  );
}
export default JobCard_Normal;

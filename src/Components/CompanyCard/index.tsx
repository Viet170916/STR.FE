import { Link } from "react-router-dom";
import "./CompanyCard.scss";

interface IProps {
  companyName: string;
  image: string;
  location: string;
  workingField: string;
  companyURL: string;
  isFollowed: boolean;
}

const CompanyCard: React.FC<IProps> = ({
  image,
  companyName,
  location,
  workingField,
  companyURL,
  isFollowed,
}) => {

  image="https://images-na.ssl-images-amazon.com/images/I/71PL7BiZ5NL.jpg";

  return (
    <Link to={companyURL} className="single-company-card">
      <div className="content-wrapper">
        <img
          src={image}
          alt=""
          className="company-card-img"
        />
        <div className="card-content">
          <div className="company-name">
            FPT Software
            {companyName}
          </div>
          <div className="location">
            Ha Noi
            {location}
          </div>
          <div className="card-sum">
            Readers of all ages and walks of life have drawn inspiration and
            empowerment from Elizabeth Gilbert's books for years.
          </div>
          <div className="working-field">
            Software
            {workingField}
          </div>
        </div>
      </div>
      <div className="follow-wrapper">
        <p className="follow-tag">{isFollowed ? "Followed" : "Follow"}</p>
        <p className="jobs-number">
            4 jobs
        </p>
      </div>
    </Link>
  );
};

export default CompanyCard;

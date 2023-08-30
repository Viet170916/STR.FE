import "./CompanyCard.scss";

interface IProps {
  name: string;
  backgroudImage: string;
  image: string;
  location: string;
  workingField: string;
}

const CompanyCard: React.FC<IProps> = ({
  backgroudImage,
  image,
  name,
  location,
  workingField,
}) => {
  return (
    <div className="single-company-card">
      <div className="backgroud-container">
        <img
          src={
            // backgroudImage
            "https://salt.topdev.vn/oFEy2aLFdai7lewqbewDTDpKXHyeWiLGSehpmrcw9Jk/auto/310/250/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIxLzAzLzA4L0ZQVFNvZnR3YXJlLUltYWdlLTMtd0dGa3YuSlBH/fptsoftware-image-3-wgfkv.jpg"
          }
          className="company-card-backgroud"
        />
      </div>
      <div className="image-container">
        <img
          src={
            // image
            "https://salt.topdev.vn/uypKk_Tu1e2XBwMwx2xVEWxEIqDeR2tvfMkg4QfBCno/fit/310/0/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIxLzA0LzEyL2VmMmIxNWQ0Nzg5ODJjY2ViZDk3YjE5ZDgyZDY2Y2I3LW5zd1hGLnBuZw/ef2b15d478982ccebd97b19d82d66cb7-nswxf.jpg"
          }
          className="company-card-image"
        />
      </div>
      <div className="company-card-content">
        <h3 className="company-card-name">
          {
            // name
            "FPT Software"
          }
        </h3>
        <div className="company-card-location">{location}</div>
        <div className="company-card-working-field">{workingField}</div>
      </div>
      this is a company card
    </div>
  );
};

export default CompanyCard;

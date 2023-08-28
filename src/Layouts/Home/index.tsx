import { JSX } from "react";
import { Route, Routes } from "react-router-dom";
import FilterBar from "../../Components/FilterBar";
import FrameDropDown from "../../Components/FrameDropDown";
import Header from "../../Components/Header";
import JobCard_Highlight from "../../Components/JobCard_Highlight";
import JobCard_Normal from "../../Components/JobCard_Normal";
import "./Home.scss";

interface IProps{
}
function Home( props: IProps ): JSX.Element{
  return (
    <div className = { "home" }>
      <Header
        userImgUrl = { "https://randomuser.me/api/portraits/women/63.jpg" }
        slogan = { "readBook" }
        placeholderSearchBar = { "search" }
      />
      <div className = { "container" }>
        <Routes>
          <Route
            path = { "/a" } element = {
            <JobCard_Highlight
              jobImg = { "https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg" }
              jobTitle = { "blabla" }
              companyName = { "Bla" }
              numberOfCandidate = { 12 }
              sum = { "Readers of all ages and walks of life have drawn inspiration and empowerment from Elizabeth Gilbert’s books for years. " }
            />
          }
          />
          <Route
            path = { "/" } element = {
            <JobCard_Normal
              jobId = { "1" }
              imgUrl = { "https://images-na.ssl-images-amazon.com/images/I/7167iiDUeAL.jpg" }
              numberOfEmployee = { 12 }
              jobName = { "bla" }
              companyName = { "bla" }
              summary = { "Readers of all ages and walks of life have drawn inspiration and empowerment from Elizabeth Gilbert’s books for years. " }
              followers = { [
                { avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" },
                { avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" },
                { avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" },
                { avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" },
              ] }
            />
          }
          />
        </Routes>
        <FilterBar />
        <FrameDropDown/>
      </div>
    </div>
  );
}
export default Home;

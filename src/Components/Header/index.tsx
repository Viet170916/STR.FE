import { ArrowDown, Stack } from "../../assets/SVG/SVGs";
import SearchBar_Hint from "../SearchBar_Hint";
import "./Header.scss";

interface IProps{
  userImgUrl: string,
  slogan: string,
  placeholderSearchBar: string,
}
function Header( headerProps: IProps ){
  return (
    <div className = "header">
      <div className = "browse">
        <div className = "browse-category">
          Navigator
          <ArrowDown />
        </div>
        {/*<label> <input type="text" placeholder={headerProps.placeholderSearchBar}/> </label>*/ }
        <SearchBar_Hint
          placeholder = { "search" }
          baseHintUrl = { "https://dummyjson.com/products" }
          hintEndPoint = { "/search" }
        />
      </div>
      <div className = "header-title"><span>{ headerProps.slogan }</span></div>
      <div className = "profile">
        <div className = "user-profile">
          <img src = { headerProps.userImgUrl } alt = "" className = "user-img" />
        </div>
        <div className = "profile-menu">
          <Stack />
          Menu
        </div>
      </div>
    </div>
  );
}
export default Header;

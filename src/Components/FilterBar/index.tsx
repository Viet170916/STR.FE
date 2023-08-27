import { JSX } from "react";
import { ArrowDown } from "../../assets/SVG/SVGs";
import "./FilterBar.scss";

interface IProps{
}
function FilterBar( props: IProps ): JSX.Element{
  return (
    <div className = "main-menu filter">
      <div className = "genre">Top</div>
      <div className = "job-types filter-bar">
        <div className = "browse-category filter-option">
          Location
          <ArrowDown />
        </div>
        <div className = "browse-category filter-option">
          Salary
          <ArrowDown />
        </div>
        <div className = "browse-category filter-option">
          Type
          <ArrowDown />
        </div>
        <div className = "browse-category filter-option">
          Work place
          <ArrowDown />
        </div>
        <div className = "browse-category filter-option">
          Exp
          <ArrowDown />
        </div>
        <div className = "browse-category filter-option">
          Post date
          <ArrowDown />
        </div>
        <div className = "browse-category filter-option">
          Sort
          <ArrowDown />
        </div>
      </div>
    </div>
  );
}
export default FilterBar;

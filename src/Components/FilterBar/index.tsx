import { JSX } from "react";
import { ArrowDown } from "../../assets/SVG/SVGs";
import { LocationFilter } from "../FilterDropDown/";
import SalaryFilter from "../FilterDropDown/SalaryFilter";
import "./FilterBar.scss";
import TypeFilter from "../FilterDropDown/TypeFilter";
import WorkPlaceFilter from "../FilterDropDown/WorkPlaceFilter";

interface IProps{
}
function FilterBar( props: IProps ): JSX.Element{
  return (
    <div className = "main-menu filter">
      <div className = "genre">Top</div>
      <div className = "job-types filter-bar">
        <div className = { "filter-option-wrap" }>
          <div className = "browse-category filter-option">
            Location
            <ArrowDown />
          </div>
          <LocationFilter />
        </div>
        <div className = { "filter-option-wrap" }>
          <div className = "browse-category filter-option">
            Salary
            <ArrowDown />

          </div>
          <SalaryFilter />

        </div>
        <div className = { "filter-option-wrap" }>
          <div className = "browse-category filter-option">
            Type
            <ArrowDown />
          </div>
          <TypeFilter/>
        </div>
        <div className = { "filter-option-wrap" }>
          <div className = "browse-category filter-option">
            Work place
            <ArrowDown />
          </div>
          <WorkPlaceFilter/>
        </div>
        <div className = { "filter-option-wrap" }>
          <div className = "browse-category filter-option">
            Exp
            <ArrowDown />
          </div>

        </div>
        <div className = { "filter-option-wrap" }>
          <div className = "browse-category filter-option">
            Post date
            <ArrowDown />
          </div>
        </div>
        <div className = { "filter-option-wrap" }>
          <div className = "browse-category filter-option">
            Sort
            <ArrowDown />
          </div>
        </div>
      </div>

    </div>
  );
}
export default FilterBar;

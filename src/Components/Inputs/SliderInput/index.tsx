import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React, { useState } from 'react';
import "./Slider.scss";

interface IProps{
  getData: Function;
}
const RangeSliderComponent: React.FC = ( props: IProps ) => {
  const [ rangeValues, setRangeValues ] = useState<number[]>( [ 10000, 30000 ] );
  const [ value1, setValue1 ] = useState<number>( 10000 );
  const [ value2, setValue2 ] = useState<number>( 30000 );
  const handleSlide = ( newValues: number[] ) => {
    props.getData(newValues);
    setValue1( newValues[0] );
    setValue2( newValues[1] );
    setRangeValues( newValues );
  };
  return (
    <div className = "slider-wrapper">
      <div className = "range">
        <span className = "range-value"><sup>$</sup>{ value1 }</span>
        <span className = "range-value"><sup>$</sup>{ value2 }</span>
      </div>
      <Slider
        className = { "ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" }
        min = { 0 }
        max = { 100000 }
        step = { 100 }
        value = { rangeValues }
        onChange = { handleSlide }
        trackStyle = { [ { height: "20px" } ] }
        range
      />
    </div>
  );
};
export default RangeSliderComponent;

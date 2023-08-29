import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React, { useState } from 'react';
import "./Slider.scss";

interface IProps{
  getData: Function;
  rangeConfiguration: {
    step: number;
    range: number[2];
  };
  label: Function[2];
}
const RangeSliderComponent: React.FC = ( props: IProps ) => {
  const [ rangeValues, setRangeValues ] = useState<number[]>( [ Math.round( (props.rangeConfiguration.range[1] - props.rangeConfiguration.range[0]) / 3 ), Math.round( ((props.rangeConfiguration.range[1] - props.rangeConfiguration.range[0]) / 3) * 2 ) ] );
  const [ value1, setValue1 ] = useState<number>( Math.round( (props.rangeConfiguration.range[1] - props.rangeConfiguration.range[0]) / 3 ) );
  const [ value2, setValue2 ] = useState<number>( Math.round( ((props.rangeConfiguration.range[1] - props.rangeConfiguration.range[0]) / 3) * 2 ) );
  const handleSlide = ( newValues: number[] ) => {
    props.getData( newValues );
    setValue1( newValues[0] );
    setValue2( newValues[1] );
    setRangeValues( newValues );
  };
  return (
    <div className = "slider-wrapper">
      <div className = "range">
        <span className = "range-value"><sup>{ props.label[0]( value1 ) }</sup>{ value1 }</span>
        <span className = "range-value"><sup>{ props.label[1]( value2 ) }</sup>{ value2 === props.rangeConfiguration.range[1] ? value2 + "+" : value2 }</span>
      </div>
      <Slider
        className = { "ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" }
        min = { props.rangeConfiguration.range[0] }
        max = { props.rangeConfiguration.range[1] }
        step = { props.rangeConfiguration.step }
        value = { rangeValues }
        onChange = { handleSlide }
        trackStyle = { [ { height: "20px" } ] }
        range
      />
    </div>
  );
};
export default RangeSliderComponent;

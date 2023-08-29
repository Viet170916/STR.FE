import axios from "axios";
import { JSX, useState } from "react";
import { useClickOutsideElement } from "../../../Common/Hooks/EventHook";
import "./Select.scss";

interface IProps{
  baseUrl_option: string;
  endpoint_option: string;
  getData: Function;
}
function index( props: IProps ): JSX.Element{
  const [ chosenOption, setChosenOption ] = useState<>( {
    id: "",
    title: "",
  } );
  const [ options, setOptions ] = useState<[]>( [] );
  const targetRef = useClickOutsideElement( () => {setOptions( [] );} );
  const clickSelect = () => {
    (async() => {
      const data = await axios.get( props.endpoint_option, {
        baseURL: props.baseUrl_option,
      } );
      setOptions( data.data );
    })();
  };
  return (
    <div className = { "select" } ref = { targetRef }>
      <div
        className = { "value" } onClick = { clickSelect }
      >
            <span>
              { chosenOption.title || chosenOption?.name }
            </span>
      </div>
      <div className = { "options-list" }>
        <ul>
          {
            options.map( ( option, index ) => {
                return (
                  <li key = { option?.id }>
                <span
                  onClick = {
                    () => {
                      setChosenOption( option );
                      props.getData( option );
                      console.log( option );
                      setOptions( [] );
                    }
                  }
                >
                { option.title || option?.name }
                </span>
                  </li>);
              },
            )
          }
        </ul>
      </div>
    </div>
  );
}
export default index;

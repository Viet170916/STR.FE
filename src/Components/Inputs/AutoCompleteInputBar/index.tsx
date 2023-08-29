import axios from "axios";
import React, { ChangeEvent, JSX, useEffect, useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { useClickOutsideElement } from "../../../Common/Hooks/EventHook";
import "../../SearchBar_Hint/SearchBar_Hint.scss";
import "./AutoComplete.scss";

interface IProps{
  hintEndPoint: string;
  baseHintUrl: string;
  searchPlaceholder: string;
  params: string;
  getData:Function;
}
function index( props: IProps ): JSX.Element{
  const [ hints, setHints ] = useState( [] );
  const [ textSearch, setTextSearch ] = useState<string>( "" );
  const [ typeList, setTypeList ] = useState<string[]>( [] );
  //click outside <ul> handler
  const clickOut_Target = useClickOutsideElement( () => {
      setHints( [] );
    },
  );
  //fetch data:
  useEffect( () => {
    (async() => {
      const data = await axios.get( props.hintEndPoint, {
        baseURL: props.baseHintUrl,
        params: { [props.params]: textSearch },
      } );
      setHints( textSearch ? data.data : [] );
    })();
  }, [ textSearch ] );
  useEffect(()=>{
    props.getData(typeList);
  },[typeList]);
  return (
    <div className = { "search-bar " }>
      <div className = { "options" }>
        { typeList.map( ( type, index ) => {
          return (
            <div key = { index } className = { "type-option" }>
              <p>
                { type }
              </p>
              <button className={"delete-option"} onClick={()=>{setTypeList(typeList.filter((oldType)=>oldType!==type))}}><CiCircleRemove/></button>
            </div>);
        } ) }
      </div>
      <div className = { "search-area" }>
        <input
          type = "text"
          placeholder = { props.searchPlaceholder||"search" }
          value = { textSearch }
          onChange = { ( event: ChangeEvent<HTMLInputElement> ) => {setTextSearch( event.target.value );} }
        />
      </div>
      <div className = { "hint-list" }>
        <ul ref = { clickOut_Target }>
          { hints.map(
            ( hint, index ) =>
              (<li key = { index }>
                <div
                  className = { "option" }
                  onClick = { () => {
                    setHints( [] );
                    setTypeList( [ ...typeList, hint.title || hint?.name ] );
                    setTextSearch( "" );
                  } }
                >{ hint.title || hint?.name }
                </div>
              </li>) ) }
        </ul>
      </div>
    </div>
  );
}
export default index;

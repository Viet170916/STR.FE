import axios from "axios";
import React, { ChangeEvent, FormEvent, JSX, useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./SearchBar_Hint.scss";

interface ISearchBarProps{
  placeholder: string;
  baseHintUrl: string;
  hintEndPoint: string;
  className: string;
  requestFunction: Function;
  searchIcon: JSX.Element;
}
function SearchBar_Hint( searchBarProps: ISearchBarProps ): JSX.Element{
  const listElement = useRef( null );
  const [ hints, setHints ] = useState( [] );
  const [ textSearch, setTextSearch ] = useState( "" );
  //click outside <ul> handler
  useEffect( () => {
      const handleClickOutside = ( event: MouseEvent ) => {
        if( listElement.current && !listElement.current.contains( event.target as Node ) ){
          setHints( [] );
        }
      };
      document.addEventListener( "mousedown", handleClickOutside );
      return () => {
        document.removeEventListener( 'mousedown', handleClickOutside );
      };
    },
    [] );
  //fetch data:
  useEffect( () => {
    (async() => {
      const data = await axios.get( searchBarProps.hintEndPoint, {
        baseURL: searchBarProps.baseHintUrl,
        params: { q: textSearch },
      } );
      setHints( textSearch ? data.data : [] );
    })();
  }, [ textSearch ] );
  //return
  return (
    <form
      onSubmit = {
        ( event: FormEvent<HTMLFormElement> ) => {
          event.preventDefault();
          searchBarProps.requestFunction?.( event );
        }
      }
    >
      <div className = { "search-bar " + searchBarProps.className }>
        <div className = { "search-area" }>
          <input
            type = "text"
            placeholder = { searchBarProps.placeholder }
            value = { textSearch }
            onChange = { ( event: ChangeEvent<HTMLInputElement> ) => {setTextSearch( event.target.value );} }
          />
          <button>
            { searchBarProps.searchIcon || <BsSearch /> }
          </button>
        </div>
        <div className = { "hint-list" }>
          <ul ref = { listElement }>
            { hints.map(
              ( hint, index ) =>
                (<li key = { index }>
                  <div
                    className = { "option" }
                    onClick = { () => {
                      setHints( [] );
                      setTextSearch( hint );
                    } }
                  >{ hint }
                  </div>
                </li>) ) }
          </ul>
        </div>
      </div>
    </form>
  );
}
export default SearchBar_Hint;

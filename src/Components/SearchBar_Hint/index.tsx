import axios from "axios";
import React, { ChangeEvent, JSX, useEffect, useRef, useState } from "react";
import "./SearchBar_Hint.scss";

interface ISearchBarProps{
  placeholder: string;
  baseHintUrl: string;
  endPoint: string;
}

function SearchBar_Hint( searchBarProps: ISearchBarProps ): JSX.Element{
  const listElement = useRef( null );
  const [ hints, setHints ] = useState( [] );
  const [ textSearch, setTextSearch ] = useState( "" );
  //click outside <ul> handler
  useEffect( () => {
      const handleClickOutside = ( event: MouseEvent ) => {
        if( listElement.current && !listElement.current.contains( event.target as Node ) ){
          console.log( 'Clicked outside the target element.' );
          setHints( [] );
          // Thêm mã lệnh của bạn ở đây
        }
      };
      document.addEventListener("mousedown",handleClickOutside) ;
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };

    },
    [] );
  //fetch data:
  useEffect( () => {
    (async() => {
      const data = await axios.get( searchBarProps.endPoint, {
        baseURL: searchBarProps.baseHintUrl,
        params: { q: textSearch },
      } );
      setHints( textSearch ? data.data.products : [] );
    })();
  }, [ textSearch ] );
  //return
  return (
    <div>
      <input
        type="text"
        placeholder={ searchBarProps.placeholder }
        value={ textSearch }
        onChange={ ( event: ChangeEvent<HTMLInputElement> ) => {setTextSearch( event.target.value );} }
      />
      <div className={ "hint-list" }>
        <ul ref={ listElement }>
          { hints.map(
            ( hint, index ) =>
              (<li key={ index }>
                <div
                  className={ "option" }
                  onClick={ () => {
                    setHints( [] );
                    setTextSearch( hint?.title );
                  } }>{ hint.title }
                </div>
              </li>) ) }
        </ul>
      </div>
    </div>
  );
}
export default SearchBar_Hint;

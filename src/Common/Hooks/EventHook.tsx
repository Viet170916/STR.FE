import { useEffect, useRef } from "react";

export function useClickOutsideElement( outSideClickHandler: Function ){
  const listElement = useRef( null );
  useEffect( () => {
      const clickOut =
        ( event: MouseEvent ) => {
          if( listElement.current && !listElement.current.contains( event.target as Node ) ){
            outSideClickHandler( event );
          }
        };
      document.addEventListener( "mousedown", clickOut );
      return () => {
        document.removeEventListener( 'mousedown', clickOut );
      };
    },
    [] );
  return listElement;
}

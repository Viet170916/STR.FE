import axios from "axios";
import { useEffect, useState } from "react";
import { usePosition } from 'use-position';
import { Location } from "../../Models/Location";

export function useCoordinates( isInRealTime: boolean = false ){
  const {
    latitude,
    longitude,
    error,
  } = usePosition( isInRealTime );
  if( error ){
    return error;
  }
  return (
    latitude && longitude ? {
      latitude: latitude.toFixed( 6 ),
      longitude: longitude.toFixed( 6 ),
    } : {
      status: "Loading...",
    }
  );
}
export function useLocation( isInRealTime: boolean = true ){
  const [ location, setLocation ] = useState<Location>( new Location() );
  const {
    latitude,
    longitude,
    error,
  } = usePosition( isInRealTime );
  function getLocation(){
    (async() => {
      if( latitude && longitude ){
        const data = await axios.get( `/reverse`, {
          baseURL: "https://nominatim.openstreetmap.org",
          params: {
            format: "json",
            lat: latitude,
            lon: longitude,
            zoom: 18,
            addressdetails: 1,
          },
        } );
        setLocation( data.data );
      }
    })();
    return location;
  }
  useEffect( () => {
    getLocation();
  }, [latitude] );
  if( error ){
    return { error: error.toString() };
  }
  return (
    latitude !== undefined && longitude !== undefined ?
      {
        status: "done",
        getLocation: getLocation,
      }
      :
      { status: "loading" }
  );
}


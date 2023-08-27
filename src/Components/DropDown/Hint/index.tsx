// import "./Hint.scss";
// import axios from "axios";
// import React, { JSX, useEffect, useState } from "react";
//
// interface IProps{
//
// }
// function index( props: IProps ): JSX.Element{
//     const [ hints, setHints ] = useState( [] );
//
//     useEffect( () => {
//         (async() => {
//             const data = await axios.get( searchBarProps.hintEndPoint, {
//                 baseURL: searchBarProps.baseHintUrl,
//                 params: { q: textSearch },
//             } );
//             setHints( textSearch ? data.data : [] );
//         })();
//     }, [ textSearch ] );
//   return (
//     <div className = { "hint-list" }>
//         <ul ref = { listElement }>
//             { hints.map(
//               ( hint, index ) =>
//                 (<li key = { index }>
//                     <div
//                       className = { "option" }
//                       onClick = { () => {
//                           setHints( [] );
//                           setTextSearch( hint );
//                       } }
//                     >{ hint }
//                     </div>
//                 </li>) ) }
//         </ul>
//     </div>
//
//   );
// }
// export default index;

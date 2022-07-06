import React, { useContext } from "react";
import AuthContext from "../../contextAPI/auth-context";

import classes from "./Navigation.module.css";

// - consuming using useContext hook
const Navigation = (props) => {
  const context = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {context.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            {/* <button onClick={props.onLogout}>Logout</button> */}
            <button onClick={context.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};
// - consuming using consumer component
// const Navigation = (props) => {
//   return (
//     <AuthContext.Consumer>
//       {(context) => {
//         return (
//           <nav className={classes.nav}>
//             <ul>
//               {context.isLoggedIn && (
//                 <li>
//                   <a href="/">Users</a>
//                 </li>
//               )}
//               {context.isLoggedIn && (
//                 <li>
//                   <a href="/">Admin</a>
//                 </li>
//               )}
//               {context.isLoggedIn && (
//                 <li>
//                 // <button onClick={props.onLogout}>Logout</button>
//                   <button onClick={context.onLogout}>Logout</button>
//                 </li>
//               )}
//             </ul>
//           </nav>
//         );
//       }}
//     </AuthContext.Consumer>
//   );
// };

//  consuming using props drilling
// const Navigation = (props) => {
//   console.log(props.isLoggedIn);
//   return (
//     <nav className={classes.nav}>
//       <ul>
//         {props.isLoggedIn && (
//           <li>
//             <a href="/">Users</a>
//           </li>
//         )}
//         {props.isLoggedIn && (
//           <li>
//             <a href="/">Admin</a>
//           </li>
//         )}
//         {props.isLoggedIn && (
//           <li>
//             <button onClick={props.onLogout}>Logout</button>
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// };

export default Navigation;

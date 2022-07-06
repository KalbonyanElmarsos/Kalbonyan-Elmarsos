import React, { useState, useEffect, useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./contextAPI/auth-context";

function App() {
  const context = useContext(AuthContext);
  return (
    <>
      <MainHeader />

      <main>
        {!context.isLoggedIn && <Login />}
        {context.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;

// import React, { useState, useEffect } from "react";

// import Login from "./components/Login/Login";
// import Home from "./components/Home/Home";
// import MainHeader from "./components/MainHeader/MainHeader";
// import AuthContext from "./contextAPI/auth-context";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // -This will lead to unlimited render
//   // const data = localStorage.getItem("isLoggedIn");
//   // if (data === "1") {
//   //   setIsLoggedIn(true);
//   // }

//   const loginHandler = (email, password) => {
//     // We should of course check email and password
//     // But it's just a dummy/ demo anyways
//     setIsLoggedIn(true);
//     localStorage.setItem("isLoggedIn", "1");
//   };

//   const logoutHandler = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem("isLoggedIn");
//   };
//   useEffect(() => {
//     const data = localStorage.getItem("isLoggedIn");
//     if (data === "1") {
//       setIsLoggedIn(true);
//     }
//   }, []);
//   return (
//     <AuthContext.Provider
//       value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}
//     >
//       {/* <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} /> */}
//       <MainHeader />
//       <main>
//         {!isLoggedIn && <Login onLogin={loginHandler} />}
//         {isLoggedIn && <Home onLogout={logoutHandler} />}
//       </main>
//     </AuthContext.Provider>
//   );
// }

// export default App;

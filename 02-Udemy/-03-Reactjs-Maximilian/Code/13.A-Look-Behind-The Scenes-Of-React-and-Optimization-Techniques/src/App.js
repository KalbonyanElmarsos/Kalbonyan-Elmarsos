import UserFinder from "./components/userFinder/UserFinder";
import Users from "./components/Users";
import UserContext from "./contextAPI/users-context";

function App() {
  const DUMMY_USERS = [
    { id: "u1", name: "Max" },
    { id: "u2", name: "Manuel" },
    { id: "u3", name: "Julie" },
  ];
  const usersContext = {
    users: DUMMY_USERS,
  };
  return (
    <UserContext.Provider value={usersContext}>
      <UserFinder />
    </UserContext.Provider>
  );
}

export default App;

// import UserFinder from "./components/userFinder/UserFinder";
// import Users from "./components/Users";

// function App() {
//   return (
//     <div>
//       <UserFinder />
//     </div>
//   );
// }

// export default App;

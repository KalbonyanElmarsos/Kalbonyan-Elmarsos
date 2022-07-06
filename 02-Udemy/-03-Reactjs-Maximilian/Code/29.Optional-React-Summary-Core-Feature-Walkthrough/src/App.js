import { Route, Switch } from "react-router-dom";
import Layout from "./components/layouts/layout/Layout.jsx";
import AllMeetups from "./pages/allMeetups/AllMeetups.jsx";
import Favorites from "./pages/favorites/Favorites.jsx";
import NewMeetups from "./pages/newMeetup/NewMeetups.jsx";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/new-meetups">
          <NewMeetups />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

// import Backdrop from "./components/backdrop/Backdrop";
// import Modal from "./components/modal/Modal";
// import Todos from "./components/todos.js/Todos";

// function App() {
//   return (
//     <>
//       <Todos text="hello" />
//       <Todos text="goo Evening" />
//       <Todos text="goo morning" />
//       {/* <Backdrop /> */}
//       {/* <Modal /> */}
//     </>
//   );
// }

// export default App;

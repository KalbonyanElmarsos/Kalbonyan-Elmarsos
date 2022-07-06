import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";

import { useSelector } from "react-redux";

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <>
      <Header />
      {isAuthenticated && <UserProfile />}
      {!isAuthenticated && <Auth />}
      <Counter />
    </>
  );
}

export default App;

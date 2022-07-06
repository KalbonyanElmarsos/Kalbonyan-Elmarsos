import { Redirect, Route, Router, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import ProductDetails from "./components/productDetails/ProductDetails";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
      <Header />
      <main>
        {/* {"Switch Responsible about rendering only one route not all matched routes "} */}
        <Switch>
          {/* <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
   */}
          {/* do not forget using exact  to prevent any errors */}
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          {/* Render this route only if the all Path matched */}
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;

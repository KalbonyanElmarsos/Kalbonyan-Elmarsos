import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import WrapperLayout from "./components/layout/wrapper/WrapperLayout";
// import NewQuote from "./pages/newQuote/NewQuote";
// import NOtFound from "./pages/NOtFound";
// import SingleQuote from "./pages/singleQuote/SingleQuote";
// import Quotes from "./pages/quotes/Quotes";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const Quotes = React.lazy(() => import("./pages/quotes/Quotes"));
const SingleQuote = React.lazy(() => import("./pages/singleQuote/SingleQuote"));
const NOtFound = React.lazy(() => import("./pages/NOtFound"));
const NewQuote = React.lazy(() => import("./pages/newQuote/NewQuote"));

function App() {
  return (
    <WrapperLayout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        {/* switch means render only one page at a time  */}
        <Switch>
          {/* Redirection route  */}
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <Quotes />
          </Route>
          <Route path="/quotes/:id">
            <SingleQuote />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          {/* his route must be he last one */}
          <Route path="*">
            <NOtFound />
          </Route>
        </Switch>
      </Suspense>
    </WrapperLayout>
  );
}

export default App;

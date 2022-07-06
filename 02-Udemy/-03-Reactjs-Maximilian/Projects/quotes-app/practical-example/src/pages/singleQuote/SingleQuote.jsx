import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import React, { useEffect } from "react";
import Comments from "../../components/comments/Comments";
import HighlightedQuote from "../../components/quotes/HighlightedQuote";
import useHttp from "../../hooks/use-http";
import { getSingleQuote } from "../../lib/api";
import LoadingSpinner from "../../components/UI/LoadingSpinner";

const DUMMY_QUOTES = [
  { id: "q1", author: "ali", text: "All things ok and i well go to club" },
  { id: "q2", author: "hend", text: "i will waiting you , have a fun day" },
];

export default function SingleQuote() {
  const {
    sendRequest,
    data: fetchedQuote,
    error,
    status,
  } = useHttp(getSingleQuote, true);
  const params = useParams();

  const routeParams = useRouteMatch();

  // console.log(routeParams);
  //   isExact: false
  // params: {id: 'q1'}
  // path: "/quotes/:id"
  // url: "/quotes/q1"

  useEffect(() => {
    sendRequest(params.id);
  }, [sendRequest]);

  // const quote = DUMMY_QUOTES.find((item) => item.id === params.id);

  //
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (!fetchedQuote.text) {
    return <h2>No quotes by this id</h2>;
  }
  if (error) {
    return <p className="centered focused"> {error}</p>;
  }
  return (
    <>
      <HighlightedQuote text={fetchedQuote.text} author={fetchedQuote.author} />
      {/* to hide button when clicked */}
      <Route path={routeParams.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${routeParams.url}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>
      {/* <div className="centered">
        <Link className="btn--flat" to={`${routeParams.path}/comments`}>
          Load comments
        </Link>
      </div> */}
      <Route path={`${routeParams.path}/comments`}>
        <Comments />
      </Route>
      {/* <Route to="/quotes/:id/comments">
        <Comments />
      </Route> */}
    </>
  );
}

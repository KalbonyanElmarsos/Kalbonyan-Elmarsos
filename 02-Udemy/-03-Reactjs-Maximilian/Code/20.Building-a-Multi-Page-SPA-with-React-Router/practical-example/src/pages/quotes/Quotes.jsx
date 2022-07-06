import React, { useEffect } from "react";
import NoQuotesFound from "../../components/quotes/NoQuotesFound";
import QuoteList from "../../components/quotes/QuoteList";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import useHttp from "../../hooks/use-http";
import { getAllQuotes } from "../../lib/api";

const DUMMY_QUOTES = [
  { id: "q1", author: "ali", text: "All things ok and i well go to club" },
  { id: "q2", author: "hend", text: "i will waiting you , have a fun day" },
];
export default function Quotes() {
  const {
    sendRequest,
    status,
    data: quotesDB,
    error,
  } = useHttp(getAllQuotes, true);

  // console.log();
  // console.log(DUMMY_QUOTES);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered focused"> {error}</p>;
  }

  if (status === "completed" && (!quotesDB || quotesDB.length === 0)) {
    return <NoQuotesFound />;
  }

  return <QuoteList quotes={quotesDB} />;
  // return <QuoteList quotes={DUMMY_QUOTES} />;
}

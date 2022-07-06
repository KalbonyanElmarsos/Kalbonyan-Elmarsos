import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import useHttp from "../../hooks/use-http.js";
import { addQuote } from "../../lib/api.js";
import QuoteForm from "../../components/quotes/QuoteForm";

export default function NewQuote() {
  const history = useHistory();

  const { sendRequest, status } = useHttp(addQuote, false);

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [history, status]);

  const addQuoteHandler = (quote) => {
    sendRequest(quote);

    //  add another page to the stack(we can navigate back to the prevoius page)

    //  replace the current page from the stack (we can not navigate back to the same page)
    // history.replace('/quotes')
  };
  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
}

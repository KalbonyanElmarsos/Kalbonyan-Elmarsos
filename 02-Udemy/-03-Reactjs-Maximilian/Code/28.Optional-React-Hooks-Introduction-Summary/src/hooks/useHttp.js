import { useCallback, useReducer } from "react";
const initialState = {
  loading: false,
  error: null,
  data: null,
  reqExtra: null,
  identifer: null,
  clear: null,
};
const httpReducer = (prevState, action) => {
  switch (action.type) {
    case "SEND":
      return {
        ...prevState,
        loading: true,
        error: null,
        reqExtra: null,
        identifer: action.payload.identifer,
      };
    case "RESPONSE":
      return {
        ...prevState,
        loading: false,
        data: action.payload.data,
        reqExtra: action.payload.reqExtra,
      };
    case "ERROR":
      return { ...prevState, loading: false, error: action.payload };
    case "CLEAR":
      return initialState;
    default:
      return "something wrong in httpReducer";
  }
};
const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, initialState);
  const clearHandler = useCallback(() => {
    dispatchHttp({ type: "CLEAR" });
  }, []);
  const sendRequest = useCallback(
    (url, method, body = null, reqExtra, identifer) => {
      dispatchHttp({ type: "SEND", payload: { identifer: identifer } });
      fetch(url, {
        method: method,
        body: body ? JSON.stringify(body) : null,
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((resJSON) => {
          dispatchHttp({
            type: "RESPONSE",
            payload: { data: resJSON, reqExtra: reqExtra },
          });
        })
        .catch((err) => {
          dispatchHttp({ type: "ERROR", payload: err.message });
        });
    },
    []
  );

  return {
    sendRequest: sendRequest,
    isLoading: httpState.loading,
    error: httpState.error,
    data: httpState.data,
    identifer: httpState.identifer,
    reqExtra: httpState.reqExtra,
    clear: clearHandler,
  };
};

export default useHttp;

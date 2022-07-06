import { useState, useCallback } from "react";

// const useRequest = ({ URL, method, headers, body }, dataConsumerFunc) => {
const useRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const AJAXRequest = () => {
  const AJAXRequest = useCallback(
    async ({ URL, method, headers, body }, dataConsumerFunc) => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(URL, {
          method: method ? method : "GET",
          body: body ? JSON.stringify(body) : null,
          headers: headers ? headers : {},
        });

        if (!res.ok) {
          throw new Error("Request failed!");
        }

        const resJSON = await res.json();
        dataConsumerFunc(resJSON);
        // return resJSON;
      } catch (err) {
        setError(err.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    []
  );
  return { isLoading, error, AJAXRequest };
};
export default useRequest;

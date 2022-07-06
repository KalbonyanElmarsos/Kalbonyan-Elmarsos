// ___________useing Custom hooks____________

import React, { useState, useEffect, useRef } from "react";

import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import useHttp from "../../hooks/useHttp.js";
import "./Search.css";

const Search = React.memo((props) => {
  const { onLoadedIngredients } = props;
  const [enteredFilter, setEnteredFilter] = useState("");
  const inputRef = useRef();
  const { isLoading, data, error, sendRequest, clear } = useHttp();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        const query =
          enteredFilter.length === 0
            ? ""
            : `?orderBy="title"&equalTo="${enteredFilter}"`;
        sendRequest(
          "https://react-demo-37e14-default-rtdb.firebaseio.com/Ingredients.json" +
            query,
          "GET"
        );
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, inputRef, sendRequest]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      const loadedIngredients = [];
      for (const key in data) {
        loadedIngredients.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount,
        });
      }
      onLoadedIngredients(loadedIngredients);
    }
  }, [data, isLoading, error, onLoadedIngredients]);

  return (
    <section className="search">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          {isLoading && <span>Loading...</span>}
          <input
            ref={inputRef}
            type="text"
            value={enteredFilter}
            onChange={(event) => setEnteredFilter(event.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;

// ______________________________________________________
// import React, { useEffect, useState } from "react";

// import Card from "../UI/Card";
// import "./Search.css";

// const Search = React.memo((props) => {
//   const { onLoadedIngredients } = props;

//   const [filteredIngredients, setFilteredIngredients] = useState("");

//   useEffect(() => {
//     const address = setTimeout(() => {
//       let query = "";
//       if (filteredIngredients) {
//         query =
//           filteredIngredients.length === 0
//             ? ""
//             : `?orderBy="title"&equalTo="${filteredIngredients}"`;
//       }
//       fetch(
//         "https://react-demo-37e14-default-rtdb.firebaseio.com/Ingredients.json" +
//           query
//       )
//         .then((res) => res.json())
//         .then((resJSON) => {
//           const ingredientsDB = [];

//           for (const key in resJSON) {
//             ingredientsDB.push({
//               id: key,
//               title: resJSON[key].title,
//               amount: resJSON[key].amount,
//             });
//           }
//           onLoadedIngredients(ingredientsDB);
//           setFilteredIngredients();
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }, 600);

//     return () => {
//       clearTimeout(address);
//     };
//   }, [filteredIngredients, onLoadedIngredients]);
//   return (
//     <section className="search">
//       <Card>
//         <div className="search-input">
//           <label>Filter by Title</label>
//           <input
//             type="text"
//             onChange={(event) => setFilteredIngredients(event.target.value)}
//           />
//         </div>
//       </Card>
//     </section>
//   );
// });

// export default Search;

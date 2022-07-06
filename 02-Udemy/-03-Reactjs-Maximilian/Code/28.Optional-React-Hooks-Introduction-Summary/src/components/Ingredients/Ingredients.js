// ________________Custom Hook Version________________________
import React, { useCallback, useEffect, useReducer } from "react";
import useHttp from "../../hooks/useHttp";
import ErrorModal from "../UI/ErrorModal";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";

import Search from "./Search";

const reducer = (prevState, action) => {
  switch (action.type) {
    case "SET":
      return action.payload;
    case "ADD":
      return [...prevState, action.payload];
    case "DELETE":
      return prevState.filter((item) => item.id !== action.payload);
    default:
      return "something wrong  in reducer";
  }
};

function Ingredients() {
  const [userIngredients, dispatch] = useReducer(reducer, []);
  const { sendRequest, isLoading, error, data, identifer, reqExtra, clear } =
    useHttp();
  useEffect(() => {
    if (!isLoading && !error && identifer === "REMOVE") {
      console.log("DELETE");
      console.log(reqExtra);
      dispatch({ type: "DELETE", payload: reqExtra });
    } else if (!isLoading && !error && identifer === "ADD") {
      dispatch({
        type: "ADD",
        payload: { id: data.name, ...reqExtra },
      });
    }
  }, [identifer, data, error, isLoading, reqExtra]);

  const addNewIngredientHandler = useCallback((newIngredient) => {
    sendRequest(
      "https://react-demo-37e14-default-rtdb.firebaseio.com/Ingredients.json",
      "POST",
      newIngredient,
      newIngredient,
      "ADD"
    );
  }, []);

  const removeItemHandler = useCallback(
    (id) => {
      sendRequest(
        `https://react-demo-37e14-default-rtdb.firebaseio.com/Ingredients/${id}.json`,
        "DELETE",
        null,
        id,
        "REMOVE"
      );
    },
    [sendRequest]
  );

  const loadedIngredientsHandler = useCallback((ingredients) => {
    // console.log(ingredients);
    // setUserIngredients(ingredients);
    dispatch({ type: "SET", payload: ingredients });
  }, []);

  // const errorHandler = useCallback(() => {
  //   // dispatchHttp({ type: "ClEAR" });
  // }, []);
  return (
    <div className="App">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      {/* {error && <ErrorModal onClose={errorHandler}>{error}</ErrorModal>} */}
      <IngredientForm
        onAddOne={addNewIngredientHandler}
        onLoading={isLoading}
      />

      <section>
        <Search onLoadedIngredients={loadedIngredientsHandler} />
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={removeItemHandler}
        />
      </section>
    </div>
  );
}

export default Ingredients;

// _____________UseReducer version__________________
// import React, { useCallback, useReducer } from "react";
// import ErrorModal from "../UI/ErrorModal";

// import IngredientForm from "./IngredientForm";
// import IngredientList from "./IngredientList";

// import Search from "./Search";

// const reducer = (prevState, action) => {
//   switch (action.type) {
//     case "SET":
//       return action.payload;
//     case "ADD":
//       return [...prevState, action.payload];
//     case "DELETE":
//       return prevState.filter((item) => item.id !== action.payload);
//     default:
//       return "something wrong  in reducer";
//   }
// };

// const httpReducer = (prevState, action) => {
//   switch (action.type) {
//     case "SEND":
//       return { ...prevState, loading: true, error: null };
//     case "RESPONSE":
//       return { ...prevState, loading: false };
//     case "ERROR":
//       return { ...prevState, loading: false, error: action.payload };
//     case "CLEAR":
//       return { ...prevState, error: null };
//     default:
//       return "something wrong in httpReducer";
//   }
// };

// function Ingredients() {
//   const [userIngredients, dispatch] = useReducer(reducer, []);
//   const [httpState, dispatchHttp] = useReducer(httpReducer, {
//     loading: false,
//     error: null,
//   });

//   const addNewIngredientHandler = useCallback((newIngredient) => {
//     dispatchHttp({ type: "SEND" });
//     fetch(
//       "https://react-demo-37e14-default-rtdb.firebaseio.com/Ingredients.json",
//       {
//         method: "POST",
//         body: JSON.stringify(newIngredient),
//         headers: { "Content-Type": "application/json" },
//       }
//     )
//       .then((res) => res.json())
//       .then((resJSON) => {
//         dispatchHttp({ type: "RESPONSE" });

//         // setUserIngredients((prevState) => [
//         //   ...prevState,
//         //   { id: resJSON.name, ...newIngredient },
//         // ]);
//         dispatch({
//           type: "ADD",
//           payload: { id: resJSON.name, ...newIngredient },
//         });
//       })
//       .catch((err) => {
//         dispatchHttp({ type: "ERROR", payload: err.message });
//       });
//   }, []);

//   const removeItemHandler = useCallback((id) => {
//     dispatchHttp({ type: "SEND" });

//     fetch(
//       `https://react-demo-37e14-default-rtdb.firebaseio.com/Ingredients/${id}.json`,
//       { method: "DELETE" }
//     )
//       .then((res) => res.json())
//       .then((resJSON) => {
//         dispatchHttp({ type: "RESPONSE" });

//         // setUserIngredients((prevState) =>
//         //   prevState.filter((item) => item.id !== id)
//         // );
//         dispatch({ type: "DELETE", payload: id });
//       })
//       .catch((err) => {
//         dispatchHttp({ type: "ERROR", payload: err.message });
//       });
//   }, []);

//   const loadedIngredientsHandler = useCallback((ingredients) => {
//     // console.log(ingredients);
//     // setUserIngredients(ingredients);
//     dispatch({ type: "SET", payload: ingredients });
//   }, []);

//   const errorHandler = useCallback(() => {
//     dispatchHttp({ type: "ClEAR" });
//   }, []);
//   return (
//     <div className="App">
//       {httpState.error && (
//         <ErrorModal onClose={errorHandler}>{httpState.error}</ErrorModal>
//       )}
//       <IngredientForm
//         onAddOne={addNewIngredientHandler}
//         onLoading={httpState.loading}
//       />

//       <section>
//         <Search onLoadedIngredients={loadedIngredientsHandler} />
//         <IngredientList
//           ingredients={userIngredients}
//           onRemoveItem={removeItemHandler}
//         />
//       </section>
//     </div>
//   );
// }

// export default Ingredients;

// ___________UseState version___________________

// import React, { useCallback, useEffect, useState } from "react";
// import ErrorModal from "../UI/ErrorModal";

// import IngredientForm from "./IngredientForm";
// import IngredientList from "./IngredientList";

// import Search from "./Search";

// function Ingredients() {
//   const [userIngredients, setUserIngredients] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const addNewIngredientHandler = (newIngredient) => {
//     setIsLoading(true);
//     fetch(
//       "https://react-demo-37e14-default-rtdb.firebaseio.com/Ingredients.json",
//       {
//         method: "POST",
//         body: JSON.stringify(newIngredient),
//         headers: { "Content-Type": "application/json" },
//       }
//     )
//       .then((res) => res.json())
//       .then((resJSON) => {
//         setIsLoading(false);

//         setUserIngredients((prevState) => [
//           ...prevState,
//           { id: resJSON.name, ...newIngredient },
//         ]);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setIsLoading(false);
//       });
//   };

//   // useEffect(() => {
//   //   fetch(
//   //     "https://react-demo-37e14-default-rtdb.firebaseio.com/Ingredients.json"
//   //   )
//   //     .then((res) => res.json())
//   //     .then((resJSON) => {
//   //       const ingredientsDB = [];

//   //       for (const key in resJSON) {
//   //         ingredientsDB.push({
//   //           id: key,
//   //           title: resJSON[key].title,
//   //           amount: resJSON[key].amount,
//   //         });
//   //       }
//   //       setUserIngredients(ingredientsDB);
//   //     })
//   //     .catch((err) => {
//   //       console.log(err);
//   //     });
//   // }, []);

//   const removeItemHandler = (id) => {
//     setIsLoading(true);

//     fetch(
//       `https://react-demo-37e14-default-rtdb.firebaseio.com/Ingredients/${id}.json`,
//       { method: "DELETE" }
//     )
//       .then((res) => res.json())
//       .then((resJSON) => {
//         setIsLoading(false);

//         setUserIngredients((prevState) =>
//           prevState.filter((item) => item.id !== id)
//         );
//       })
//       .catch((err) => {
//         setError(err.message);
//         setIsLoading(false);
//       });
//   };

//   const loadedIngredientsHandler = useCallback((ingredients) => {
//     console.log(ingredients);
//     setUserIngredients(ingredients);
//   }, []);

//   const errorHandler = () => {
//     setError(null);
//   };
//   return (
//     <div className="App">
//       {error && <ErrorModal onClose={errorHandler}>{error}</ErrorModal>}
//       <IngredientForm
//         onAddOne={addNewIngredientHandler}
//         onLoading={isLoading}
//       />

//       <section>
//         <Search onLoadedIngredients={loadedIngredientsHandler} />
//         <IngredientList
//           ingredients={userIngredients}
//           onRemoveItem={removeItemHandler}
//         />
//       </section>
//     </div>
//   );
// }

// export default Ingredients;

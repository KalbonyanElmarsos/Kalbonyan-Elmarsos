import useInput from "../custom-hooks/useInput";
import Input from "../reusable-components/Input";

const SimpleInput = (props) => {
  //  Custom user Hook
  const {
    value: userInput,
    isValid: inputIsValid,
    isTouched: inputIsTouched,
    valueHandler: inputHandler,
    blurHandler: inputBlurHandler,
    reset: inputReset,
  } = useInput((input) => input.trim().length > 0);

  const {
    value: emailInput,
    isValid: emailIsValid,
    isTouched: inputEmailIsTouched,
    valueHandler: emailHandler,
    blurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((emailInput) => emailInput.includes("@"));

  let formIsValid = false;
  if (inputIsValid && emailIsValid) formIsValid = true;

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    inputReset();
    emailReset();
  };
  return (
    <form onSubmit={submitHandler}>
      <Input
        valueIsValid={emailIsValid}
        valueIsTouched={inputEmailIsTouched}
        id="email"
        type="email"
        title="Your Email"
        value={emailInput}
        valueHandler={emailHandler}
        blurHandler={emailBlurHandler}
        errorMesg="Email not valid"
      />

      <Input
        valueIsValid={inputIsValid}
        valueIsTouched={inputIsTouched}
        id="name"
        type="text"
        title="Your Name"
        value={userInput}
        valueHandler={inputHandler}
        blurHandler={inputBlurHandler}
        errorMesg="User Name must no be empty"
      />

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

// import { useEffect, useState } from "react";
// const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// const SimpleInput = (props) => {
//   const [emailInput, setEmailInput] = useState("");
//   const [inputEmailIsTouched, setInputEmailIsTouched] = useState(false);

//   const [userInput, setUserInput] = useState("");
//   const [inputIsTouched, setInputIsTouched] = useState(false);
//   // const [formIsValid, setFormIsValid] = useState(false);

//   const inputIsValid = userInput.trim().length > 0;
//   const emailIsValid = emailInput.includes("@");

//   // useEffect(() => {
//   //   if (inputIsValid) setFormIsValid(true);
//   //   console.log(formIsValid);
//   // }, [inputIsValid]);

//   let formIsValid = false;
//   if (inputIsValid && emailIsValid) formIsValid = true;

//   const submitHandler = (event) => {
//     event.preventDefault();

//     if (userInput.trim().length === 0) {
//       setInputIsTouched(true);
//       return;
//     }
//     //  reset input
//     setUserInput("");
//     setEmailInput("");

//     setInputIsTouched(false);
//     setInputEmailIsTouched(false);
//   };

//   const inputBlurHandler = (event) => {
//     setInputIsTouched(true);
//   };
//   const inputEmailBlurHandler = (event) => {
//     setInputEmailIsTouched(true);
//   };
//   return (
//     <form onSubmit={submitHandler}>
//       <div
//         className={
//           !emailIsValid && inputEmailIsTouched
//             ? `form-control invalid`
//             : "form-control"
//         }
//       >
//         <label htmlFor="email">Your Email</label>
//         <input
//           value={emailInput}
//           onChange={(event) => {
//             if (emailInput.trim().length === 1) {
//               setInputEmailIsTouched(true);
//             }

//             setEmailInput(event.target.value);
//           }}
//           onBlur={inputEmailBlurHandler}
//           type="email"
//           id="email"
//         />
//         {!emailIsValid && inputEmailIsTouched && (
//           <p className={"error-text"}>Email not valid</p>
//         )}
//       </div>

//       <div
//         className={
//           !inputIsValid && inputIsTouched
//             ? `form-control invalid`
//             : "form-control"
//         }
//       >
//         <label htmlFor="name">Your Name</label>
//         <input
//           value={userInput}
//           onChange={(event) => {
//             if (userInput.trim().length === 1) {
//               setInputIsTouched(true);
//             }

//             setUserInput(event.target.value);
//           }}
//           onBlur={inputBlurHandler}
//           type="text"
//           id="name"
//         />
//         {!inputIsValid && inputIsTouched && (
//           <p className={"error-text"}>User Name must no be empty</p>
//         )}
//       </div>
//       <div className="form-actions">
//         <button disabled={!formIsValid}>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default SimpleInput;

// import { useEffect, useRef, useState } from "react";

// const SimpleInput = (props) => {
//   const [userInput, setUserInput] = useState("");
//   const [inputIsValid, setInputIsValid] = useState(false);
//   const [inputIsTouched, setInputIsTouched] = useState(false);
//   const userRefInput = useRef();
//   useEffect(() => {
//     if (inputIsValid) {
//       console.log("sending http request");
//     }
//   }, [inputIsValid]);

//   const submitHandler = (event) => {
//     event.preventDefault();

//     if (userInput.trim().length === 0) {
//       setInputIsTouched(true);
//       return;
//     }

//     console.log(userInput);
//     console.log(userRefInput.current.value);

//     //  reset input
//     setUserInput("");
//     userRefInput.current.value = ""; // not recommended as react is the only source for modify the DOM
//   };

//   const inputBlurHandler = (event) => {
//     setInputIsTouched(true);
//   };
//   return (
//     <form onSubmit={submitHandler}>
//       <div
//         className={
//           !inputIsValid && inputIsTouched
//             ? `form-control invalid`
//             : "form-control"
//         }
//       >
//         <label htmlFor="name">Your Name</label>
//         <input
//           ref={userRefInput}
//           value={userInput}
//           onChange={(event) => {
//             if (userInput.trim().length > 0) {
//               setInputIsValid(true);
//             }
//             if (userInput.trim().length === 1) {
//               setInputIsValid(false);
//               setInputIsTouched(true);
//             }
//             console.log(inputIsValid);
//             console.log(inputIsTouched);
//             setUserInput(event.target.value);
//           }}
//           onBlur={inputBlurHandler}
//           type="text"
//           id="name"
//         />
//         {!inputIsValid && inputIsTouched && (
//           <p className={"error-text"}>User Name must no be empty</p>
//         )}
//       </div>
//       <div className="form-actions">
//         <button>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default SimpleInput;

// ----- best form validation
// import { useState } from "react";

// const SimpleInput = (props) => {
//   const [userInput, setUserInput] = useState("");
//   const [inputIsTouched, setInputIsTouched] = useState(false);

//   const inputIsValid = userInput.trim().length > 0;

//   const submitHandler = (event) => {
//     event.preventDefault();

//     if (userInput.trim().length === 0) {
//       setInputIsTouched(true);
//       return;
//     }
//     //  reset input
//     setUserInput("");
//     setInputIsTouched(false);
//   };

//   const inputBlurHandler = (event) => {
//     setInputIsTouched(true);
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <div
//         className={
//           !inputIsValid && inputIsTouched
//             ? `form-control invalid`
//             : "form-control"
//         }
//       >
//         <label htmlFor="name">Your Name</label>
//         <input
//           value={userInput}
//           onChange={(event) => {
//             if (userInput.trim().length === 1) {
//               setInputIsTouched(true);
//             }

//             setUserInput(event.target.value);
//           }}
//           onBlur={inputBlurHandler}
//           type="text"
//           id="name"
//         />
//         {!inputIsValid && inputIsTouched && (
//           <p className={"error-text"}>User Name must no be empty</p>
//         )}
//       </div>
//       <div className="form-actions">
//         <button>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default SimpleInput;

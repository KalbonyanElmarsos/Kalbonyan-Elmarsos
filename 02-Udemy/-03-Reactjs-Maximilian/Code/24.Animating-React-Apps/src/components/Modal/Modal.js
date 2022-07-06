// import React from "react";
// import Transition from "react-transition-group/Transition";
// import CSSTransition from "react-transition-group/CSSTransition";

// import "./Modal.css";
// const animationTiming = { enter: 400, exit: 1000 };

// const modal = (props) => (
//   <CSSTransition
//     mountOnEnter
//     unmountOnExit
//     in={props.show}
//     timeout={animationTiming}
//     // classNames="fade-slide"
//     classNames={{
//       enter: "",
//       enterActive: "open-modal",
//       exit: "",
//       exitActive: "close-modal",
//     }}
//   >
//     <div className="Modal">
//       {/* <div className={`Modal ${props.show ? "open-modal" : "close-modal"}`}> */}
//       <h1>A Modal</h1>
//       <button className="Button" onClick={props.closed}>
//         Dismiss
//       </button>
//     </div>
//   </CSSTransition>

//   //   <Transition
//   //     onEnter={() => console.log("onEnter")}
//   //     onEntering={() => console.log("onEntering")}
//   //     onEntered={() => console.log("onEntered")}
//   //     onExit={() => console.log("onExit")}
//   //     onExiting={() => console.log("onExiting")}
//   //     onExited={() => console.log("onExited")}
//   //     mountOnEnter
//   //     unmountOnExit
//   //     in={props.show}
//   //     timeout={animationTiming}
//   //   >
//   //     {(state) => {
//   //       console.log(state);
//   //       return (
//   //         <div
//   //           className={`Modal ${
//   //             state === "entered"
//   //               ? "open-modal"
//   //               : state === "exiting"
//   //               ? "close-modal"
//   //               : ""
//   //           }`}
//   //         >
//   //           {/* <div className={`Modal ${props.show ? "open-modal" : "close-modal"}`}> */}
//   //           <h1>A Modal</h1>
//   //           <button className="Button" onClick={props.closed}>
//   //             Dismiss
//   //           </button>
//   //         </div>
//   //       );
//   //     }}
//   //   </Transition>
// );

// export default modal;

import React from "react";

import "./Modal.css";

const modal = (props) => (
  //   <div
  //     className={`Modal ${
  //       props.show === "entering"
  //         ? "open-modal"
  //         : props.show === "exiting"
  //         ? "close-modal"
  //         : ""
  //     }`}
  //   >
  <div className={`Modal ${props.show ? "open-modal" : "close-modal"}`}>
    <h1>A Modal</h1>
    <button className="Button" onClick={props.closed}>
      Dismiss
    </button>
  </div>
);

export default modal;

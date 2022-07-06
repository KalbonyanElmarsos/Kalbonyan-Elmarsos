import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import Demo from "./components/demo/Demo";
import Button from "./components/UI/Button/Button";

function App() {
  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  return (
    <div className="app">
      <Demo title={listTitle} items={useMemo(() => [5, 3, 1, 10, 9], [])} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;

// import React, { useState, useCallback } from "react";

// import "./App.css";
// import CustomP from "./components/customP/CustomP";
// import Button from "./components/UI/Button/Button";

// function App() {
//   const [showParagraph, setShowParagraph] = useState(false);
//   const [allowToggle, setAllowToggle] = useState(false);
//   console.log("app running now");

//   // )=>  Re-evaluate showPHandler only if allowToggle state changed
//   const showPHandler = useCallback(() => {
//     if (allowToggle) setShowParagraph((showParagraph) => !showParagraph);
//   }, [allowToggle]);

//   // )=> create only one function instance and assign it in every re-evaluation {store the func not create it again in every re-evaluation}
//   // const showPHandler = useCallback(() => {
//   //   setShowParagraph((showParagraph) => !showParagraph);
//   // }, []);

//   // const  showPHandler = () => {
//   //   setShowParagraph((showParagraph) => !showParagraph);
//   // };

//   const toggleHandler = () => {
//     setAllowToggle(true);
//   };

//   return (
//     <div className="app">
//       <h1>Hi there!</h1>
//       <CustomP show={false} />
//       {/* <CustomP show={showParagraph} /> */}
//       {/* {showParagraph && <p>Hey im the hidden P</p>} */}
//       <Button onClick={toggleHandler}>Allow toggling!</Button>
//       <Button onClick={showPHandler}>show/hide Paragraph!</Button>
//     </div>
//   );
// }

// export default App;

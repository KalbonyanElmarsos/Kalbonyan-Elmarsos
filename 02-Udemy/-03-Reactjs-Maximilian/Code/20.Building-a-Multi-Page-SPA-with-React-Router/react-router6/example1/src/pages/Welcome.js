import { Link, Route, Routes, Outlet } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <h1>Welcome page</h1>
      <Link to="info">Info</Link>
      <Routes>
        <Route path="info" element={<p>hi there </p>} />
        {/* Tell react where to inject  nested route */}
        {/* <Outlet /> */}
      </Routes>
    </>
  );
};

export default Welcome;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/components/Home/Home";

const Web = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Web;

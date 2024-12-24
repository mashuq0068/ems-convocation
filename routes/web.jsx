import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/components/Home/Home";
import LoginForm from "../src/components/LoginForm/LoginForm.jsx";
import StepForm from "../src/components/StepForm/StepForm";

const Web = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/step-forms" element={<StepForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Web;

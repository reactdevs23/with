import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import PaymentMethod from "./components/PaymentMethod/PaymentMethod";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PaymentMethod />}></Route>
      </Routes>
    </>
  );
}

export default App;

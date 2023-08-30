import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import PaymentMethod from "./components/PaymentMethod/PaymentMethod";
import PayWithWallet from "./components/PaymentMethod/PayWithWallet/PayWithWallet";
import ScanWithQrCode from "./components/PaymentMethod/ScanWithQrCode/ScanWithQrCode";

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

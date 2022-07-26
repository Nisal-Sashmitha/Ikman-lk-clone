
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./Comonents/Home";
import Ads from "./Comonents/Ads";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Ads" element={<Ads/>} />
        <Route path="invoices" element={<div>invoices</div>} />
      </Routes>
    </BrowserRouter>
                                                                   
  );
}

export default App;

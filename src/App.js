
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./Comonents/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="expenses" element={<div>expenses</div>} />
        <Route path="invoices" element={<div>invoices</div>} />
      </Routes>
    </BrowserRouter>
                                                                   
  );
}

export default App;

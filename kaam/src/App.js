import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignIn";

function App() {
  return (
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/signin" element={<SignUp />} /> 
        </Routes> 
      </BrowserRouter>
  );
}

export default App;

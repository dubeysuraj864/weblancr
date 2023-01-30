import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App text-sm  md:mx-16 xl:mx-20">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Home/>} />
        </Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
  <div>
      <div className="App text-sm  md:mx-16 xl:mx-20">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Home/>} />
        </Route>
     </Routes>
     </BrowserRouter>
    
    </div>
    <div>
    <Footer/>
  </div>
  </div>
  );
}

export default App;

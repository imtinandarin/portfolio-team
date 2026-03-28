import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Darin from "./pages/Darin";
import Jace from "./pages/Jace";
import Mayla from "./pages/Mayla";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/imtinan-darin-huwaida" element={<Darin />} />
        <Route path="/jacinda-queena-clearesta" element={<Jace />} />
        <Route path="/mayla-tahmida" element={<Mayla />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
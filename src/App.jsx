import { 
  HashRouter, 
  Routes, 
  Route
} from "react-router-dom";
import Home from "./pages/home";
import Alpha from "./pages/alpha";
import './App.css'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/alpha" element={<Alpha/>} /> 
      </Routes>
    </HashRouter>
  )
}

export default App




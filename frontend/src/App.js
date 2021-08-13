import { Home,MovieDetails, NotFound } from "./pages";
import {Routes,Route} from "react-router-dom"
import "./App.css"
function App() {
  return (
    <div className="w-full App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<MovieDetails/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;


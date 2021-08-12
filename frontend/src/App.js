import { Home,MovieDetails, NotFound } from "./pages";
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<MovieDetails/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;


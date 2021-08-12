import { Home,MovieDetails } from "./pages";
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<MovieDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;


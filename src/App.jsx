import { Routes,Route } from "react-router-dom";
import TeamPage from "./Components/TeamPage";
import Rules from "./Components/Rules";

function App() {

  return (
   <>
  <Routes>
    <Route path="/" element={<TeamPage></TeamPage>}></Route>
    <Route path="/rules" element={<Rules></Rules>}></Route>  
  </Routes>   
   </>
  );
}

export default App;

import { Routes,Route } from "react-router-dom";
import TeamPage from "./Components/TeamPage";
import Rules from "./Components/Rules";
import AdminAuth from "./Components/Admin/AdminAuth";
import AdminPannel from "./Components/Admin/AdminPannel";

function App() {

  return (
   <>
  <Routes>
    <Route path="/" element={<TeamPage></TeamPage>}></Route>
    <Route path="/rules" element={<Rules></Rules>}></Route>  
    <Route path="/adminAuth" element={<AdminAuth></AdminAuth>}></Route>
    <Route path="/adminPannel" element={<AdminPannel></AdminPannel>}></Route>
  </Routes>   
   </>
  );
}

export default App;

import { Routes,Route } from "react-router-dom";
import TeamPage from "./Components/TeamPage";
import Rules from "./Components/Rules";
import AdminAuth from "./Components/Admin/AdminAuth";

// Admin Pannel
import QuizDashboard from "./Components/Admin/QuizDashboard"
import AdminLayout from "./Components/Admin/AdminLayout";
import AddQuestion from "./Components/Admin/AddQuestion";
import EditQuestion from "./Components/Admin/EditQuestion";
import Leadboard from "./Components/Admin/Leadboard";

function App() {

  return (
   <>
  <Routes>
    <Route path="/" element={<TeamPage/>}></Route>
    <Route path="/rules" element={<Rules/>}></Route>  
    <Route path="/adminAuth" element={<AdminAuth/>}></Route>
    <Route path="/adminPannel" element={<AdminLayout/>}>
      <Route index element={<QuizDashboard/>}></Route>
      <Route path="addQuestion" element={<AddQuestion/>}></Route>
      <Route path="editQuestion" element={<EditQuestion/>}></Route>
      <Route path="leadboardQuestion" element={<Leadboard/>}></Route>
    </Route>
  </Routes>   
   </>
  );
}

export default App;

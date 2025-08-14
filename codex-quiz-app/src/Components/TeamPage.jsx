import { useState } from "react";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";

function TeamPage() {
  let [team, setTeam] = useState("");
  const navigate = useNavigate();

  const handleTeam = (event) => {
    let team = event.target.value;
    team = team.toUpperCase();
    setTeam(team);
  };

  const handleForm =(e)=>{
    e.preventDefault();
  }

  return (
    <Layout>
      <div className="w-[100%] bg-[rgba(0,0,0,0.3)] h-[100%] flex flex-col justify-center items-center">
        <h1 className="font-[Orbitron] text-center text-7xl font-extrabold text-[#34e47b] [text-shadow:_0_0_10px_#3eeb91] ">
          CODE KE BOSS <br /> 2025
        </h1>
        <h2 className="font=[Montserrat] font-semibold text-4xl text-center text-[#fcf53a] [text-shadow:_0_0_12px_#FFCC00] mt-6">
          THE ULTIMATE CODING BATTLE IS BACK!
        </h2>

        <form className="flex flex-col" 
        onSubmit={handleForm}>
          <input
            className="font-[Orbitron] text-center text-4xl text-[#67dfbb] [text-shadow:_0_0_.5px_#67dfbb,_0_0_1px_#67dfbb,_0_0_9px_#67dfbb] mt-5 py-4 w-[350px] border-2 bg-[rgba(0,0,0,0.3)]"
            type="text"
            onChange={handleTeam}
            placeholder="Team Name"
            value={team}
          />
          <button
            onClick={() => navigate("/rules")}
            className="font-[Orbitron] text-[#001f1a] bg-[#16fa8f] mt-5 w-[14rem] mx-auto py-2 text-4xl rounded-2xl [box-shadow:_0_0_15px_#00FF9E] hover:bg-[#0fbf6d] cursor-pointer "
          >
            Start
          </button>
        </form>

        <p className="text-[#53edc3] text-3xl mt-7 [text-shadow:_0_0_.5px_#67dfbb,_0_0_1px_#67dfbb,_0_0_9px_#67dfbb]">
          Gear up code hard and rule the console.
        </p>

        <div className="absolute bottom-8 right-8">
          <button
            onClick={() => navigate("/adminAuth")}
            className="font-[Orbitron] text-[#001f1a] bg-[#fa1616] font-semibold px-4 py-2 rounded-2xl [box-shadow:_0_0_15px_#fa1616] hover:bg-[#8d1111] cursor-pointer hover:text-[#d4d2d2] "
          >
            <i className="fa-solid fa-circle-user"></i> &nbsp; Admin
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default TeamPage;

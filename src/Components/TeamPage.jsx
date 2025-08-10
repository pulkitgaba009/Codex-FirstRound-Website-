import { useState } from "react";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";

function TeamPage() {
  let [team, setTeam] = useState("");
  const navigate = useNavigate();

  const handleOnChange = (event) => {
    let team = event.target.value;
    team = team.toUpperCase();
    setTeam(team);
  };

  return (
    <Layout>
      <h1 className="font-[Orbitron] text-center text-7xl font-extrabold text-[#34e47b] [text-shadow:_0_0_.5px_#3eeb91,_0_0_1px_#3eeb91,_0_0_10px_#3eeb91] ">
        CODE KE BOSS <br /> 2025
      </h1>
      <h2 className="font=[Montserrat] font-semibold text-4xl text-center text-[#fcf53a] [text-shadow:_0_0_.5px_#FFCC00,_0_0_1px_#FFCC00,_0_0_12px_#FFCC00] mt-6">
        THE ULTIMATE CODING BATTLE IS BACK!
      </h2>
      <input
        className="font-[Orbitron] text-center text-4xl text-[#67dfbb] [text-shadow:_0_0_.5px_#67dfbb,_0_0_1px_#67dfbb,_0_0_9px_#67dfbb] mt-5 py-4 w-[350px] border-2 bg-[rgba(0,0,0,0.3)]"
        type="text"
        onChange={handleOnChange}
        placeholder="Team Name"
        value={team}
      />
      <button onClick={()=>navigate("/rules")} className="font-[Orbitron] text-[#001f1a] bg-[#16fa8f] mt-5 px-8 py-2 text-4xl rounded-2xl [box-shadow:_0_0_.5px_#00FF9E,_0_0_1px_#0FFCB2,_0_0_15px_#00FF9E] hover:bg-[#0fbf6d] cursor-pointer ">
        Start
      </button>
      <p className="text-[#53edc3] text-3xl mt-7 [text-shadow:_0_0_.5px_#67dfbb,_0_0_1px_#67dfbb,_0_0_9px_#67dfbb]">
        Gear up code hard and rule the console.
      </p>
    </Layout>
  );
}

export default TeamPage;

import Layout from "./Layout";

export default function Rules() {
  return (
    <Layout>
      <div className="w-[100%] bg-[rgba(0,0,0,0.2)] h-[100%] flex flex-col justify-center items-center">
        <h1 className="font-[Orbitron] font-bold text-6xl text-[#fcf53a] [text-shadow:_0_0_.5px_#FFCC00,_0_0_1px_#FFCC00,_0_0_12px_#FFCC00]">
          Rules Of Conduct
        </h1>
        <div className="w-[60%] h-[70%] bg-[rgba(0,0,0,0.2)] mt-8 pt-[2rem]">
          <h2 className="font-[Orbitron] text-[#34e47b] [text-shadow:_0_0_.5px_#3eeb91,_0_0_1px_#3eeb91,_0_0_10px_#3eeb91] text-2xl text-center">
            Welcome to the first challenge of Code Ke Boss 2025!
          </h2>
          <p className="font-[Montserrat] text-[#ffffff] [text-shadow:_0_0_.5px_#3eeb91,_0_0_1px_#3eeb91,_0_0_10px_#3eeb91] text-center">
            Before you dive into coding mayhem, it’s time to prove that your
            brain is as sharp as your code.
          </p>
          <div className="w-[100%] mt-[1rem] h-[85%] overflow-auto scrollbar-hidden px-8">
            <h3 className="ruleHeadings">Format</h3>
            <ul className="rulePara list-disc">
              <li>Type: Multiple Choice Questions (MCQ) + Rapid Fire</li>
              <li>Number of Questions: 15 MCQs + 5 Rapid Fire</li>
              <li>Time Limit: 20 minutes</li>
              <li> Mode: Online quiz interface / on-paper (as per event setup)</li>
            </ul>

            <br />
            <h3 className="ruleHeadings">Topics Covered</h3>
            <ul className="rulePara list-disc">
              <li>Programming Basics – Syntax, concepts, debugging</li>
              <li>Algorithms & Data Structures – Logic, efficiency, implementation</li>
              <li>Tech Trivia – Famous inventions, programming history, fun facts</li>
              <li>Problem-Solving – Short logical puzzles & output predictions</li>
            </ul>

            <br />
            <h3 className="ruleHeadings">Rules</h3>
            <ul className="rulePara list-disc">
              <li>Each correct answer = +4 points</li>
              <li>Wrong answer = –1 point (negative marking applies)</li>
              <li>No internet or external resources allowed – it’s all you and your brain.</li>
              <li>Rapid Fire section: 30 seconds per question, no going back.</li>
              <li>Top 5 teams (based on scores) qualify for Round 2.</li>
            </ul>

            <br />
            <hr className="w-[100%] h-[2px] border-0 rounded bg-white shadow-[0_0_10px_#FFD700,0_0_20px_#FFD700]" />
            <br />

            <h4 className="font-[Orbitron] font-extralight text-center text-2xl text-[#34d8e4] [text-shadow:_0_0_.5px_#34e47b,_0_0_1px_#34e47b,_0_0_12px_#34e47b]">Gear up, code boss. The console awaits.</h4>
            <h4 className="font-[Montserrat] text-[#e6dede] [text-shadow:_0_0_.5px_#ffffff,_0_0_1px_#ffffff,_0_0_5px_#ffffff] text-center ml-8">Speed + accuracy = victory. Don’t get stuck on a single question — move fast and trust your instincts.</h4>
            
            <div className="w-[100%] flex justify-center">
                <button className="font-[Orbitron] text-[#001f1a] bg-[#16fa8f] my-8 px-8 py-2 text-4xl rounded-2xl [box-shadow:_0_0_.5px_#00FF9E,_0_0_1px_#0FFCB2,_0_0_15px_#00FF9E] hover:bg-[#0fbf6d] cursor-pointer">Start</button>
            </div>
            

          </div>
        </div>
      </div>
    </Layout>
  );
}

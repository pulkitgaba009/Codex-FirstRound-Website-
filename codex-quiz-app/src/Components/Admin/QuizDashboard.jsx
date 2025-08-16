import { useState } from "react";

function QuizDashboard() {
  const [isOn, setIsOn] = useState(false); 
  const [isShuffleOn, setIsShuffleOn] = useState(false); 
  const [formData, setFormData] = useState({
    quizTitle: "",
    hrs: "",
    min: "",
    sec: "",
  });

  const toggleHandler = () => {
    setIsOn((prev) => !prev);
  };

  const toggleShuffleHandler = () => {
    setIsShuffleOn((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("Quiz Active Status:", isOn ? "ON" : "OFF");
    console.log("Shuffle Status:", isShuffleOn ? "ON" : "OFF");
  };

  return (
    <div className="box bg-[rgba(0,0,0,0.2)] flex justify-center items-center">
      <div className="subDivs h-[53%] rounded-lg">
        <h1 className="authHeading">Quiz Control Panel</h1>
        <hr className="horizontalLine mt-2" />
        <br />

        <form onSubmit={handleSubmit}>
          <div className="w-full px-4">

            <label className="label">Quiz Time:</label>
            <input
              type="number"
              className="input w-[80px] text-center"
              name="hrs"
              placeholder="hrs"
              value={formData.hrs}
              onChange={handleChange}
              min={0}
              onFocus={(e)=>e.target.value=""}
            />
            <input
              type="number"
              className="input w-[80px] text-center"
              name="min"
              placeholder="min"
              value={formData.min}
              onChange={handleChange}
              min={0}
              max={60}
              onFocus={(e)=>e.target.value=""}
            />
            <input
              type="number"
              className="input w-[80px] text-center"
              name="sec"
              placeholder="sec"
              value={formData.sec}
              onChange={handleChange}
              min={0}
              max={60}
              onFocus={(e)=>e.target.value=""}
            />

            <br />
            <br />

            <label htmlFor="activeStatus" className="label">
              Quiz Active Status:
            </label>
            <button
              type="button"
              onClick={toggleHandler}
              id="activeStatus"
              className={`ml-23 px-6 py-2 text-xl rounded-2xl font-[Orbitron] cursor-pointer transition-all font-semibold ${
                isOn
                  ? "bg-[#16fa8f] text-[#001f1a] [box-shadow:_0_0_15px_#00FF9E] "
                  : "bg-[#fa1616] [box-shadow:_0_0_15px_#fa1616] text-white"
              }`}
            >
              {isOn ? "ON" : "OFF"}
            </button>

            <br />
            <br />

            <label htmlFor="shuffelStatus" className="label">
              Shuffel Quiz Questions :
            </label>
            <button
              type="button"
              onClick={toggleShuffleHandler}
              id="shuffelStatus"
              className={`ml-10 px-6 py-2 text-xl rounded-2xl font-[Orbitron] cursor-pointer transition-all font-medium ${
                isShuffleOn
                  ? "bg-[#16fa8f] text-[#001f1a] [box-shadow:_0_0_15px_#00FF9E] "
                  : "bg-[#fa1616] [box-shadow:_0_0_15px_#fa1616] text-white"
              }`}
            >
              {isShuffleOn ? "ON" : "OFF"}
            </button>

            <br />
            <br />
              <div className="w-full flex justify-center">
            <button
              type="submit"
              className="font-[Orbitron] font-semibold text-white hover:text-[#001f1a] bg-[#fa1616] 
                     [box-shadow:_0_0_15px_#fa5716f4] w-[80%] 
                     py-2 text-xl rounded-2xl hover:[box-shadow:_0_0_15px_#00FF9E] 
                     hover:bg-[#16fa8f] cursor-pointer"
            >
              Save Quiz Settings
            </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default QuizDashboard;
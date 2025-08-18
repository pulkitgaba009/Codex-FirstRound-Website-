import { useState } from "react";
import QuestionForm from "./QuestionForm";
import QuestionView from "./QuestionView";

function AddQuestion() {
  const [formData, setFormData] = useState({
    question: "What is the output of the following C code?",
    optionA: "45",
    optionB: "55",
    optionC: "65",
    optionD: "75",
    answer: "55",
    language: "C",
    code: `#include <stdio.h>

int main() {
    int sum = 0;
    for (int i = 1; i <= 10; i++) {
        sum += i;
    }
    printf("%d", sum);
    return 0;
}`,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="box">
      <div className="subDivs w-[60%] mt-4">
        <QuestionView formData={formData} />
      </div>

      <div className="subDivs w-[40%] mt-4">
        <h1 className="authHeading">Enter the Question</h1>
        <hr className="horizontalLine mt-2" />

        <div className="w-full mt-4 h-[87%] overflow-auto scrollbar-hidden px-8">
          <QuestionForm
            formData={formData}
            onChange={handleChange}
            mode="post"
            isDelete={false}
          />
        </div>
      </div>
    </div>
  );
}

export default AddQuestion;

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import QuestionForm from "./QuestionForm";

function AddQuestion() {
  const [formData, setFormData] = useState({
  question: "What is the output of the following C code?",
  optionA: "45",
  optionB: "55",
  optionC: "65",
  optionD: "75",
  answer: "Option B",
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
        <h1 className="authHeading">Question View</h1>
        <hr className="horizontalLine mt-2" />

        <div className="w-full mt-4 h-[85%] overflow-auto scrollbar-hidden px-8">
          <h2 className="question">Question : </h2>
          <p className="questionPara">{formData.question || "Your question will appear here"}</p>

          {formData.code && (
            <div className="mt-4 bg-black rounded-2xl">
              <h2 className="text-xl font-semibold ml-4 pt-2 code">
                Code: {formData.language}
              </h2>
              <div className="p-2">
                <SyntaxHighlighter
                  language={formData.language.toLowerCase()}
                  style={atomDark}
                  customStyle={{
                    borderRadius: "8px",
                    padding: "1rem",
                    fontSize: "0.9rem",
                    backgroundColor: "oklch(12.9% 0.042 264.695)",
                  }}
                >
                  {formData.code}
                </SyntaxHighlighter>
              </div>
            </div>
          )}

          <div className="pt-4">
            <div className="option">a) {formData.optionA}</div>
            <div className="option">b) {formData.optionB}</div>
            <div className="option">c) {formData.optionC}</div>
            <div className="option">d) {formData.optionD}</div>
          </div>
        </div>
      </div>

      <div className="subDivs w-[40%] mt-4">
        <h1 className="authHeading">Enter the Question</h1>
        <hr className="horizontalLine mt-2" />

        <div className="w-full mt-4 h-[85%] overflow-auto scrollbar-hidden px-8">
          <QuestionForm formData={formData} onChange={handleChange} />
        </div>
      </div>
    </div>
  );
}

export default AddQuestion;

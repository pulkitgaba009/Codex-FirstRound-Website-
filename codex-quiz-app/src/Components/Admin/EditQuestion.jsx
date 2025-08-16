import QuestionForm from "./QuestionForm";
import QuestionView from "./QuestionView";

function EditQuestion() {
  const formData = {
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
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="box bg-[rgba(0,0,0,0.2)] h-screen w-full">
      <div className="w-full grid grid-cols-12 grid-rows-12 gap-4">
        <div className="subDivs row-span-12 col-span-7">
          <QuestionView formData={formData} />
        </div>

        <div className="subDivs row-span-4 col-span-5">
          <h1 className="authHeading pb-2">Questions</h1>
          <hr className="horizontalLine" />
        </div>

        <div className="subDivs row-span-8 col-span-5">
          <h1 className="authHeading pb-2">Edit Question</h1>
          <hr className="horizontalLine" />
          <div className="w-full flex h-[87%] justify-center overflow-auto scrollbar-hidden ">
            <QuestionForm
              formData={formData}
              onChange={handleChange}
              mode="put"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditQuestion;

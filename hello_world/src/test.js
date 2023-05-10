import { useState } from 'react';

function App1() {
  const [questions, setQuestions] = useState([
    Array(4).fill(''), // questions for step 1
    Array(4).fill(''), // questions for step 2
    Array(4).fill(''), // questions for step 3
    Array(4).fill(''), // questions for step 4
    Array(4).fill(''), // questions for step 5
    Array(4).fill(''), // questions for step 6
    Array(4).fill(''), // questions for step 7
    Array(4).fill(''), // questions for step 8
    Array(4).fill(''), // questions for step 9
    Array(4).fill(''), // questions for step 10
    Array(4).fill(''), // questions for step 11
    Array(4).fill(''), // questions for step 12
    Array(4).fill(''), // questions for step 13
    Array(4).fill(''), // questions for step 14
  ]);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [selectedSubQuestion, setSelectedSubQuestion] = useState(null);

  const handleQuestionChange = (event, index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentStep][index] = event.target.value;
    setQuestions(updatedQuestions);
  };

  const handleNextStep = () => {
    if (currentStep < 13) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSelectQuestion = (index) => {
    setSelectedQuestion(index);
    setSelectedSubQuestion(null);
  };

  const handleSelectSubQuestion = (index) => {
    setSelectedSubQuestion(index);
  };

  const renderSubQuestionOptions = () => {
    if (selectedQuestion !== null) {
      const subQuestions = questions[selectedQuestion];
      return subQuestions.map((question, index) => (
        <option key={index} value={index}>{`Sub-question ${index + 1}`}</option>
      ));
    }
  };

  const renderSubQuestions = () => {
    if (selectedSubQuestion !== null) {
      const subQuestions = questions[selectedQuestion][selectedSubQuestion];
      return subQuestions.map((question, index) => (
        <div key={index}>
          <label>{`Sub-question ${selectedSubQuestion + 1}.${index + 1}:`}</label>
          <input type="text" value={question} onChange={(e) => handleQuestionChange(e, index)} />
        </div>
      ));
    }
  };

  return (
    <div>
      <h1>Questionnaire</h1>
      <div>
        <p>Step {currentStep + 1}</p>
        {questions[currentStep].map((question, index) => (
          <div key={index}>
            <label>{`Question ${index + 1}:`}</label>
            <input type="text" value={question} onChange={(e) => handleQuestionChange(e, index)} />
          </div>
        ))}
        <button onClick={handleNextStep}>Next step</button>
      </div>
      <div>
        {selectedQuestion !== null ? (
          <div>
            <p>Sub-questions for Question {selectedQuestion + 1}:</p>
            <select onChange={(e) => handleSelectSubQuestion(parseInt(e.target.value))}>
              <option value={  (null) }disabled>Select a sub-question</option>
              {renderSubQuestionOptions()}
            </select>
            {renderSubQuestions()}
          </div>
        ) : (
          <div>
            <p>Select a question to view sub-questions:</p>
            <select onChange={(e) => handleSelectQuestion(parseInt(e.target.value))}>
              <option value={null} disabled selected>Select a question</option>
              {questions[currentStep].map((question, index) => (
                <option key={index} value={index}>{`Question ${index + 1}`}</option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
}

export default App1;


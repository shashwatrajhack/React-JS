import  { useState, useEffect } from "react";

const App = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    fetch("https://api.jsonserve.com/Uw5CrX")
      .then((response) => response.json())
      .then((data) => setQuizData(data.questions))
      .catch((error) => console.error("Error fetching quiz data:", error));
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);

    if (currentQuestionIndex + 1 < quizData.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div className="quiz-container p-6 max-w-xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Quiz App</h1>
      {quizCompleted ? (
        <div>
          <h2 className="text-xl">Quiz Completed!</h2>
          <p className="text-lg">Your Score: {score}/{quizData.length}</p>
        </div>
      ) : (
        quizData.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold mb-4">
              {quizData[currentQuestionIndex].question}
            </h2>
            <div className="space-y-2">
              {quizData[currentQuestionIndex].answers.map((answer, index) => (
                <button
                  key={index}
                  className="block w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                  onClick={() => handleAnswer(answer.isCorrect)}
                >
                  {answer.text}
                </button>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default App;

import React, { useState } from "react";
import { questions } from "./questions";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (index) => {
    setSelectedOption(index);
    setShowExplanation(true);
    if (index === questions[currentQuestion].correct) {
      setCorrectAnswers((prev) => prev + 1);
    } else {
      setIncorrectAnswers((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setSelectedOption(null);
      setShowExplanation(false);
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      {!quizCompleted ? (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              style={{
                display: "block",
                margin: "10px 0",
                backgroundColor:
                  selectedOption === index
                    ? index === questions[currentQuestion].correct
                      ? "lightgreen"
                      : "salmon"
                    : ""
              }}
            >
              {option}
            </button>
          ))}
          {showExplanation && (
            <div>
              <p>
                {selectedOption === questions[currentQuestion].correct
                  ? "✅ Correct! "
                  : "❌ Incorrect! "}
                {questions[currentQuestion].explanation}
              </p>
              <button onClick={nextQuestion}>
                {currentQuestion < questions.length - 1
                  ? "Next Question"
                  : "Finish Quiz"}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h2>Quiz Completed!</h2>
          <p>✅ Correct Answers: {correctAnswers}</p>
          <p>❌ Incorrect Answers: {incorrectAnswers}</p>
        </div>
      )}
    </div>
  );
}


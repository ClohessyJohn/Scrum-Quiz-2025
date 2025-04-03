import React, { useState } from "react";
import { questions } from "./questions";

export default function App() {
  const [quizStarted, setQuizStarted] = useState(false);
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
    <div style={{ maxWidth: "600px", margin: "40px auto", fontFamily: "Arial, sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: 40 }}>
        <h1 style={{ fontSize: "2rem", marginBottom: 10 }}>Scrum Master Practice Quiz 2025</h1>
        <p style={{ fontSize: "1rem", color: "#666" }}>
          Designed by John Clohessy · Not affiliated with Scrum.org
        </p>
      </header>

      {!quizStarted ? (
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "1.1rem", marginBottom: 20 }}>
            This free quiz is designed to help you prepare for the PSM I certification and reinforce key Scrum concepts.
          </p>
          <p style={{ fontSize: "0.9rem", color: "#888", marginBottom: 30 }}>
            This is an independent study tool created by an experienced Scrum Master and Agile Coach. It is not affiliated with Scrum.org or any certification body.
          </p>
          <button
            onClick={() => setQuizStarted(true)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Start Quiz
          </button>
        </div>
      ) : !quizCompleted ? (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              style={{
                display: "block",
                width: "100%",
                padding: "10px",
                margin: "10px 0",
                backgroundColor:
                  selectedOption === index
                    ? index === questions[currentQuestion].correct
                      ? "#d4edda"
                      : "#f8d7da"
                    : "#f0f0f0",
                border: "1px solid #ccc",
                borderRadius: "5px",
                cursor: "pointer",
                textAlign: "left"
              }}
            >
              {option}
            </button>
          ))}
          {showExplanation && (
            <div
              style={{
                backgroundColor: "#f9f9f9",
                padding: "15px",
                marginTop: "20px",
                borderRadius: "5px"
              }}
            >
              <p>
                {selectedOption === questions[currentQuestion].correct
                  ? "✅ Correct! "
                  : "❌ Incorrect! "}
                {questions[currentQuestion].explanation}
              </p>
              <button
                onClick={nextQuestion}
                style={{
                  marginTop: "15px",
                  padding: "10px 20px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
              >
                {currentQuestion < questions.length - 1 ? "Next Question" : "Finish Quiz"}
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



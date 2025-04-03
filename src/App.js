import React, { useState, useEffect } from "react";
import { questions } from "./questions";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [practiceMode, setPracticeMode] = useState(true);

  const handleAnswer = (index) => {
    if (selectedOption !== null) return; // Prevent multiple selections

    setSelectedOption(index);
    setShowExplanation(true);

    const isCorrect = index === questions[currentQuestion].correct;
    if (isCorrect) {
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

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setQuizCompleted(false);
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif", maxWidth: 800, margin: "0 auto" }}>
      {!quizCompleted ? (
        <>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <h3>Question {currentQuestion + 1} of {questions.length}</h3>
            <button onClick={() => setPracticeMode(!practiceMode)}>
              Switch to {practiceMode ? "Test" : "Practice"} Mode
            </button>
          </div>

          <div style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: 10 }}>
            {questions[currentQuestion].question}
          </div>

          {questions[currentQuestion].options.map((option, index) => {
            const isCorrect = index === questions[currentQuestion].correct;
            const isSelected = index === selectedOption;

            let backgroundColor = "#eee";
            if (selectedOption !== null) {
              if (isSelected && isCorrect) backgroundColor = "lightgreen";
              else if (isSelected && !isCorrect) backgroundColor = "salmon";
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                style={{
                  display: "block",
                  width: "100%",
                  padding: "12px 20px",
                  marginBottom: 10,
                  fontSize: "1rem",
                  backgroundColor,
                  border: "1px solid #ccc",
                  borderRadius: 6,
                  textAlign: "left",
                  cursor: "pointer"
                }}
              >
                <strong>{String.fromCharCode(65 + index)}.</strong> {option}
              </button>
            );
          })}

          {showExplanation && (
            <div style={{ backgroundColor: "#f5f5f5", padding: 20, borderRadius: 6, marginTop: 20 }}>
              {!practiceMode ? null : (
                <p>
                  <strong>{selectedOption === questions[currentQuestion].correct ? "✅ Correct!" : "❌ Incorrect!"}</strong>
                </p>
              )}
              <p>
                <strong>Explanation:</strong> {questions[currentQuestion].explanation}
              </p>
              <button onClick={nextQuestion} style={{ marginTop: 10 }}>Next</button>
            </div>
          )}
        </>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h2>Quiz Completed!</h2>
          <p>✅ Correct Answers: {correctAnswers}</p>
          <p>❌ Incorrect Answers: {incorrectAnswers}</p>
          <button onClick={resetQuiz} style={{ marginTop: 10 }}>Retake Quiz</button>
        </div>
      )}
    </div>
  );
}


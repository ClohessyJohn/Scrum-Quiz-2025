import React, { useState } from "react";
import { questions } from "./questions";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [mode, setMode] = useState(null); // null, "practice", or "test"
  const [darkMode, setDarkMode] = useState(false);
  const [startTime, setStartTime] = useState(null);

  const handleStart = (selectedMode) => {
    setMode(selectedMode);
    setStartTime(selectedMode === "test" ? Date.now() : null);
  };

  const handleAnswer = (index) => {
    if (selectedOption !== null) return; // prevent multiple clicks
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

  const getOptionLabel = (i) => String.fromCharCode(65 + i); // A, B, C, D

  const renderLandingPage = () => (
    <div className="landing">
      <h1>Scrum Master Practice Quiz 2025</h1>
      <p>Study for your Scrum.org PSM I exam — built by <strong>John Clohessy</strong></p>
      <button onClick={() => handleStart("practice")}>Practice Mode</button>
      <button onClick={() => handleStart("test")}>Test Mode</button>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );

  const renderQuiz = () => (
    <div className="quiz-container">
      <div className="quiz-header">
        <h2>
          Question {currentQuestion + 1} of {questions.length}
        </h2>
        {mode === "test" && (
          <div className="timer">
            ⏱ {Math.floor((Date.now() - startTime) / 1000)}s
          </div>
        )}
        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <h3>{questions[currentQuestion].question}</h3>

      {questions[currentQuestion].options.map((option, index) => {
        const label = getOptionLabel(index);
        const isCorrect = index === questions[currentQuestion].correct;
        const isSelected = selectedOption === index;
        let bgColor = "#eee";

        if (selectedOption !== null) {
          if (isSelected && isCorrect) bgColor = "#d4edda";
          else if (isSelected && !isCorrect) bgColor = "#f8d7da";
          else if (isCorrect) bgColor = "#d4edda";
        }

        return (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            style={{
              backgroundColor: bgColor,
              padding: "12px",
              margin: "10px 0",
              width: "100%",
              textAlign: "left",
              fontWeight: isSelected ? "bold" : "normal",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "16px"
            }}
          >
            <strong>{label}.</strong> {option}
          </button>
        );
      })}

      {showExplanation && (
        <div style={{ marginTop: 20, background: "#f1f1f1", padding: 20 }}>
          <p>
            <strong>
              {selectedOption === questions[currentQuestion].correct ? "✅ Correct!" : "❌ Incorrect!"}
            </strong>
          </p>
          <p>
            <strong>Explanation:</strong> {questions[currentQuestion].explanation}
          </p>
          <button onClick={nextQuestion}>Next</button>
        </div>
      )}
    </div>
  );

  const renderCompletion = () => (
    <div className="completion">
      <h2>✅ Quiz Completed</h2>
      <p>Correct: {correctAnswers}</p>
      <p>Incorrect: {incorrectAnswers}</p>
      <button onClick={() => window.location.reload()}>Restart</button>
    </div>
  );

  return (
    <div className={darkMode ? "dark" : "light"} style={{ padding: 20, fontFamily: "Arial" }}>
      {!mode ? renderLandingPage() : quizCompleted ? renderCompletion() : renderQuiz()}
    </div>
  );
}




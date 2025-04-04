import React, { useState, useEffect } from "react";
import { questions } from "./questions";
import "./App.css";

export default function App() {
  const [mode, setMode] = useState("landing");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [timer, setTimer] = useState(60 * 20); // 20 minutes

  useEffect(() => {
    let interval;
    if (mode === "test" && !quizCompleted) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setQuizCompleted(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [mode, quizCompleted]);

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

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setQuizCompleted(false);
    setTimer(60 * 20);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const containerStyle = {
    maxWidth: 900,
    margin: "auto",
    padding: 30,
    backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
    color: darkMode ? "#f1f1f1" : "#222",
    borderRadius: 10,
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  };

  const buttonStyle = {
    display: "block",
    margin: "10px 0",
    padding: "12px 16px",
    width: "100%",
    textAlign: "left",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ccc",
    borderRadius: 6,
    fontSize: "1rem",
    cursor: "pointer"
  };

  const explanationBox = {
    backgroundColor: darkMode ? "#333" : "#f1f1f1",
    padding: 20,
    marginTop: 20,
    borderRadius: 6
  };

  if (mode === "landing") {
    return (
      <div className={`app-container ${darkMode ? "dark" : ""}`} style={{ textAlign: "center", padding: 40 }}>
        <h1 style={{ fontSize: "2.4rem" }}>Scrum Master Practice Quiz 2025</h1>
        <p>Designed by <strong>John Clohessy</strong> • Not affiliated with Scrum.org</p>
        <p>This free quiz is designed to help you prepare for the PSM I certification and reinforce key Scrum concepts.</p>
        <p style={{ fontSize: "0.9rem", color: "gray" }}>
          It is an independent study tool created by an experienced Scrum Master and Agile Coach. It is not affiliated with Scrum.org or any certification body.
        </p>
        <div style={{ marginTop: 30 }}>
          <button onClick={() => setMode("practice")} className="primary-btn">Start Quiz</button>
        </div>
      </div>
    );
  }

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`} style={containerStyle}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <h2>Scrum Master Practice Quiz 2025</h2>
        <div>
          <button onClick={() => setMode("practice")} style={{ marginRight: 10 }}>Practice Mode</button>
          <button onClick={() => { resetQuiz(); setMode("test"); }}>Test Mode</button>
          <button onClick={() => setDarkMode(!darkMode)} style={{ marginLeft: 10 }}>
            {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </div>

      {mode === "test" && !quizCompleted && (
        <div style={{ textAlign: "right", fontSize: "1.1rem", marginBottom: 10 }}>
          Timer: <strong>{formatTime(timer)}</strong>
        </div>
      )}

      <div style={{ marginBottom: 10 }}>Question {currentQuestion + 1} of {questions.length}</div>

      <div style={{ backgroundColor: "#ddd", height: 6, marginBottom: 20, borderRadius: 3 }}>
        <div style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%`, height: "100%", backgroundColor: "dodgerblue", borderRadius: 3 }}></div>
      </div>

      {!quizCompleted ? (
        <div>
          <h3 style={{ fontSize: "1.2rem", marginBottom: 20 }}>{questions[currentQuestion].question}</h3>
          {questions[currentQuestion].options.map((option, index) => {
            const optionLabel = String.fromCharCode(65 + index);
            const isSelected = selectedOption === index;
            const isCorrect = index === questions[currentQuestion].correct;
            let bg = "";
            if (showExplanation && isSelected) {
              bg = isCorrect ? "lightgreen" : "salmon";
            }
            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                style={{
                  ...buttonStyle,
                  backgroundColor: bg || buttonStyle.backgroundColor
                }}
                disabled={showExplanation}
              >
                <strong>{optionLabel}.</strong> {option}
              </button>
            );
          })}

          {showExplanation && (
            <div style={explanationBox}>
              <p>
                <strong>{selectedOption === questions[currentQuestion].correct ? "✅ Correct!" : "❌ Incorrect!"}</strong> {questions[currentQuestion].explanation}
              </p>
              <button onClick={nextQuestion} style={{ marginTop: 10 }}>Next</button>
            </div>
          )}
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h2>Quiz Completed!</h2>
          <p>✅ Correct Answers: {correctAnswers}</p>
          <p>❌ Incorrect Answers: {incorrectAnswers}</p>
          <button onClick={resetQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
}


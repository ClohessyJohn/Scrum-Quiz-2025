import React, { useState, useEffect } from "react";
import { questions as originalQuestions } from "./questions";
import "./App.css";

export default function App() {
  const [mode, setMode] = useState("landing");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [timer, setTimer] = useState(60 * 30); // 30 minutes
  const [answers, setAnswers] = useState([]);
  const tips = [
    "The Definition of Done creates shared understanding.",
    "Scrum thrives on empiricism: transparency, inspection, and adaptation.",
    "The Product Owner manages the Product Backlog.",
    "Daily Scrums are for the Developers to inspect and adapt.",
    "Sprint Retrospective fosters continuous improvement."
  ];
  const [randomTip, setRandomTip] = useState(tips[0]);

  useEffect(() => {
    if (mode !== "landing") {
      const shuffled = [...originalQuestions].sort(() => Math.random() - 0.5);
      setQuestions(shuffled);
    }
  }, [mode]);

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
    const isCorrect = index === questions[currentQuestion].correct;
    if (isCorrect) setCorrectAnswers((prev) => prev + 1);
    else setIncorrectAnswers((prev) => prev + 1);

    setAnswers((prev) => [
      ...prev,
      {
        question: questions[currentQuestion].question,
        selected: index,
        correct: questions[currentQuestion].correct,
        explanation: questions[currentQuestion].explanation,
        options: questions[currentQuestion].options
      }
    ]);

    // Shuffle tip
    const nextTip = tips[Math.floor(Math.random() * tips.length)];
    setRandomTip(nextTip);
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
    setTimer(60 * 30);
    setAnswers([]);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const percentage = Math.round((correctAnswers / questions.length) * 100);

  if (mode === "landing") {
    return (
      <div className={`app-container ${darkMode ? "dark" : ""}`} style={{ textAlign: "center", padding: 40 }}>
        <h1>Scrum Master Practice Quiz 2025</h1>
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
    <div className={`app-container ${darkMode ? "dark" : ""}`} style={{ maxWidth: 800, margin: "auto", padding: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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

      <div style={{ backgroundColor: "#eee", height: 6, marginBottom: 20 }}>
        <div style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%`, height: "100%", backgroundColor: "dodgerblue" }}></div>
      </div>

      {!quizCompleted ? (
        <div>
          <h3 style={{ fontSize: "1.2rem" }}><strong>{questions[currentQuestion].question}</strong></h3>
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
                  display: "block",
                  margin: "10px 0",
                  padding: "10px 15px",
                  width: "100%",
                  textAlign: "left",
                  backgroundColor: bg,
                  border: "1px solid #ccc",
                  fontSize: "1rem"
                }}
                disabled={showExplanation}
              >
                <strong>{optionLabel}.</strong> {option}
              </button>
            );
          })}

          {showExplanation && (
            <div className="explanation-box">
              <p>
                <strong>{selectedOption === questions[currentQuestion].correct ? "✅ Correct!" : "❌ Incorrect!"}</strong> {questions[currentQuestion].explanation}
              </p>
              <hr />
              <p><span role="img" aria-label="tip">💡</span> <strong>Tip:</strong> ✅ <em>{randomTip}</em></p>
              <button onClick={nextQuestion}>Next</button>
            </div>
          )}
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h2>✅ Quiz Completed!</h2>
          <p>✅ Correct Answers: {correctAnswers}</p>
          <p>❌ Incorrect Answers: {incorrectAnswers}</p>
          <p><strong>Your Score: {percentage}%</strong></p>
          {percentage >= 85 ? (
            <p style={{ color: "green" }}>⭐ You passed the quiz!</p>
          ) : (
            <p style={{ color: "crimson" }}>❗ Keep practicing to reach 85%.</p>
          )}

          <h3 style={{ textAlign: "left", marginTop: 40 }}>🔹 Review Answers
          </h3>
          {answers.map((ans, idx) => (
            <div key={idx} style={{ textAlign: "left", marginBottom: 20 }}>
              <p><strong>Q{idx + 1}:</strong> {ans.question}</p>
              <p>Your answer: <strong>{String.fromCharCode(65 + ans.selected)}. {ans.options[ans.selected]}</strong></p>
              <p>Correct answer: <strong>{String.fromCharCode(65 + ans.correct)}. {ans.options[ans.correct]}</strong></p>
              <p style={{ color: ans.selected === ans.correct ? "green" : "crimson" }}>
                {ans.selected === ans.correct ? "✅ Correct" : "❌ Incorrect"}
              </p>
              <p><em>{ans.explanation}</em></p>
              <hr />
            </div>
          ))}
          <button onClick={resetQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
}


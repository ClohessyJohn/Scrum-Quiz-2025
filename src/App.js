import React, { useState, useEffect } from "react";
import { questions as rawQuestions } from "./questions";

function shuffleArray(array) {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

export default function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizMode, setQuizMode] = useState("practice");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [missedQuestions, setMissedQuestions] = useState([]);
  const [showReview, setShowReview] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes
  const [darkMode, setDarkMode] = useState(false);

  const letterMap = ["A", "B", "C", "D"];

  useEffect(() => {
    if (quizStarted) {
      const preparedQuestions = rawQuestions.map((q) => {
        const shuffled = shuffleArray(q.options);
        return {
          ...q,
          shuffledOptions: shuffled,
          correctIndex: shuffled.indexOf(q.options[q.correct])
        };
      });
      setQuestions(preparedQuestions);
    }
  }, [quizStarted]);

  useEffect(() => {
    let timer;
    if (quizStarted && quizMode === "test" && !quizCompleted && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (quizMode === "test" && timeLeft === 0) {
      setQuizCompleted(true);
    }
    return () => clearTimeout(timer);
  }, [quizStarted, timeLeft, quizCompleted, quizMode]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleAnswer = (index) => {
    setSelectedOption(index);
    setShowExplanation(true);
    const currentQ = questions[currentQuestion];

    if (index === currentQ.correctIndex) {
      setCorrectAnswers((prev) => prev + 1);
    } else {
      setIncorrectAnswers((prev) => prev + 1);
      setMissedQuestions((prev) => [...prev, currentQ]);
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
    setQuizStarted(false);
    setQuestions([]);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setQuizCompleted(false);
    setMissedQuestions([]);
    setShowReview(false);
    setTimeLeft(30 * 60);
  };

  const progressPercentage = Math.round(((currentQuestion + 1) / questions.length) * 100);
  const themeClass = darkMode ? "dark" : "light";

  const downloadResults = () => {
    const text = missedQuestions.map((q, i) => `${i + 1}. ${q.question}\nCorrect Answer: ${q.options[q.correct]}\nExplanation: ${q.explanation}\n\n`).join('');
    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'scrum-quiz-results.txt';
    link.click();
  };

  return (
    <div className={`app-container ${themeClass}`} style={{ maxWidth: "700px", margin: "40px auto", fontFamily: "Arial, sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: 40 }}>
        <h1>Scrum Master Quiz 2025</h1>
        <p>Designed by John Clohessy · Not affiliated with Scrum.org</p>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{ marginTop: 10, padding: "5px 10px", cursor: "pointer" }}
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </header>

      {!quizStarted ? (
        <div style={{ textAlign: "center" }}>
          <p>Select a quiz mode to begin:</p>
          <button onClick={() => { setQuizMode("practice"); setQuizStarted(true); }}>Practice Mode</button>
          <button style={{ marginLeft: 10 }} onClick={() => { setQuizMode("test"); setQuizStarted(true); }}>Test Mode</button>
        </div>
      ) : !quizCompleted ? (
        questions.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              {quizMode === "test" && <span>Time Left: {formatTime(timeLeft)}</span>}
            </div>
            <div style={{ background: "#ccc", height: "8px", margin: "10px 0" }}>
              <div style={{ width: `${progressPercentage}%`, background: "#007bff", height: "100%" }}></div>
            </div>
            <h3>{questions[currentQuestion].question}</h3>
            {questions[currentQuestion].category && <p style={{ fontSize: "0.85rem", color: "#777" }}>[{questions[currentQuestion].category}]</p>}
            {questions[currentQuestion].shuffledOptions.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                style={{ display: "block", margin: "10px 0" }}
              >
                <strong>{letterMap[idx]}.</strong> {opt}
              </button>
            ))}
            {quizMode === "practice" && showExplanation && (
              <div style={{ backgroundColor: "#f0f0f0", padding: "10px", marginTop: "10px" }}>
                <p><strong>Explanation:</strong> {questions[currentQuestion].explanation}</p>
                <button onClick={nextQuestion}>Next</button>
              </div>
            )}
            {quizMode === "test" && selectedOption !== null && (
              <button onClick={nextQuestion} style={{ marginTop: 10 }}>Next</button>
            )}
          </div>
        )
      ) : !showReview ? (
        <div style={{ textAlign: "center" }}>
          <h2>Quiz Complete</h2>
          <p>Correct: {correctAnswers} | Incorrect: {incorrectAnswers}</p>
          <p>Score: {Math.round((correctAnswers / questions.length) * 100)}%</p>
          <button onClick={() => setShowReview(true)}>Review Missed Questions</button>
          <button onClick={downloadResults} style={{ marginLeft: 10 }}>Download Results</button>
          <button onClick={resetQuiz} style={{ marginLeft: 10 }}>Start Over</button>
        </div>
      ) : (
        <div>
          <h2>Review Missed Questions</h2>
          {missedQuestions.map((q, i) => (
            <div key={i} style={{ border: "1px solid #ddd", padding: 10, marginBottom: 10 }}>
              <p><strong>{q.question}</strong></p>
              <p><strong>Correct Answer:</strong> {q.options[q.correct]}</p>
              <p>{q.explanation}</p>
            </div>
          ))}
          <div style={{ textAlign: "center" }}>
            <button onClick={resetQuiz}>Back to Start</button>
          </div>
        </div>
      )}
    </div>
  );
}

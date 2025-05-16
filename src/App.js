// NOTE: Due to length, this file is large. Please indicate if you'd like it in a downloadable format instead.

import React, { useState, useEffect } from "react";
import { questions as originalQuestions } from "./questions";
import "./App.css";

export default function App() {
  const [mode, setMode] = useState("landing");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [submittedQuestions, setSubmittedQuestions] = useState(new Set());
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [timer, setTimer] = useState(60 * 60); // 60 minutes
  const [answers, setAnswers] = useState([]);
  const [shuffled, setShuffled] = useState(false);

  useEffect(() => {
    if (!originalQuestions || originalQuestions.length === 0) return;
    if (mode !== "landing" && !shuffled) {
      const shuffledQuestions = [...originalQuestions].sort(() => Math.random() - 0.5);
      setQuestions(shuffledQuestions);
      setShuffled(true);
    }
  }, [mode, shuffled]);

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

  const currentQ = questions[currentQuestion];
  const isMultiCorrect = (q) => Array.isArray(q?.correct);
  const formatTime = (seconds) => `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
  const percentage = questions.length ? Math.round((correctAnswers / questions.length) * 100) : 0;
  const isSubmitted = submittedQuestions.has(currentQuestion);

  const handleSelect = (index) => {
    if (isSubmitted) return;
    const isMulti = isMultiCorrect(currentQ);
    const currentSelections = selectedOptions[currentQuestion] || [];

    let updatedSelections;
    if (isMulti) {
      updatedSelections = currentSelections.includes(index)
        ? currentSelections.filter(i => i !== index)
        : [...currentSelections, index];
    } else {
      updatedSelections = [index];
    }

    setSelectedOptions(prev => ({ ...prev, [currentQuestion]: updatedSelections }));
  };

  const submitAnswer = () => {
    if (!currentQ) return;
    const userSelection = selectedOptions[currentQuestion] || [];
    const correct = Array.isArray(currentQ.correct) ? currentQ.correct : [currentQ.correct];

    const isCorrect = userSelection.length === correct.length &&
      userSelection.every((val) => correct.includes(val));

    setAnswers(prev => [
      ...prev,
      {
        question: currentQ.question,
        selected: userSelection,
        correct,
        explanation: currentQ.explanation,
        options: currentQ.options
      }
    ]);

    setSubmittedQuestions(prev => new Set([...prev, currentQuestion]));
    isCorrect ? setCorrectAnswers((c) => c + 1) : setIncorrectAnswers((c) => c + 1);
  };

  const goToNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const goToPrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const skipQuestion = () => {
    goToNext();
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOptions({});
    setSubmittedQuestions(new Set());
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setQuizCompleted(false);
    setTimer(60 * 60);
    setAnswers([]);
    setShuffled(false);
  };

  if (mode === "landing") {
    return (
      <div className={`app-container ${darkMode ? "dark" : ""}`} style={{ textAlign: "center", padding: 40 }}>
        <h1>Scrum Master Practice Quiz 2025</h1>
        <p>This quiz helps prepare for the PSM I certification by reinforcing Scrum concepts.</p>
        <button className="primary-btn" onClick={() => setMode("test")}>Start Quiz</button>
      </div>
    );
  }

  if (!currentQ && !quizCompleted) {
    return <div>Error loading question</div>;
  }

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`} style={{ maxWidth: 800, margin: "auto", padding: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Scrum Master Practice Quiz 2025</h2>
        <div>
          <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? "☀ Light" : "🌙 Dark"}</button>
        </div>
      </div>

      {mode === "test" && !quizCompleted && (
        <div style={{ textAlign: "right" }}>Timer: <strong>{formatTime(timer)}</strong></div>
      )}

      <div>Question {currentQuestion + 1} of {questions.length}</div>
      <div style={{ background: "#ccc", height: 6, marginBottom: 20 }}>
        <div style={{
          width: `${((currentQuestion + 1) / questions.length) * 100}%`,
          background: "dodgerblue", height: "100%"
        }} />
      </div>

      <h3>{currentQ.question}</h3>
      {isMultiCorrect(currentQ) && !isSubmitted && (
        <p style={{ fontStyle: "italic", color: "#666" }}>Select all that apply</p>
      )}

      {currentQ.options.map((opt, i) => {
        const isSelected = (selectedOptions[currentQuestion] || []).includes(i);
        const correct = Array.isArray(currentQ.correct) ? currentQ.correct.includes(i) : currentQ.correct === i;
        const show = isSubmitted;

        let bg = "";
        if (show) {
          bg = correct ? "lightgreen" : isSelected ? "salmon" : "";
        } else if (isSelected) {
          bg = "#f0f0f0";
        }

        return (
          <button
            key={i}
            disabled={show}
            onClick={() => handleSelect(i)}
            style={{
              display: "block",
              margin: "10px 0",
              padding: 10,
              fontWeight: isSelected ? "bold" : "normal",
              backgroundColor: bg,
              border: "1px solid #ccc",
              width: "100%",
              textAlign: "left"
            }}
          >
            <strong>{String.fromCharCode(65 + i)}.</strong> {opt}
          </button>
        );
      })}

      {!isSubmitted && (
        <button onClick={submitAnswer} className="primary-btn" style={{ marginTop: 20 }}>
          Submit Answer
        </button>
      )}

      {isSubmitted && (
        <div className="explanation-box">
          <p>
            <strong>
              {(Array.isArray(currentQ.correct)
                ? JSON.stringify((selectedOptions[currentQuestion] || []).sort()) === JSON.stringify(currentQ.correct.sort())
                : (selectedOptions[currentQuestion] || [])[0] === currentQ.correct)
                ? "✅ Correct!"
                : "❌ Incorrect!"
              }
            </strong> {currentQ.explanation}
          </p>
        </div>
      )}

      <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
        <button onClick={goToPrevious} disabled={currentQuestion === 0}>⬅ Back</button>
        <button onClick={skipQuestion}>⏩ Skip</button>
        <button onClick={goToNext}>Next ➡</button>
      </div>

      {quizCompleted && (
        <div style={{ marginTop: 40, textAlign: "center" }}>
          <h2>✅ Quiz Completed!</h2>
          <p>✅ Correct Answers: {correctAnswers}</p>
          <p>❌ Incorrect Answers: {incorrectAnswers}</p>
          <p><strong>Your Score: {percentage}%</strong></p>
          <button onClick={resetQuiz} className="primary-btn">Restart Quiz</button>
        </div>
      )}
    </div>
  );
}

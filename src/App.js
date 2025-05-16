import React, { useState, useEffect } from "react";
import { questions as originalQuestions } from "./questions";
import "./App.css";

export default function App() {
  const [mode, setMode] = useState("landing");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [timer, setTimer] = useState(60 * 60);
  const [answers, setAnswers] = useState([]);
  const [shuffled, setShuffled] = useState(false);
  const [bookmarked, setBookmarked] = useState([]);
  const [answeredIndexes, setAnsweredIndexes] = useState([]);

  const tips = [
    "The Definition of Done creates shared understanding.",
    "Scrum thrives on empiricism: transparency, inspection, and adaptation.",
    "The Product Owner manages the Product Backlog.",
    "Daily Scrums are for the Developers to inspect and adapt.",
    "Sprint Retrospective fosters continuous improvement."
  ];
  const [randomTip, setRandomTip] = useState(tips[0]);

  const isMultiCorrect = (q) => Array.isArray(q?.correct);
  const isBoolean = (q) => q?.type === "boolean";

  const findDuplicateQuestions = (questions) => {
    const duplicates = [];
    const seen = new Map();
    questions.forEach((q, index) => {
      const key = `${q.question}|${(q.options || []).join("|")}|${JSON.stringify(q.correct)}`;
      if (seen.has(key)) {
        duplicates.push({ index, duplicateWith: seen.get(key), question: q });
      } else {
        seen.set(key, index);
      }
    });
    return duplicates;
  };

  useEffect(() => {
    if (!originalQuestions || originalQuestions.length === 0) {
      console.error("No questions loaded.");
      return;
    }
    const duplicates = findDuplicateQuestions(originalQuestions);
    if (duplicates.length > 0) {
      console.warn("Duplicates found:", duplicates);
    }
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

  const handleAnswer = (index) => {
    const q = questions[currentQuestion];
    if (!q || showExplanation) return;
    const isMulti = isMultiCorrect(q);
    if (isMulti) {
      const alreadySelected = selectedOption.includes(index);
      const updated = alreadySelected
        ? selectedOption.filter((i) => i !== index)
        : [...selectedOption, index];
      setSelectedOption(updated);
    } else {
      const isCorrect = index === q.correct;
      setSelectedOption([index]);
      recordAnswer(q, [index], isCorrect);
    }
  };

  const submitMultiAnswer = () => {
    const q = questions[currentQuestion];
    if (!q || selectedOption.length === 0) return;
    const isCorrect =
      selectedOption.length === q.correct.length &&
      selectedOption.every((val) => q.correct.includes(val));
    recordAnswer(q, selectedOption, isCorrect);
  };

  const recordAnswer = (q, selected, isCorrect) => {
    setAnswers((prev) => [
      ...prev,
      {
        question: q.question,
        selected,
        correct: q.correct,
        explanation: q.explanation,
        options: q.options
      }
    ]);
    setAnsweredIndexes((prev) =>
      prev.includes(currentQuestion) ? prev : [...prev, currentQuestion]
    );
    isCorrect ? setCorrectAnswers((c) => c + 1) : setIncorrectAnswers((c) => c + 1);
    setShowExplanation(true);
    setRandomTip(tips[Math.floor(Math.random() * tips.length)]);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption([]);
      setShowExplanation(answeredIndexes.includes(currentQuestion + 1));
    } else {
      setQuizCompleted(true);
    }
  };

  const toggleBookmark = (index) => {
    setBookmarked((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption([]);
    setShowExplanation(false);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setQuizCompleted(false);
    setTimer(60 * 60);
    setAnswers([]);
    setShuffled(false);
    setBookmarked([]);
    setAnsweredIndexes([]);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const currentQ = questions[currentQuestion] || null;
  const isMulti = currentQ ? isMultiCorrect(currentQ) : false;
  const percentage = questions.length > 0 ? Math.round((correctAnswers / questions.length) * 100) : 0;

  if (mode === "landing") {
    return (
      <div className={`app-container ${darkMode ? "dark" : ""}`} style={{ textAlign: "center", padding: 40 }}>
        <h1>Scrum Master Practice Quiz 2025</h1>
        <p>Designed by <strong>John Clohessy</strong></p>
        <p style={{ fontSize: "0.9rem", color: "#777" }}>
          This quiz is <strong>not affiliated</strong> with Scrum.org or any certification body.  
          It's built to help reinforce Scrum knowledge in an independent learning format.
        </p>
        <button onClick={() => setMode("practice")} className="primary-btn" style={{ marginTop: 30 }}>
          Start Quiz
        </button>
      </div>
    );
  }

  if (mode !== "landing" && questions.length === 0) {
    return (
      <div className={`app-container ${darkMode ? "dark" : ""}`} style={{ padding: 40 }}>
        <h2>Loading questions...</h2>
      </div>
    );
  }

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`} style={{ maxWidth: 800, margin: "auto", padding: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
        <h2>Scrum Master Practice Quiz 2025</h2>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => setMode("practice")}>Practice</button>
          <button onClick={() => { resetQuiz(); setMode("test"); }}>Test</button>
          <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? "☀ Light" : "🌙 Dark"}</button>
        </div>
      </div>

      {mode === "test" && !quizCompleted && (
        <div style={{ textAlign: "right" }}>Timer: <strong>{formatTime(timer)}</strong></div>
      )}

      <div style={{ marginBottom: 10 }}>Question {currentQuestion + 1} of {questions.length}</div>

      {!quizCompleted && currentQ ? (
        <div>
          <h3>{currentQ.question} {isBoolean(currentQ) && <span>(True/False)</span>}</h3>

          {isMulti && !showExplanation && (
            <p style={{ fontStyle: "italic", color: "#666", marginBottom: "1em" }}>
              Select all that apply
            </p>
          )}

          {currentQ.options.map((option, index) => {
            const isSelected = selectedOption.includes(index);
            const isCorrect = isMulti ? currentQ.correct.includes(index) : index === currentQ.correct;
            let bg = "";
            let fontWeight = "normal";
            if (!showExplanation && isSelected) {
              bg = "#f0f0f0";
              fontWeight = "bold";
            } else if (showExplanation && isSelected) {
              bg = isCorrect ? "lightgreen" : "salmon";
              fontWeight = "bold";
            }
            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                style={{
                  display: "block",
                  margin: "10px 0",
                  backgroundColor: bg,
                  fontWeight: fontWeight,
                  padding: 10,
                  border: "1px solid #ccc",
                  fontSize: "1rem",
                  textAlign: "left"
                }}
                disabled={showExplanation}
              >
                <strong>{String.fromCharCode(65 + index)}.</strong> {option}
              </button>
            );
          })}

          {isMulti && !showExplanation && (
            <button
              onClick={submitMultiAnswer}
              className="primary-btn"
              style={{ marginTop: 10 }}
              disabled={selectedOption.length === 0}
            >
              Submit Answer
            </button>
          )}

          {showExplanation && (
            <div className="explanation-box">
              <p>
                <strong>
                  {isMulti
                    ? selectedOption.sort().toString() === currentQ.correct.sort().toString()
                      ? "✅ Correct!"
                      : "❌ Incorrect!"
                    : selectedOption[0] === currentQ.correct
                      ? "✅ Correct!"
                      : "❌ Incorrect!"}
                </strong> {currentQ.explanation}
              </p>
              <p><strong>Tip:</strong> 💡 {randomTip}</p>
            </div>
          )}

          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 10 }}>
            <button
              onClick={() => toggleBookmark(currentQuestion)}
              style={{
                backgroundColor: bookmarked.includes(currentQuestion) ? "#ffd700" : "#ccc",
                padding: "6px 12px",
                border: "none",
                borderRadius: "4px"
              }}
            >
              {bookmarked.includes(currentQuestion) ? "★ Bookmarked" : "☆ Bookmark"}
            </button>

            <span style={{ fontSize: "0.9rem", color: "#666" }}>
              {answeredIndexes.includes(currentQuestion) ? "Answered" : "Unanswered"}
            </span>
          </div>

          <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
            <button
              onClick={() => {
                if (currentQuestion > 0) {
                  setCurrentQuestion(currentQuestion - 1);
                  setSelectedOption([]);
                  setShowExplanation(answeredIndexes.includes(currentQuestion - 1));
                }
              }}
              disabled={currentQuestion === 0}
            >
              ← Back
            </button>

            <button
              onClick={nextQuestion}
              disabled={currentQuestion >= questions.length - 1}
            >
              Next →
            </button>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 20 }}>
            {questions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentQuestion(idx);
                  setShowExplanation(answeredIndexes.includes(idx));
                  setSelectedOption([]);
                }}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 4,
                  backgroundColor: answeredIndexes.includes(idx) ? "lightgreen" : "#eee",
                  border: bookmarked.includes(idx) ? "2px solid gold" : "1px solid #ccc",
                  fontWeight: currentQuestion === idx ? "bold" : "normal"
                }}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
      ) : quizCompleted ? (
        <div style={{ textAlign: "center" }}>
          <h2>✅ Quiz Completed!</h2>
          <p>✅ Correct Answers: {correctAnswers}</p>
          <p>❌ Incorrect Answers: {incorrectAnswers}</p>
          <p><strong>Your Score: {percentage}%</strong></p>
          {percentage >= 85
            ? <p style={{ color: "green" }}>⭐ You passed the quiz!</p>
            : <p style={{ color: "crimson" }}>❗ Keep practicing to reach 85%.</p>
          }

          <h3 style={{ textAlign: "left", marginTop: 40 }}>🔹 Review Answers</h3>
          {answers.map((ans, idx) => (
            <div key={idx} style={{ textAlign: "left", marginBottom: 20 }}>
              <p><strong>Q{idx + 1}:</strong> {ans.question}</p>
              <p>Your answer: <strong>{ans.selected.map(i => `${String.fromCharCode(65 + i)}. ${ans.options[i]}`).join(", ")}</strong></p>
              <p>Correct answer: <strong>{(Array.isArray(ans.correct) ? ans.correct : [ans.correct]).map(i => `${String.fromCharCode(65 + i)}. ${ans.options[i]}`).join(", ")}</strong></p>
              <p style={{ color: JSON.stringify(ans.selected.sort()) === JSON.stringify((Array.isArray(ans.correct) ? ans.correct : [ans.correct]).sort()) ? "green" : "crimson" }}>
                {JSON.stringify(ans.selected.sort()) === JSON.stringify((Array.isArray(ans.correct) ? ans.correct : [ans.correct]).sort()) ? "✅ Correct" : "❌ Incorrect"}
              </p>
              <p><em>{ans.explanation}</em></p>
              <hr />
            </div>
          ))}
          <button onClick={resetQuiz}>Restart Quiz</button>
        </div>
      ) : null}
    </div>
  );
}

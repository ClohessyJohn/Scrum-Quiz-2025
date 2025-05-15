
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

  const tips = [
    "The Definition of Done creates shared understanding.",
    "Scrum thrives on empiricism: transparency, inspection, and adaptation.",
    "The Product Owner manages the Product Backlog.",
    "Daily Scrums are for the Developers to inspect and adapt.",
    "Sprint Retrospective fosters continuous improvement."
  ];
  const [randomTip, setRandomTip] = useState(tips[0]);

  useEffect(() => {
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

  const isMultiCorrect = (q) => Array.isArray(q?.correct);
  const isBoolean = (q) => q?.type === "boolean";

  const handleAnswer = (index) => {
    const q = questions[currentQuestion];
    if (!q) return;
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
      setShowExplanation(true);
      isCorrect ? setCorrectAnswers((c) => c + 1) : setIncorrectAnswers((c) => c + 1);
      setAnswers((prev) => [
        ...prev,
        {
          question: q.question,
          selected: [index],
          correct: q.correct,
          explanation: q.explanation,
          options: q.options
        }
      ]);
      setRandomTip(tips[Math.floor(Math.random() * tips.length)]);
    }
  };

  const submitMultiAnswer = () => {
    const q = questions[currentQuestion];
    if (!q) return;
    const isCorrect =
      selectedOption.length === q.correct.length &&
      selectedOption.every((val) => q.correct.includes(val));
    isCorrect ? setCorrectAnswers((c) => c + 1) : setIncorrectAnswers((c) => c + 1);
    setAnswers((prev) => [
      ...prev,
      {
        question: q.question,
        selected: selectedOption,
        correct: q.correct,
        explanation: q.explanation,
        options: q.options
      }
    ]);
    setShowExplanation(true);
    setRandomTip(tips[Math.floor(Math.random() * tips.length)]);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setSelectedOption([]);
      setShowExplanation(false);
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption([]);
    setShowExplanation(false);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setQuizCompleted(false);
    setTimer(60 * 30);
    setAnswers([]);
    setShuffled(false);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const percentage = Math.round((correctAnswers / questions.length) * 100);
  const currentQ = questions[currentQuestion] || null;
  const isMulti = currentQ ? isMultiCorrect(currentQ) : false;

  if (mode === "landing") {
    return (
      <div className={`app-container ${darkMode ? "dark" : ""}`} style={{ textAlign: "center", padding: 40 }}>
        <h1>Scrum Master Practice Quiz 2025</h1>
        <p>Designed by <strong>John Clohessy</strong> • Not affiliated with Scrum.org</p>
        <p>This quiz helps prepare for the PSM I certification by reinforcing Scrum concepts.</p>
        <div style={{ marginTop: 30 }}>
          <button onClick={() => setMode("practice")} className="primary-btn">Start Quiz</button>
        </div>
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

      <div style={{ backgroundColor: "#eee", height: 6, marginBottom: 20 }}>
        <div style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%`, height: "100%", backgroundColor: "dodgerblue" }}></div>
      </div>

      {!quizCompleted && currentQ ? (
        <div>
          <h3>{currentQ.question}</h3>
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
                disabled={showExplanation && !isMulti}
              >
                <strong>{String.fromCharCode(65 + index)}.</strong> {option}
              </button>
            );
          })}

          {isMulti && !showExplanation && (
            <button onClick={submitMultiAnswer} className="primary-btn" style={{ marginTop: 10 }}>Submit Answer</button>
          )}

          {showExplanation && (
            <div className="explanation-box">
              <p>
                <strong>
                  {isMulti
                    ? selectedOption.every((i) => currentQ.correct.includes(i)) && selectedOption.length === currentQ.correct.length
                      ? "✅ Correct!"
                      : "❌ Incorrect!"
                    : selectedOption[0] === currentQ.correct
                      ? "✅ Correct!"
                      : "❌ Incorrect!"}
                </strong> {currentQ.explanation}
              </p>
              <p><strong>Tip:</strong> 💡 {randomTip}</p>
              <button onClick={nextQuestion}>Next</button>
            </div>
          )}
        </div>
      ) : quizCompleted ? (
        <div style={{ textAlign: "center" }}>
          <h2>✅ Quiz Completed!</h2>
          <p>✅ Correct Answers: {correctAnswers}</p>
          <p>❌ Incorrect Answers: {incorrectAnswers}</p>
          <p><strong>Your Score: {percentage}%</strong></p>
          {percentage >= 85 ? <p style={{ color: "green" }}>⭐ You passed the quiz!</p> : <p style={{ color: "crimson" }}>❗ Keep practicing to reach 85%.</p>}

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

import React, { useState, useEffect } from "react";
import { questions } from "./questions";

export default function App() {
  const [mode, setMode] = useState(null); // 'practice' or 'test'
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(2400); // 40 minutes in seconds

  useEffect(() => {
    if (mode === "test" && !quizCompleted) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setQuizCompleted(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [mode, quizCompleted]);

  const handleAnswer = (index) => {
    if (selectedOption !== null) return;
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

  const startQuiz = (selectedMode) => {
    setMode(selectedMode);
    setCurrentQuestion(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setSelectedOption(null);
    setQuizCompleted(false);
    setTimeLeft(2400);
  };

  const formatTime = (secs) => {
    const min = Math.floor(secs / 60);
    const sec = secs % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  if (!mode) {
    return (
      <div style={{ padding: 30, textAlign: "center" }}>
        <h1>Scrum Master Quiz 2025</h1>
        <p>
          This free quiz is based on the latest Scrum Guide and designed to help
          Agile professionals study for the PSM I exam.
        </p>
        <p><strong>Note:</strong> This site is not affiliated with Scrum.org.</p>
        <button onClick={() => startQuiz("practice")}>Practice Mode</button>
        <button onClick={() => startQuiz("test")} style={{ marginLeft: 10 }}>
          Test Mode
        </button>
      </div>
    );
  }

  if (quizCompleted) {
    return (
      <div style={{ padding: 30, textAlign: "center" }}>
        <h2>✅ Quiz Completed!</h2>
        <p>Correct: {correctAnswers}</p>
        <p>Incorrect: {incorrectAnswers}</p>
        <button onClick={() => setMode(null)}>Back to Start</button>
      </div>
    );
  }

  const letters = ["A", "B", "C", "D"];

  return (
    <div style={{ padding: 30, maxWidth: 800, margin: "auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>
          Question {currentQuestion + 1} of {questions.length}
        </h3>
        {mode === "test" && <h3>⏱️ {formatTime(timeLeft)}</h3>}
      </div>

      <h2>{questions[currentQuestion].question}</h2>
      {questions[currentQuestion].options.map((option, index) => {
        const isCorrect = index === questions[currentQuestion].correct;
        const isSelected = selectedOption === index;

        const backgroundColor =
          selectedOption !== null && isSelected
            ? isCorrect
              ? "lightgreen"
              : "salmon"
            : "#f0f0f0";

        return (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            style={{
              display: "block",
              width: "100%",
              marginBottom: 10,
              padding: "10px 20px",
              backgroundColor,
              border: "1px solid #ccc",
              borderRadius: 4,
              textAlign: "left",
              fontSize: 16,
              fontWeight: "normal"
            }}
          >
            <strong>{letters[index]}.</strong> {option}
          </button>
        );
      })}

      {mode === "practice" && showExplanation && (
        <div style={{ marginTop: 20, backgroundColor: "#eee", padding: 20 }}>
          <p>
            <strong>Explanation: </strong>
            {questions[currentQuestion].explanation}
          </p>
        </div>
      )}

      {showExplanation || mode === "test" ? (
        <button onClick={nextQuestion} style={{ marginTop: 20 }}>
          {currentQuestion < questions.length - 1 ? "Next" : "Finish"}
        </button>
      ) : null}
    </div>
  );
}



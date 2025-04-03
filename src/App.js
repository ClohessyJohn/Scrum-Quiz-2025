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
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [missedQuestions, setMissedQuestions] = useState([]);
  const [showReview, setShowReview] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes

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
    if (quizStarted && !quizCompleted && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      setQuizCompleted(true);
    }
    return () => clearTimeout(timer);
  }, [quizStarted, timeLeft, quizCompleted]);

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
    setTimeLeft(60 * 60);
  };

  const progressPercentage = Math.round(((currentQuestion + 1) / questions.length) * 100);

  return (
    <div style={{ maxWidth: "700px", margin: "40px auto", fontFamily: "Arial, sans-serif" }}>
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
        questions.length === 0 ? (
          <p>Loading questions...</p>
        ) : (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
              <p style={{ fontSize: "0.95rem", color: "#888" }}>
                Question {currentQuestion + 1} of {questions.length}
              </p>
              <p style={{ fontSize: "0.95rem", color: "#e63946" }}>
                Time Left: {formatTime(timeLeft)}
              </p>
            </div>
            <div style={{ background: "#eee", borderRadius: 5, overflow: "hidden", marginBottom: 20 }}>
              <div
                style={{
                  width: `${progressPercentage}%`,
                  height: "8px",
                  backgroundColor: "#007bff",
                  transition: "width 0.3s ease"
                }}
              ></div>
            </div>
            <h2 style={{ marginBottom: 15 }}>{questions[currentQuestion].question}</h2>
            {questions[currentQuestion].shuffledOptions.map((option, index) => (
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
                      ? index === questions[currentQuestion].correctIndex
                        ? "#d4edda"
                        : "#f8d7da"
                      : "#f0f0f0",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  cursor: "pointer",
                  textAlign: "left"
                }}
              >
                <strong>{letterMap[index]}.</strong> {option}
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
                  {selectedOption === questions[currentQuestion].correctIndex
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
        )
      ) : !showReview ? (
        <div style={{ textAlign: "center" }}>
          <h2>🎉 Quiz Completed!</h2>
          <p>✅ Correct Answers: {correctAnswers}</p>
          <p>❌ Incorrect Answers: {incorrectAnswers}</p>
          <p style={{ marginTop: 20, fontWeight: "bold" }}>
            Final Score: {Math.round((correctAnswers / questions.length) * 100)}%
          </p>

          {missedQuestions.length > 0 && (
            <button
              onClick={() => setShowReview(true)}
              style={{
                marginTop: "20px",
                marginRight: "10px",
                padding: "10px 20px",
                backgroundColor: "#ffc107",
                color: "#000",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Review Missed Questions
            </button>
          )}

          <button
            onClick={resetQuiz}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Retake Quiz
          </button>
        </div>
      ) : (
        <div>
          <h2 style={{ textAlign: "center" }}>📘 Review: Missed Questions</h2>
          {missedQuestions.map((q, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                padding: 20,
                margin: "20px 0",
                borderRadius: 8,
                border: "1px solid #ddd"
              }}
            >
              <h4>{q.question}</h4>
              <p><strong>Correct Answer:</strong> {q.options[q.correct]}</p>
              <p style={{ fontSize: "0.95rem", color: "#555" }}>{q.explanation}</p>
            </div>
          ))}
          <div style={{ textAlign: "center" }}>
            <button
              onClick={resetQuiz}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Back to Start
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


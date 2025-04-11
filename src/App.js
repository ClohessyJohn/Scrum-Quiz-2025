
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
  const [timer, setTimer] = useState(60 * 30);
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
      setQuestions(shuffled); // Ensure all 80 shuffled, no slicing
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
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return \`\${m}:\${s}\`;
  };

  const percentage = Math.round((correctAnswers / questions.length) * 100);
  const currentQ = questions[currentQuestion] || null;
  const isMulti = currentQ ? isMultiCorrect(currentQ) : false;

  return (
    <div className={\`app-container \${darkMode ? "dark" : ""}\`} style={{ maxWidth: 800, margin: "auto", padding: 20 }}>
      {/* UI continues here... (truncated for brevity) */}
    </div>
  );
}

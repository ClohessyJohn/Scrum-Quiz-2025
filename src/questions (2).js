export const questions = [
  {
    question: "Which of the following is the responsibility of a Scrum Master?",
    options: [
      "Assigning tasks to developers during the Sprint.",
      "Ensuring the Scrum Team follows Scrum theory, practices, and rules.",
      "Writing user stories and prioritizing the Product Backlog.",
      "Approving the final product increment before it is delivered."
    ],
    correct: 1,
    explanation: "The Scrum Master ensures that the Scrum Team follows Scrum principles, helps remove impediments, and coaches the team to adopt Agile values."
  },
  {
    question: "When does a Sprint officially end?",
    options: [
      "When the timebox expires.",
      "When all Product Backlog items are completed.",
      "When the Product Owner decides to end it.",
      "When the Scrum Master determines the team has delivered enough value."
    ],
    correct: 0,
    explanation: "A Sprint officially ends when the timebox expires, regardless of whether all tasks are completed. The team adapts unfinished work in future sprints."
  },
  {
    question: "What are the three pillars of Scrum?",
    options: [
      "Commitment, Focus, Respect",
      "Transparency, Inspection, Adaptation",
      "Planning, Execution, Review",
      "Sprint Planning, Sprint Review, Sprint Retrospective"
    ],
    correct: 1,
    explanation: "Scrum is founded on empirical process control and has three pillars: Transparency, Inspection, and Adaptation."
  },
  {
    question: "Who is responsible for managing the Product Backlog?",
    options: [
      "Scrum Master",
      "Product Owner",
      "Developers",
      "Stakeholders"
    ],
    correct: 1,
    explanation: "The Product Owner is responsible for managing the Product Backlog by defining priorities and ensuring it reflects the needs of the stakeholders."
  },
  {
    question: "Which of the following best describes the purpose of the Sprint Review?",
    options: [
      "To check if the Sprint Goal was met and showcase the work done.",
      "To conduct a formal meeting where all tasks must be signed off.",
      "To document everything that happened in the Sprint.",
      "To allow the Scrum Master to assign the next Sprint's tasks."
    ],
    correct: 0,
    explanation: "The Sprint Review is an opportunity for the Scrum Team and stakeholders to inspect the work done and adapt the Product Backlog if needed."
  },
  {
    question: "True or False: Scrum requires the use of User Stories to describe Product Backlog items.",
    options: ["True", "False"],
    correct: 1,
    type: "boolean",
    explanation: "Scrum does not prescribe any specific format like User Stories. It focuses on value and clarity, but the format is flexible."
  },
  {
    question: "Select the roles defined in Scrum:",
    options: ["Product Owner", "Project Manager", "Scrum Master", "Developers"],
    correct: [0, 2, 3],
    type: "multi",
    explanation: "Scrum defines three roles: Product Owner, Scrum Master, and Developers. Project Manager is not a Scrum role."
  },
  {
    question: "Who is responsible for creating the Definition of Done?",
    options: ["Product Owner", "Scrum Master", "Developers", "Stakeholders"],
    correct: 2,
    explanation: "The Developers define the Definition of Done to ensure shared understanding and quality."
  },
  {
    question: "True or False: The Sprint Backlog can change during a Sprint.",
    options: ["True", "False"],
    correct: 0,
    type: "boolean",
    explanation: "Yes, the Sprint Backlog is owned by Developers and can evolve as they learn more about the work."
  },
  {
    question: "What are valid outcomes of a Sprint Review? (Select all that apply)",
    options: [
      "Adjustments to the Product Backlog",
      "Approval of team bonuses",
      "Feedback from stakeholders",
      "Decision to cancel future Sprints"
    ],
    correct: [0, 2],
    type: "multi",
    explanation: "Sprint Reviews are about inspection and adaptation, not performance reviews or cancellations."
  }
];

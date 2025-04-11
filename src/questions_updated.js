export const questions = [
  {
    question: "A stakeholder repeatedly interrupts Sprint Reviews with last-minute change requests. What is the Scrum Master's best response?",
    options: [
      "Allow the changes to be considered immediately",
      "Remind stakeholders of the Sprint boundary and review purpose",
      "Coach the Product Owner to manage stakeholder expectations",
      "Cancel the review until the stakeholder agrees to the format"
    ],
    correct: [1, 2],
    type: "multi",
    explanation: "B and C demonstrate the Scrum Master’s coaching and facilitation role. A undermines the Sprint boundary, and D is too extreme."
  },
  {
    question: "True or False: The Scrum Master is responsible for the team's delivery velocity.",
    options: ["True", "False"],
    correct: 1,
    type: "boolean",
    explanation: "The Scrum Master facilitates continuous improvement but does not manage velocity, which is a metric owned by the Developers."
  },
  {
    question: "During a Retrospective, team members are reluctant to speak. What should the Scrum Master do?",
    options: [
      "Introduce anonymous feedback tools",
      "End the session early",
      "Use facilitation techniques to create psychological safety",
      "Report the team’s silence to upper management"
    ],
    correct: [0, 2],
    type: "multi",
    explanation: "Anonymous input and improved facilitation build trust. Ending early avoids the issue, and escalating undermines team autonomy."
  },
  {
    question: "A Product Owner insists on reassigning unfinished work mid-Sprint. What should the Scrum Master do?",
    options: [
      "Coach the PO on Sprint stability",
      "Allow the changes if the Developers agree",
      "Remind the team that scope is frozen during the Sprint",
      "Escalate to senior leadership"
    ],
    correct: [0, 2],
    type: "multi",
    explanation: "Sprint scope should not change arbitrarily. Coaching and reinforcement of Scrum principles are the correct approaches."
  },
  {
    question: "True or False: The Scrum Master should intervene when Developers argue about task estimates during Daily Scrum.",
    options: ["True", "False"],
    correct: 1,
    type: "boolean",
    explanation: "Daily Scrum is for Developers. The Scrum Master only intervenes if the team strays from purpose or requests help."
  },
  {
    question: "Which of the following indicate a strong coaching mindset by a Scrum Master?",
    options: [
      "Asking powerful, open-ended questions",
      "Setting team deadlines",
      "Observing without dominating conversations",
      "Providing solutions before listening"
    ],
    correct: [0, 2],
    type: "multi",
    explanation: "A coaching approach emphasizes listening and facilitation, not control or direction."
  },
  {
    question: "A team consistently finishes work early and spends the rest of the Sprint idle. What’s the Scrum Master's best approach?",
    options: [
      "Help them improve forecasting",
      "Encourage pulling in additional work from the Product Backlog",
      "Extend the Sprint",
      "Reduce the team size"
    ],
    correct: [0, 1],
    type: "multi",
    explanation: "Improving planning and optionally pulling in more work maintains flow. Changing team size or Sprint length is not appropriate."
  },
  {
    question: "True or False: A Scrum Master should protect the team from all outside communication during the Sprint.",
    options: ["True", "False"],
    correct: 1,
    type: "boolean",
    explanation: "The Scrum Master protects the team from disruption, but not healthy collaboration or transparency."
  },
  {
    question: "What should a Scrum Master do when multiple teams need to coordinate on a shared product?",
    options: [
      "Enforce a single Sprint schedule for all",
      "Facilitate cross-team Scrum of Scrums",
      "Help define shared Definition of Done",
      "Assign a project manager"
    ],
    correct: [1, 2],
    type: "multi",
    explanation: "Coordination through shared practices and facilitation supports scaling. Assigning roles outside Scrum contradicts its principles."
  },
  {
    question: "A team is skipping Retrospectives due to 'lack of value.' What’s the best intervention?",
    options: [
      "Mandate attendance",
      "Facilitate a different format or game",
      "Explore blockers in a 1:1 setting",
      "Remove Retrospectives from the schedule"
    ],
    correct: [1, 2],
    type: "multi",
    explanation: "Changing approach and engaging team privately fosters continuous improvement. Mandating or removing it undermines Scrum."
  },
  {
    question: "True or False: The Scrum Master must ensure all Scrum events happen.",
    options: ["True", "False"],
    correct: 0,
    type: "boolean",
    explanation: "The Scrum Master is accountable for ensuring Scrum is understood and enacted, including events."
  },
  {
    question: "Which are valid responsibilities of the Scrum Master during organizational change?",
    options: [
      "Advocate for Agile values",
      "Coach leaders on Scrum",
      "Define HR policies",
      "Support teams during transitions"
    ],
    correct: [0, 1, 3],
    type: "multi",
    explanation: "The Scrum Master is a change agent, but not an administrative role like HR policymaker."
  },
  {
    question: "The team repeatedly misses their Sprint Goals. What should the Scrum Master examine first?",
    options: [
      "Sprint planning effectiveness",
      "Developer engagement",
      "Overcommitment patterns",
      "Burnout or morale issues"
    ],
    correct: [0, 2, 3],
    type: "multi",
    explanation: "Goal misses may stem from poor planning, overcommitment, or team health — not simply performance."
  },
  {
    question: "True or False: The Scrum Master can adjust the Sprint backlog during the Sprint if progress is low.",
    options: ["True", "False"],
    correct: 1,
    type: "boolean",
    explanation: "Only Developers own and adjust the Sprint backlog. The Scrum Master facilitates but doesn’t manage tasks."
  },
  {
    question: "Which of the following actions show a lack of Scrum Master maturity?",
    options: [
      "Solving team problems unilaterally",
      "Coaching team to resolve conflict",
      "Regular stakeholder facilitation",
      "Resisting retrospectives"
    ],
    correct: [0, 3],
    type: "multi",
    explanation: "Taking control and skipping key events shows a lack of trust in the team and the process."
  },
  {
    question: "True or False: It’s okay for the Product Owner and Scrum Master to be the same person.",
    options: ["True", "False"],
    correct: 1,
    type: "boolean",
    explanation: "These roles have conflicting focuses and responsibilities. Separation ensures healthy tension and balance."
  },
  {
    question: "What are signs that the Scrum Team has matured?",
    options: [
      "High self-management",
      "Frequent escalations to Scrum Master",
      "Ownership of Sprint Goals",
      "Regular adaptation and learning"
    ],
    correct: [0, 2, 3],
    type: "multi",
    explanation: "A mature team owns goals and adapts regularly without external enforcement."
  },
  {
    question: "A Developer often dominates conversations. What should the Scrum Master do?",
    options: [
      "Coach in 1:1 settings",
      "Facilitate balanced dialogue in meetings",
      "Remove the Developer",
      "Assign speaking limits"
    ],
    correct: [0, 1],
    type: "multi",
    explanation: "Coaching and facilitation ensure inclusivity. Removal and limits are excessive and non-collaborative."
  },
  {
    question: "True or False: Scrum Master success can be measured by team happiness scores.",
    options: ["True", "False"],
    correct: 1,
    type: "boolean",
    explanation: "While team morale matters, true success is measured by improved delivery, agility, and adaptability."
  },
  {
    question: "Which of these demonstrate an Agile mindset?",
    options: [
      "Embracing change",
      "Minimizing collaboration",
      "Continuous learning",
      "Fixed annual planning"
    ],
    correct: [0, 2],
    type: "multi",
    explanation: "Agility requires openness to change and continuous improvement. Isolation and rigid plans are anti-Agile."
  }
];
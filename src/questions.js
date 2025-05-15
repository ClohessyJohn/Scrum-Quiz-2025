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
  },
  {
    question: "True or False: The Scrum Master is responsible for ensuring Sprint Goals are met by any means necessary.",
    options: ["True", "False"],
    correct: 1,
    type: "boolean",
    explanation: "The Scrum Master facilitates the process but does not enforce goal completion—it’s the team's responsibility."
  },
  {
    question: "What should a Scrum Master do when a Product Owner frequently changes the Sprint Backlog mid-Sprint?",
    options: [
      "Remind the PO that Sprint scope is locked",
      "Allow changes as long as they improve velocity",
      "Encourage discussion with Developers to assess feasibility",
      "Escalate the issue to senior leadership"
    ],
    correct: [0, 2],
    type: "multi",
    explanation: "Sprint scope should not change arbitrarily. Coaching and reinforcement of Scrum principles are the correct approaches."
  },
  {
    question: "A Scrum Team struggles to complete work every Sprint due to constant external interruptions. What should the Scrum Master do?",
    options: [
      "Create a stricter Definition of Done",
      "Help shield the team by addressing interruptions",
      "Encourage extending Sprint duration",
      "Ignore the issue and let the team self-manage"
    ],
    correct: [1],
    type: "multi",
    explanation: "The Scrum Master plays a role in minimizing disruptions and enabling focus, but Sprint duration should remain fixed."
  },
  {
    question: "True or False: Scrum Masters should focus only on Developers and ignore external stakeholders.",
    options: ["True", "False"],
    correct: 1,
    type: "boolean",
    explanation: "Scrum Masters work with the entire organization to foster Agile adoption, not just Developers."
  },
  {
    question: "A newly formed Scrum Team is struggling with self-organization. What’s the best approach?",
    options: [
      "Assign work to Developers",
      "Facilitate discussions to strengthen collaboration",
      "Have the Product Owner take a more directive role",
      "Reduce Sprint duration until the team improves"
    ],
    correct: [1],
    type: "multi",
    explanation: "Encouraging teamwork through facilitation strengthens self-organization over time."
  },
  {
    question: "Which of the following best describe the Scrum Master’s role in Sprint Planning?",
    options: [
      "Ensure Developers commit to enough work",
      "Facilitate discussions for realistic forecasting",
      "Assign backlog items to Developers",
      "Confirm sprint scope with stakeholders"
    ],
    correct: [1],
    type: "multi",
    explanation: "The Scrum Master helps with facilitation but does not enforce commitments or assign work."
  },
  {
    question: "True or False: A Scrum Master should frequently assess individual Developer productivity.",
    options: ["True", "False"],
    correct: 1,
    type: "boolean",
    explanation: "Scrum focuses on team collaboration and delivery—not individual Developer tracking."
  },
  {
    question: "What should a Scrum Master do if a team consistently fails to meet its commitments?",
    options: [
      "Encourage the team to commit to fewer items",
      "Increase sprint duration",
      "Hold individuals accountable for missed work",
      "Ignore the issue since the team is self-organizing"
    ],
    correct: [0],
    type: "multi",
    explanation: "Adjusting workload expectations fosters sustainable pacing—punishment or extensions are not ideal."
  },
  {
    question: "A Scrum Team experiences conflict over technical decisions. What’s the best Scrum Master approach?",
    options: [
      "Make the decision for them",
      "Encourage open dialogue and constructive feedback",
      "Let the Product Owner decide",
      "Report the issue to senior management"
    ],
    correct: [1],
    type: "multi",
    explanation: "The Scrum Master facilitates collaboration—decisions should remain with the team."
  },
  {
    question: "True or False: A Scrum Master should eliminate all conflict within a team.",
    options: ["True", "False"],
    correct: 1,
    type: "boolean",
    explanation: "Healthy conflict fosters innovation and problem-solving—eliminating all disagreements would be counterproductive."
  },
  {
    question: "A Scrum Master is working with multiple teams on a shared product. What is the best way to coordinate their efforts?",
    options: [
      "Mandate identical Sprint schedules for all teams",
      "Facilitate cross-team communication using Scrum of Scrums",
      "Assign a dedicated project manager to oversee coordination",
      "Let each team handle dependencies independently"
    ],
    correct: [1],
    type: "multi",
    explanation: "Scrum of Scrums fosters collaboration while maintaining team autonomy. Mandating Sprint schedules or appointing a project manager contradicts Agile principles."
  },
  {
    question: "True or False: A Scrum Master should remove all impediments for the team immediately upon discovery.",
    options: ["True", "False"],
    correct: 1,
    type: "boolean",
    explanation: "While Scrum Masters help address impediments, they also empower the team to solve challenges independently."
  },
{
    question: "A Scrum Master notices that the team repeatedly struggles with time management during Sprints. What is the best approach?",
    options: [
      "Enforce strict deadlines for all Sprint work",
      "Facilitate discussions to improve prioritization and flow",
      "Assign specific tasks to each Developer to increase efficiency",
      "Reduce Sprint length to force quicker execution"
    ],
    correct: [1],
    type: "multi",
    explanation: "The Scrum Master facilitates improvement by helping the team refine prioritization and time management rather than enforcing strict controls."
  },
  {
    question: "True or False: A Scrum Master should track individual Developer performance metrics.",
    options: ["True", "False"],
    correct: 1,
    type: "boolean",
    explanation: "Scrum focuses on team success rather than individual metrics—collaboration is prioritized over personal productivity tracking."
  },
{
    question: "A Scrum Master notices that the team repeatedly struggles with time management during Sprints. What is the best approach?",
    options: [
      "Enforce strict deadlines for all Sprint work",
      "Facilitate discussions to improve prioritization and flow",
      "Assign specific tasks to each Developer to increase efficiency",
      "Reduce Sprint length to force quicker execution"
    ],
    correct: [1],
    type: "multi",
    explanation: "The Scrum Master facilitates improvement by helping the team refine prioritization and time management rather than enforcing strict controls."
  },
  {
    question: "True or False: A Scrum Master should track individual Developer performance metrics.",
    options: ["True", "False"],
    correct: 1,
    type: "boolean",
    explanation: "Scrum focuses on team success rather than individual metrics—collaboration is prioritized over personal productivity tracking."
  },
{
    question: "A Scrum Master notices that the team repeatedly struggles with time management during Sprints. What is the best approach?",
    options: [
      "Enforce strict deadlines for all Sprint work",
      "Facilitate discussions to improve prioritization and flow",
      "Assign specific tasks to each Developer to increase efficiency",
      "Reduce Sprint length to force quicker execution"
    ],
    correct: [1],
    type: "multi",
    explanation: "The Scrum Master facilitates improvement by helping the team refine prioritization and time management rather than enforcing strict controls."
  },
  {
    question: "True or False: A Scrum Master should track individual Developer performance metrics.",
    options: ["True", "False"],
    correct: 1,
    type: "boolean",
    explanation: "Scrum focuses on team success rather than individual metrics—collaboration is prioritized over personal productivity tracking."
  },
  {
    question: "A Scrum Master notices that some team members hesitate to speak up in Sprint Retrospectives. What should they do?",
    options: [
      "Encourage anonymous feedback tools to help quieter voices be heard",
      "Skip Retrospectives since some team members are uncomfortable",
      "Mandate that each member speaks for a minimum time",
      "Limit participation to only senior team members"
    ],
    correct: [0],
    type: "multi",
    explanation: "Providing anonymous feedback options can foster psychological safety and encourage participation. Forcing participation or excluding members contradicts Scrum values."
  },
  {
    question: "True or False: A Scrum Master should directly resolve all conflicts between team members.",
    options: ["True", "False"],
    correct: 1,
    type: "boolean",
    explanation: "The Scrum Master facilitates healthy conflict resolution but does not directly intervene unless necessary. The team should develop self-management skills."
  },
  {
    question: "A Scrum Master is working with an organization transitioning from Waterfall to Scrum. What is the best approach?",
    options: [
      "Enforce strict Scrum practices immediately",
      "Educate stakeholders on Agile principles and facilitate gradual adoption",
      "Ignore resistance and focus only on the Development Team",
      "Have the Product Owner manage the transition"
    ],
    correct: [1],
    type: "multi",
    explanation: "Successful transition requires stakeholder engagement and gradual adoption. Enforcing strict Scrum or ignoring resistance would be ineffective."
  },
  {
    question: "True or False: A Scrum Master should allow non-Scrum meetings to interrupt Sprint events.",
    options: ["True", "False"],
    correct: 1,
    type: "boolean",
    explanation: "Sprint events should be prioritized. Non-Scrum meetings should not disrupt the team’s focus and commitment."
  },
  {
    question: "A Scrum Team struggles with defining a clear Definition of Done. What is the best approach?",
    options: [
      "Let each Developer define their own criteria",
      "Facilitate a discussion to establish a shared Definition of Done",
      "Ignore it since Scrum does not mandate a strict Definition of Done",
      "Make the Product Owner responsible for setting the Definition of Done"
    ],
    correct: [1],
    type: "multi",
    explanation: "A shared Definition of Done ensures alignment and quality. Individual criteria or ignoring it would create inconsistencies."
  },
  {
    question: "True or False: A Scrum Master should limit stakeholder interaction with the team.",
    options: ["True", "False"],
    correct: 1,
    type: "boolean",
    explanation: "Stakeholder interaction should be encouraged through appropriate Scrum events rather than restricted."
  },
  {
    question: "A Scrum Team has difficulty forecasting work during Sprint Planning. What should the Scrum Master do?",
    options: [
      "Introduce techniques like velocity tracking and relative estimation",
      "Assign work based on previous Sprint performance",
      "Limit Sprint Planning discussions to 15 minutes",
      "Let the team self-manage without intervention"
    ],
    correct: [0],
    type: "multi",
    explanation: "Providing facilitation techniques like velocity tracking and estimation helps improve forecasting while keeping decisions within the team."
  },
  {
    question: "A Scrum Master is coaching an organization that struggles with stakeholder collaboration. What is the best approach?",
    options: [
      "Limit stakeholder access to the team to avoid distractions",
      "Facilitate workshops to improve stakeholder engagement with Scrum",
      "Let the Product Owner handle all stakeholder interactions",
      "Ignore the issue since stakeholders are outside the Scrum Team"
    ],
    correct: [1],
    type: "multi",
    explanation: "Facilitating stakeholder collaboration improves transparency and engagement. Restricting access or ignoring the issue could harm Agile adoption."
  },
  {
    question: "True or False: A Scrum Master should assign tasks to Developers to improve efficiency.",
    options: ["True", "False"],
    correct: 1,
    type: "boolean",
    explanation: "Developers self-organize and take ownership of their work. The Scrum Master facilitates the process but does not assign tasks."
  },
  {
    question: "A team repeatedly fails to deliver a usable Increment at the end of each Sprint. What should the Scrum Master do?",
    options: [
      "Coach the team on defining a strong Definition of Done",
      "Extend Sprint duration to accommodate more work",
      "Reduce the Sprint scope significantly",
      "Hold the team accountable through performance tracking"
    ],
    correct: [0],
    type: "multi",
    explanation: "A well-defined Definition of Done ensures quality and completeness. Extending Sprints or reducing scope doesn’t address the root issue."
  },
  {
    question: "True or False: A Scrum Master should dictate how Sprint Planning is conducted.",
    options: ["True", "False"],
    correct: 1,
    type: "boolean",
    explanation: "Sprint Planning is a collaborative effort. The Scrum Master facilitates but does not dictate the process."
  },
  {
    question: "A Product Owner constantly changes priorities, making it hard for the team to focus. What should the Scrum Master do?",
    options: [
      "Coach the Product Owner on backlog prioritization and stability",
      "Allow changes during the Sprint as long as they improve productivity",
      "Ignore the issue since backlog refinement is not the Scrum Master's role",
      "Reduce Sprint duration to minimize disruptions"
    ],
    correct: [0],
    type: "multi",
    explanation: "Coaching the Product Owner helps create stability and better backlog management. Allowing constant change disrupts Sprint focus."
  },
  {
    question: "A Scrum Team frequently struggles with Sprint Reviews because stakeholders provide conflicting feedback. What should the Scrum Master do?",
    options: [
      "Facilitate discussions to align stakeholders on expectations",
      "Limit stakeholder attendance to reduce conflicting opinions",
      "Ignore the issue since stakeholder feedback is optional",
      "Have the Product Owner handle all feedback without team involvement"
    ],
    correct: [0],
    type: "multi",
    explanation: "Aligning stakeholders through facilitation helps create clearer expectations and avoids disruption. Limiting or ignoring feedback would not be effective."
  },
  {
    question: "True or False: A Scrum Master should regularly measure Sprint success using velocity alone.",
    options: ["True", "False"],
    correct: 1,
    type: "boolean",
    explanation: "Velocity is a useful metric, but Sprint success should be measured based on value delivered, team collaboration, and product outcomes."
  },
  {
    question: "A newly formed Scrum Team struggles with trust and collaboration. What is the best approach?",
    options: [
      "Encourage open communication and team-building activities",
      "Assign formal team roles to create structure",
      "Let the team self-manage without intervention",
      "Replace team members who struggle with collaboration"
    ],
    correct: [0],
    type: "multi",
    explanation: "Fostering communication and trust-building helps improve teamwork. Assigning strict roles or replacing members could create more friction."
  },
  {
    question: "True or False: The Scrum Master should ensure that all Developers work on equal amounts of tasks in a Sprint.",
    options: ["True", "False"],
    correct: 1,
    type: "boolean",
    explanation: "Scrum encourages self-organization, where Developers decide how they collaborate based on their strengths and priorities."
  },
  {
    question: "A Scrum Team wants to improve their estimation accuracy. What is the best approach?",
    options: [
      "Use relative estimation techniques like Planning Poker",
      "Enforce strict time limits for estimation discussions",
      "Have the Scrum Master assign effort estimates",
      "Ignore estimation errors since Scrum encourages flexibility"
    ],
    correct: [0],
    type: "multi",
    explanation: "Relative estimation techniques help teams improve accuracy. Enforcing strict limits or ignoring estimation issues would not be helpful."
  },
  {
    question: "A Scrum Team is struggling with integrating work across multiple teams. What should the Scrum Master do?",
    options: [
      "Encourage cross-team collaboration through Scrum of Scrums",
      "Limit dependencies by enforcing strict Sprint boundaries",
      "Ignore integration issues since teams are self-organizing",
      "Assign a dedicated integration team to handle dependencies"
    ],
    correct: [0],
    type: "multi",
    explanation: "Facilitating collaboration through Scrum of Scrums helps teams align their work and improve integration."
  },
  {
    question: "True or False: A Scrum Master should ensure that all Sprint tasks are estimated in hours.",
    options: ["True", "False"],
    correct: 1,
    type: "boolean",
    explanation: "Scrum encourages relative estimation techniques such as story points, focusing on complexity rather than absolute time."
  },
  {
    question: "A Scrum Master notices that a Product Owner does not engage with the Developers. What should they do?",
    options: [
      "Coach the Product Owner on collaboration and backlog refinement",
      "Take over backlog refinement responsibilities",
      "Limit the Product Owner’s involvement to stakeholder communication",
      "Ignore the issue since backlog management is outside the Scrum Master's role"
    ],
    correct: [0],
    type: "multi",
    explanation: "Encouraging active engagement from the Product Owner ensures clear backlog priorities and alignment with the Development Team."
  },
  {
    question: "True or False: A Scrum Master should focus on tracking individual performance metrics.",
    options: ["True", "False"],
    correct: 1,
    type: "boolean",
    explanation: "Scrum is about team collaboration and collective delivery rather than individual performance measurement."
  },
  {
    question: "A Scrum Team is struggling with estimating large Product Backlog items. What is the best approach?",
    options: [
      "Encourage splitting backlog items into smaller, manageable chunks",
      "Increase Sprint duration to accommodate larger items",
      "Let the Developers work on large items without estimation",
      "Have the Scrum Master estimate the backlog items for the team"
    ],
    correct: [0],
    type: "multi",
    explanation: "Breaking down large backlog items improves estimation accuracy and helps with Sprint predictability."
  },
  {
    question: "A Scrum Team is struggling with integrating work across multiple teams. What should the Scrum Master do?",
    options: [
      "Encourage cross-team collaboration through Scrum of Scrums",
      "Limit dependencies by enforcing strict Sprint boundaries",
      "Ignore integration issues since teams are self-organizing",
      "Assign a dedicated integration team to handle dependencies"
    ],
    correct: [0],
    type: "multi",
    explanation: "Facilitating collaboration through Scrum of Scrums helps teams align their work and improve integration."
  },
   {
    question: "A Scrum Master observes that Developers struggle with maintaining a sustainable pace. What should they do?",
    options: [
      "Encourage discussions on workload balance and team health",
      "Increase Sprint duration to reduce pressure",
      "Require overtime to meet Sprint commitments",
      "Ignore the issue as long as the Sprint Goal is achieved"
    ],
    correct: [0],
    type: "multi",
    explanation: "Balancing workload and team health fosters long-term efficiency. Increasing Sprint duration or requiring overtime may harm sustainability."
  },
  {
    question: "True or False: The Scrum Master is responsible for defining the Sprint Goal.",
    options: ["True", "False"],
    correct: 1,
    type: "boolean",
    explanation: "The Sprint Goal is collaboratively defined by the Scrum Team, with the Product Owner providing business context and Developers committing to the work."
  },
  {
    question: "A Scrum Master notices that retrospectives result in little action. What’s the best approach?",
    options: [
      "Encourage actionable improvements and track follow-ups",
      "Reduce retrospective frequency",
      "Limit participation to senior team members",
      "Extend retrospectives to find more issues"
    ],
    correct: [0],
    type: "multi",
    explanation: "Tracking actions from retrospectives ensures continuous improvement. Reducing retrospectives or limiting participation hinders team growth."
  },
  {
    question: "True or False: A Scrum Master should prevent conflict within the team at all costs.",
    options: ["True", "False"],
    correct: 1,
    type: "boolean",
    explanation: "Healthy conflict fosters innovation and problem-solving. The Scrum Master facilitates constructive discussions rather than eliminating all disagreements."
  },
  {
    question: "A Scrum Master notices the team struggles with backlog refinement. What’s the best course of action?",
    options: [
      "Facilitate refinement sessions with the team and Product Owner",
      "Let Developers refine the backlog without Product Owner input",
      "Skip backlog refinement if the team is comfortable with their work",
      "Require the Product Owner to handle refinement alone"
    ],
    correct: [0],
    type: "multi",
    explanation: "Backlog refinement is a collaborative effort. The Scrum Master helps ensure alignment between Developers and the Product Owner."
  },
  {
    question: "A Scrum Team struggles with writing effective Sprint Goals. What is the best approach?",
    options: [
      "Coach the team on creating clear, outcome-driven Sprint Goals",
      "Let the Product Owner define Sprint Goals without team input",
      "Ignore the issue since Sprint Goals are optional in Scrum",
      "Write broad, general goals to avoid restrictions"
    ],
    correct: [0],
    type: "multi",
    explanation: "Strong Sprint Goals help teams focus on delivering value. Coaching them on outcome-driven goals improves clarity and effectiveness."
  },
  {
    question: "True or False: The Scrum Master is responsible for approving work before it is included in the Increment.",
    options: ["True", "False"],
    correct: 1,
    type: "boolean",
    explanation: "The Scrum Master does not approve work. The Developers are responsible for ensuring the Increment meets the Definition of Done."
  },
  {
    question: "A Scrum Team struggles to collaborate with external stakeholders. What should the Scrum Master do?",
    options: [
      "Facilitate stakeholder engagement through Sprint Reviews and discussions",
      "Limit stakeholder interaction to avoid disruptions",
      "Make the Product Owner handle all external communications",
      "Skip stakeholder involvement to keep the team focused"
    ],
    correct: [0],
    type: "multi",
    explanation: "Stakeholder collaboration is crucial for transparency and alignment. The Scrum Master facilitates engagement through structured interactions."
  },
  {
    question: "True or False: Sprint Planning should be conducted without discussing possible risks.",
    options: ["True", "False"],
    correct: 1,
    type: "boolean",
    explanation: "Identifying risks in Sprint Planning helps teams prepare and adapt. Ignoring risks can lead to unexpected obstacles."
  },
  {
    question: "A Scrum Team struggles to maintain technical excellence. What is the best approach?",
    options: [
      "Encourage continuous learning and technical practices like pair programming",
      "Extend Sprint duration to allow more time for improvement",
      "Ignore the issue as long as work is completed",
      "Let each Developer improve their skills independently without team discussion"
    ],
    correct: [0],
    type: "multi",
    explanation: "Fostering continuous learning and collaborative technical practices enhances quality and innovation within the team."
  },
  {
    question: "A Scrum Team struggles with handling technical debt. What should the Scrum Master do?",
    options: [
      "Encourage the team to allocate time for technical debt reduction in each Sprint",
      "Ignore technical debt since business value should be prioritized",
      "Extend Sprint duration to accommodate additional work",
      "Make the Product Owner responsible for addressing technical debt"
    ],
    correct: [0],
    type: "multi",
    explanation: "Allocating time for technical debt reduction helps maintain code quality and prevents long-term development inefficiencies."
  },
  {
    question: "True or False: A Scrum Master should enforce strict rules for how Daily Scrums are conducted.",
    options: ["True", "False"],
    correct: 1,
    type: "boolean",
    explanation: "The Scrum Master facilitates the Daily Scrum but does not impose strict rules. The team determines how to best use the event to inspect progress."
  },
  {
    question: "A Scrum Team has difficulty collaborating with stakeholders. What should the Scrum Master do?",
    options: [
      "Facilitate stakeholder engagement through Sprint Reviews and discussions",
      "Restrict stakeholder interactions to avoid distractions",
      "Let the Product Owner handle all stakeholder communication",
      "Ignore stakeholder feedback unless directly requested"
    ],
    correct: [0],
    type: "multi",
    explanation: "Encouraging structured stakeholder engagement improves transparency and alignment between business needs and development."
  },
  {
    question: "True or False: A Scrum Master should dictate how Developers estimate backlog items.",
    options: ["True", "False"],
    correct: 1,
    type: "boolean",
    explanation: "Developers determine their estimation methods based on collaboration and expertise. The Scrum Master facilitates but does not dictate."
  },
  {
    question: "A team struggles with frequent Sprint interruptions. What should the Scrum Master do?",
    options: [
      "Educate stakeholders on the importance of Sprint focus and minimize disruptions",
      "Allow changes during the Sprint to accommodate urgent requests",
      "Ignore interruptions since teams should be self-managing",
      "Shorten Sprint duration to reduce the impact of interruptions"
    ],
    correct: [0],
    type: "multi",
    explanation: "Minimizing Sprint interruptions ensures focus and helps teams deliver high-quality work effectively."
  },
{
  "question": "Two Scrum Teams are blocked due to shared backend services. What is the Scrum Master’s first step?",
  "type": "multiple",
  "answers": [
    "Facilitate a cross-team workshop to identify dependencies and shared responsibilities.",
    "Report the issue to the Steering Committee.",
    "Assign a dedicated backend engineer to each team.",
    "Let Product Owners sort it out."
  ],
  "correctAnswer": "Facilitate a cross-team workshop to identify dependencies and shared responsibilities.",
  "tip": "Scrum Masters resolve impediments by increasing collaboration and transparency across teams."
}
{
  "question": "A stakeholder requests a weekly burndown report. The team feels micromanaged. What’s your move?",
  "type": "multiple",
  "answers": [
    "Have a conversation with the stakeholder to understand their concerns and suggest a more agile-friendly reporting cadence.",
    "Refuse the request — it violates Scrum values.",
    "Ask the team to just do it and not worry.",
    "Send them the raw metrics and let them interpret it."
  ],
  "correctAnswer": "Have a conversation with the stakeholder to understand their concerns and suggest a more agile-friendly reporting cadence.",
  "tip": "Good Scrum Masters coach stakeholders as well as teams — not just say 'no'."
}
{
  "question": "Your developers keep turning to you for task assignments. What should you do?",
  "type": "multiple",
  "answers": [
    "Coach the team on self-management and facilitate a conversation about ownership in the next Retrospective.",
    "Assign tasks yourself until they gain confidence.",
    "Tell them it's not your job and walk away.",
    "Ask the Product Owner to assign the work instead."
  ],
  "correctAnswer": "Coach the team on self-management and facilitate a conversation about ownership in the next Retrospective.",
  "tip": "Teams must learn to self-organize — you guide that journey, not direct it."
}
{
  "question": "An executive is frustrated that Scrum is 'slowing everything down' and wants to skip Sprint Reviews. What do you do?",
  "type": "multiple",
  "answers": [
    "Schedule a 1:1 to explore their expectations and show how Sprint Reviews support business alignment.",
    "Remove the Sprint Review for now and reintroduce it later.",
    "Ask the Product Owner to deal with it.",
    "Cancel the review and replace it with a written update."
  ],
  "correctAnswer": "Schedule a 1:1 to explore their expectations and show how Sprint Reviews support business alignment.",
  "tip": "Empirical process control only works when inspection and adaptation are present — Sprint Reviews are essential."
}
{
  "question": "True or False: Scrum should not be used in early-stage startups because the work is too chaotic.",
  "type": "boolean",
  "answers": ["True", "False"],
  "correctAnswer": "False",
  "tip": "Scrum is designed for complex, rapidly changing environments — it can bring focus and value even to early-stage chaos."
}
];




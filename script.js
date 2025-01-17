function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

const quotes = [
  "Maintain a clean and organized work environment.",
  "Report any damaged equipment or unsafe work conditions immediately.",
  "Use personal protective equipment (PPE) as required by your job.",
  "Be aware of your surroundings and watch out for potential hazards.",
  "Follow all safety procedures and protocols established by your employer.",
  "Practice good housekeeping to prevent clutter and slips, trips, and falls.",
  "Use proper lifting techniques to avoid back injuries.",
  "Take breaks throughout the day to avoid fatigue and accidents.",
  "Report any unsafe acts or behaviors to your supervisor.",
  "Stay informed about safety hazards specific to your job.",
  "Only qualified personnel should work on electrical equipment.",
  "Inspect electrical cords and equipment for damage before use.",
  "Never overload electrical outlets.",
  "Use appropriate grounding and GFCI outlets in wet or damp locations.",
  "Turn off and unplug electrical equipment before performing maintenance.",
  "Use guardrails and safety nets when working at heights.",
  "Use ladders safely and securely.",
  "Wear appropriate footwear with good traction.",
  "Be aware of trip hazards such as cords, hoses, and uneven surfaces.",
  "Keep stairwells and walkways clear of obstacles.",
  "Lock out and tag out machinery before performing maintenance.",
  "Never operate machinery that you are not trained to use.",
  "Keep loose clothing and jewelry away from moving machinery.",
  "Be aware of pinch points and other hazards associated with machinery.",
  "Report any malfunctioning machinery to your supervisor.",
  "Read and understand the safety data sheets (SDS) for all chemicals you use.",
  "Wear appropriate PPE when handling chemicals, including gloves, goggles, and respirators.",
  "Work in well-ventilated areas when using chemicals.",
  "Store chemicals safely and securely in designated containers.",
  "Dispose of chemicals properly according to regulations.",
  "Know the location of fire extinguishers and how to use them.",
  "Participate in fire drills regularly.",
  "Keep fire exits clear and unobstructed.",
  "Never tamper with fire alarm systems.",
  "Report any fire hazards to your supervisor.",
  "Adjust your workstation to fit your body properly.",
  "Take frequent breaks to stretch and move around.",
  "Practice good posture while working.",
  "Use ergonomic tools and equipment to reduce strain.",
  "Report any ergonomic concerns to your supervisor.",
  "Clean up spills immediately.",
  "Report damaged floors or uneven surfaces.",
  "Wear slip-resistant shoes.",
  "Use handrails when walking up or down stairs.",
  "Be aware of wet or slippery surfaces.",
  "Be aware of the signs of potential workplace violence.",
  "Report any threats or harassment to your supervisor or security.",
  "Develop a plan for responding to workplace violence.",
  "Practice de-escalation techniques.",
  "Know how to contact emergency services."
];

const backgroundColors = [
  "#31647d"
];

const quoteElement = document.getElementById('quote');
const newQuoteButton = document.getElementById('new-quote-button');

function updateDisplay() {
  const quote = generateRandomQuote();
  quoteElement.textContent = quote;
  const randomColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
  document.body.style.backgroundColor = randomColor;
}

// Call updateDisplay initially to display a quote on page load
updateDisplay();

newQuoteButton.addEventListener('click', updateDisplay);
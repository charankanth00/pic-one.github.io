let currentGame = null;

document.addEventListener('DOMContentLoaded', () => {
  const modeCards = document.querySelectorAll('.mode-card');
  
  if (modeCards.length > 0) {
    modeCards.forEach(card => {
      card.addEventListener('click', function() {
        const mode = this.getAttribute('data-mode');
        initiateGame(mode);
      });
    });
  }

  if (document.getElementById('questionText')) {
    loadGameSession();
  }
});

function initiateGame(mode) {
  let count = 10;
  
  if (mode === 'quick') count = 10;
  else if (mode === 'deep') count = 40;
  else if (mode === 'impossible') count = 20;
  else if (mode === 'love') count = 20;
  else if (mode === 'life') count = 20;

  if (typeof QUESTIONS === 'undefined') {
    alert("Error: questions.js is not loading properly.");
    return;
  }

  // SAFEGUARD: Never request more questions than actually exist in the database
  let availableQuestions = QUESTIONS.length;
  count = Math.min(count, availableQuestions); 

  let pool = [...QUESTIONS];
  pool.sort(() => Math.random() - 0.5);
  const selectedQuestions = pool.slice(0, count);

  currentGame = {
    mode: mode,
    questions: selectedQuestions,
    currentIndex: 0,
    answers: [],
    scores: { adventure: 0, logic: 0, empathy: 0, risk: 0, creativity: 0, ambition: 0, freedom: 0, stability: 0 },
    startedAt: new Date().toISOString()
  };

  localStorage.setItem('pickOneCurrentGame', JSON.stringify(currentGame));
  window.location.href = 'game.html'; 
}

function loadGameSession() {
  const saved = localStorage.getItem('pickOneCurrentGame');
  if (!saved) {
    window.location.href = 'modes.html';
    return;
  }

  currentGame = JSON.parse(saved);
  renderCurrentQuestion();

  const backBtn = document.getElementById('backBtn');
  const exitBtn = document.getElementById('exitBtn');
  
  if(backBtn) backBtn.addEventListener('click', handleBack);
  if(exitBtn) exitBtn.addEventListener('click', handleExit);
}

function renderCurrentQuestion() {
  const q = currentGame.questions[currentGame.currentIndex];
  const total = currentGame.questions.length;
  const currentNum = currentGame.currentIndex + 1;

  document.getElementById('progressText').textContent = `${String(currentNum).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
  document.getElementById('progressFill').style.width = `${(currentNum / total) * 100}%`;
  document.getElementById('questionText').textContent = q.question;

  const optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = `
    <div class="option-card" id="optA" tabindex="0">
      <div class="option-icon">${q.optionA.icon}</div>
      <h4>${q.optionA.title}</h4>
      <p>${q.optionA.description}</p>
    </div>
    <div class="option-card" id="optB" tabindex="0">
      <div class="option-icon">${q.optionB.icon}</div>
      <h4>${q.optionB.title}</h4>
      <p>${q.optionB.description}</p>
    </div>
  `;

  document.getElementById('optA').onclick = () => makeChoice('A');
  document.getElementById('optB').onclick = () => makeChoice('B');
}

function makeChoice(optionKey) {
  const q = currentGame.questions[currentGame.currentIndex];
  const selectedOption = optionKey === 'A' ? q.optionA : q.optionB;

  // Visual feedback for clicking
  document.getElementById(`opt${optionKey}`).classList.add('selected');
  
  // Disable clicking again to prevent skipping questions
  document.getElementById('optA').style.pointerEvents = 'none';
  document.getElementById('optB').style.pointerEvents = 'none';

  Object.keys(selectedOption.scores).forEach(trait => {
    currentGame.scores[trait] = (currentGame.scores[trait] || 0) + selectedOption.scores[trait];
  });

  currentGame.answers.push({
    questionId: q.id,
    questionText: q.question,
    selectedTitle: selectedOption.title,
    selectedOptionKey: optionKey
  });

  localStorage.setItem('pickOneCurrentGame', JSON.stringify(currentGame));

  // Auto advance after 600ms so the user can see their selection highlight
  setTimeout(() => {
    currentGame.currentIndex++;
    if (currentGame.currentIndex < currentGame.questions.length) {
      renderCurrentQuestion();
    } else {
      triggerAnalysisScreen();
    }
  }, 600);
}

function handleBack() {
  if (currentGame.currentIndex > 0) {
    currentGame.currentIndex--;
    currentGame.answers.pop();
    localStorage.setItem('pickOneCurrentGame', JSON.stringify(currentGame));
    renderCurrentQuestion();
  }
}

function handleExit() {
  if (confirm("Leave this game? Your progress is saved.")) {
    window.location.href = 'index.html';
  }
}

function triggerAnalysisScreen() {
  currentGame.completedAt = new Date().toISOString();
  localStorage.setItem('pickOneCompletedGame', JSON.stringify(currentGame));
  localStorage.removeItem('pickOneCurrentGame');
  window.location.href = 'result.html';
}

// Enable keyboard controls for rapid play
document.addEventListener('keydown', (e) => {
  const optA = document.getElementById('optA');
  const optB = document.getElementById('optB');
  
  // Only trigger if the buttons are currently on screen and active
  if (optA && optB && optA.style.pointerEvents !== 'none') {
    if (e.key === 'ArrowLeft') optA.click();
    if (e.key === 'ArrowRight') optB.click();
  }
});
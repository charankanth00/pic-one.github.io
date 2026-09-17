document.addEventListener('DOMContentLoaded', () => {
  const historyList = document.getElementById('historyList');
  const summary = document.getElementById('profileSummary');
  const achievementsContainer = document.getElementById('achievements');

  if (!historyList) return;

  const history = JSON.parse(localStorage.getItem('pickOneHistory') || '[]');

  // Render Stats
  const totalGames = history.length;
  const totalQuestions = history.reduce((acc, curr) => acc + (curr.questionsCount || 0), 0);
  const latestArchetype = history[0] ? history[0].archetype : "None";

  summary.innerHTML = `
    <div class="stat-card">
      <div class="stat-value">${totalGames}</div>
      <div class="stat-label">Games Completed</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${totalQuestions}</div>
      <div class="stat-label">Choices Made</div>
    </div>
    <div class="stat-card">
      <div class="stat-value" style="font-size: 1.1rem">${latestArchetype}</div>
      <div class="stat-label">Latest Result</div>
    </div>
  `;

  // Render History
  if (history.length === 0) {
    historyList.innerHTML = `<p style="color: var(--text-muted)">Your story hasn't started yet. Make your first choice!</p>`;
  } else {
    historyList.innerHTML = history.map((item, idx) => `
      <div class="history-item">
        <div>
          <strong>GAME #${String(history.length - idx).padStart(2, '0')}</strong> — ${item.archetype}
        </div>
        <div style="color: var(--text-muted); font-size: 0.85rem;">
          ${item.mode.toUpperCase()} (${item.questionsCount} Qs)
        </div>
      </div>
    `).join('');
  }

  // Render Achievements
  const achievements = [
    { title: "🏆 FIRST CHOICE", desc: "Complete 1 game", unlocked: totalGames >= 1 },
    { title: "🔥 ON FIRE", desc: "Complete 3 games", unlocked: totalGames >= 3 },
    { title: "🧠 DEEP THINKER", desc: "Complete a Deep Dive session", unlocked: history.some(h => h.mode === 'deep') }
  ];

  achievementsContainer.innerHTML = achievements.map(a => `
    <div class="badge ${a.unlocked ? 'unlocked' : ''}">
      <div class="badge-title">${a.title}</div>
      <div class="badge-desc">${a.desc}</div>
    </div>
  `).join('');

  // Reset Button
  const resetBtn = document.getElementById('resetData');
  if (resetBtn) {
    resetBtn.onclick = () => {
      if (confirm("Reset all local game statistics and profile history?")) {
        localStorage.clear();
        window.location.reload();
      }
    };
  }
});
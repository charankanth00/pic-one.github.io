document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('pickOneCompletedGame');

  if (!saved) {
    window.location.href = 'modes.html';
    return;
  }

  const completedGame = JSON.parse(saved);
  const resultData = calculatePersonality(completedGame.scores);

  // Render Title & Summary
  document.getElementById('resultTitle').textContent = resultData.archetype.name;

  document.getElementById('resultSummary').textContent =
    `${resultData.archetype.summary} "${resultData.archetype.quote}"`;

  // Render Traits
  const traitsContainer = document.getElementById('traitBars');
  traitsContainer.innerHTML = '';

  Object.keys(resultData.traits).forEach(trait => {
    const val = resultData.traits[trait];

    const row = document.createElement('div');
    row.className = 'trait-row';

    row.innerHTML = `
      <div class="trait-label">
        <span style="text-transform: capitalize;">${trait}</span>
        <span>${val}%</span>
      </div>

      <div class="trait-track">
        <div class="trait-fill" style="width: 0%"></div>
      </div>
    `;

    traitsContainer.appendChild(row);

    setTimeout(() => {
      row.querySelector('.trait-fill').style.width = `${val}%`;
    }, 100);
  });

  // Most Interesting Choice
  const interestingCard = document.getElementById('interestingChoice');

  if (completedGame.answers && completedGame.answers.length > 0) {
    const choice = completedGame.answers[0];

    interestingCard.innerHTML = `
      <strong>${choice.questionText}</strong><br/>
      <span style="color: var(--pink)">
        You chose: ${choice.selectedTitle}
      </span>

      <p style="
        color: var(--text-muted);
        font-size: 0.85rem;
        margin-top: 0.5rem
      ">
        This decision highlights your primary instinct toward your strongest trait preferences.
      </p>
    `;
  }

  // Strengths & Watch list
  const strengthsList = document.getElementById('strengthsList');

  strengthsList.innerHTML = resultData.archetype.strengths
    .map(s => `<li>✦ ${s}</li>`)
    .join('');

  const watchList = document.getElementById('watchList');

  watchList.innerHTML = `
    <li>⚠️ ${resultData.archetype.watchOut}</li>
  `;

  // Store in Profile History
  saveToHistory(completedGame, resultData);

  // 8. Real Share to Clipboard functionality
  const shareBtn = document.getElementById('shareBtn');

  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      // Get the user's strongest/dominant trait
      const topTrait = Object.keys(resultData.traits)[0].toUpperCase();

      // Create share message
      const shareText =
        `I played PICK ONE and got ${resultData.archetype.name}!\n` +
        `My dominant trait is ${topTrait}.\n\n` +
        `What's your archetype?`;

      try {
        // Copy result to clipboard
        await navigator.clipboard.writeText(shareText);

        // Save original button text
        const originalText = shareBtn.textContent;

        // Show success state
        shareBtn.textContent = "COPIED TO CLIPBOARD! ✨";
        shareBtn.style.background = "var(--success)";

        // Reset button after 3 seconds
        setTimeout(() => {
          shareBtn.textContent = originalText;
          shareBtn.style.background = "";
        }, 3000);

      } catch (err) {
        // Fallback error message
        alert("Failed to copy. Your browser might not support this feature.");
      }
    });
  }
});


function saveToHistory(game, result) {
  let history = JSON.parse(
    localStorage.getItem('pickOneHistory') || '[]'
  );

  // Avoid duplicate saving
  if (!history.some(h => h.completedAt === game.completedAt)) {
    history.unshift({
      completedAt: game.completedAt,
      archetype: result.archetype.name,
      mode: game.mode,
      questionsCount: game.questions.length
    });

    localStorage.setItem(
      'pickOneHistory',
      JSON.stringify(history)
    );
  }
}

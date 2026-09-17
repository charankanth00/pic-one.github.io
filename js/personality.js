const ARCHETYPES = {
  EXPLORER: {
    name: "THE EXPLORER 🧭",
    primaryTraits: ["adventure", "freedom", "risk"],
    summary: "You are naturally drawn toward discovery, new experiences and unfamiliar paths. Routine feels restrictive; curiosity leads you forward.",
    quote: "There has to be something beyond the horizon.",
    strengths: ["Curious", "Independent", "Courageous"],
    watchOut: "You may become impatient when life feels too predictable."
  },
  DREAMER: {
    name: "THE DREAMER 🌙",
    primaryTraits: ["creativity", "empathy", "freedom"],
    summary: "Your imagination is your guiding superpower. You notice possibilities that others overlook and value deep meaning over convention.",
    quote: "What if?",
    strengths: ["Imaginative", "Sensitive", "Open-minded"],
    watchOut: "You may spend too much time imagining possibilities instead of executing one."
  },
  STRATEGIST: {
    name: "THE STRATEGIST ♟️",
    primaryTraits: ["logic", "ambition", "stability"],
    summary: "You naturally look for patterns, structure and the smartest path forward. Every step you take is calculated with intent.",
    quote: "Think first. Move with purpose.",
    strengths: ["Analytical", "Focused", "Strategic"],
    watchOut: "You may overthink decisions that simply need to be experienced."
  },
  ADVENTURER: {
    name: "THE ADVENTURER 🔥",
    primaryTraits: ["adventure", "risk", "ambition"],
    summary: "You thrive in high-momentum environments. Challenges don't deter you; they spark your drive.",
    quote: "Let's see what happens.",
    strengths: ["Bold", "Energetic", "Determined"],
    watchOut: "You may chase excitement even when patience yields better results."
  },
  GUARDIAN: {
    name: "THE GUARDIAN 🛡️",
    primaryTraits: ["stability", "empathy", "logic"],
    summary: "You value trust, security and the well-being of those around you. You are the dependable anchor in turbulent times.",
    quote: "Someone has to keep things together.",
    strengths: ["Dependable", "Caring", "Responsible"],
    watchOut: "You may pass on worthwhile opportunities due to a hesitation toward uncertainty."
  },
  CREATOR: {
    name: "THE CREATOR 🎨",
    primaryTraits: ["creativity", "freedom", "adventure"],
    summary: "You dislike cookie-cutter rules. You continually experiment, build, and craft your own unique solutions.",
    quote: "There is always another way.",
    strengths: ["Original", "Curious", "Innovative"],
    watchOut: "Starting many projects can make finishing one challenging."
  },
  CONNECTOR: {
    name: "THE CONNECTOR ❤️",
    primaryTraits: ["empathy", "creativity", "stability"],
    summary: "Human connections fuel your life. You instinctively notice emotional context and unite people around shared meaning.",
    quote: "People are the story.",
    strengths: ["Compassionate", "Understanding", "Loyal"],
    watchOut: "You may prioritize others' needs while overlooking your own."
  },
  VISIONARY: {
    name: "THE VISIONARY ✨",
    primaryTraits: ["ambition", "creativity", "risk"],
    summary: "You think far beyond present constraints. You are drawn to grand goals and ideas that transform reality.",
    quote: "Why stop here?",
    strengths: ["Driven", "Innovative", "Future-focused"],
    watchOut: "Your vision can outstrip reality, testing your patience."
  }
};

function calculatePersonality(rawScores) {
  const traits = ["adventure", "logic", "empathy", "risk", "creativity", "ambition", "freedom", "stability"];
  const normalized = {};

  // Base 50 offset calculation
  let minVal = Infinity, maxVal = -Infinity;
  traits.forEach(t => {
    const val = 50 + (rawScores[t] || 0);
    if (val < minVal) minVal = val;
    if (val > maxVal) maxVal = val;
  });

  traits.forEach(t => {
    const val = 50 + (rawScores[t] || 0);
    let score = Math.round(((val - Math.min(30, minVal)) / (Math.max(70, maxVal) - Math.min(30, minVal))) * 100);
    normalized[t] = Math.max(10, Math.min(99, score));
  });

  // Weighted match for each archetype
  let bestArchetype = "EXPLORER";
  let maxMatch = -1;

  Object.keys(ARCHETYPES).forEach(key => {
    const arch = ARCHETYPES[key];
    const t1 = arch.primaryTraits[0];
    const t2 = arch.primaryTraits[1];
    const t3 = arch.primaryTraits[2];

    const matchScore = (normalized[t1] * 0.45) + (normalized[t2] * 0.35) + (normalized[t3] * 0.20);

    if (matchScore > maxMatch) {
      maxMatch = matchScore;
      bestArchetype = key;
    }
  });

  return {
    archetypeKey: bestArchetype,
    archetype: ARCHETYPES[bestArchetype],
    traits: normalized
  };
}
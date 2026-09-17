const QUESTIONS = [
  {
    id: 1, category: "lifestyle", question: "Where would you rather wake up every morning?",
    optionA: { title: "LIVE BY THE OCEAN", description: "Wake up to waves and infinite horizons.", icon: "🌊", scores: { adventure: 2, freedom: 2, risk: 1, stability: -1 } },
    optionB: { title: "LIVE IN THE MOUNTAINS", description: "Silence, solitude, and endless views.", icon: "🏔️", scores: { stability: 2, logic: 1, ambition: 1, freedom: 0 } }
  },
  {
    id: 2, category: "money", question: "Select your financial destiny:",
    optionA: { title: "$1 MILLION TODAY", description: "Immediate certainty and instant independence.", icon: "💵", scores: { stability: 2, logic: 1, risk: -1 } },
    optionB: { title: "$10 MILLION IN 10 YEARS", description: "Extreme patience for immense future leverage.", icon: "⏳", scores: { ambition: 2, risk: 2, logic: 1 } }
  },
  {
    id: 3, category: "future", question: "Which power over time would you choose?",
    optionA: { title: "SEE YOUR FUTURE", description: "Complete clarity on what lies ahead.", icon: "🔮", scores: { stability: 2, logic: 2, risk: -1 } },
    optionB: { title: "CHANGE YOUR PAST", description: "Rewrite one crucial defining moment.", icon: "⏪", scores: { creativity: 2, empathy: 1, risk: 1 } }
  },
  {
    id: 4, category: "freedom", question: "How do you prefer to experience balance?",
    optionA: { title: "UNLIMITED MONEY / NO TIME", description: "Unmatched financial influence.", icon: "🏛️", scores: { ambition: 2, logic: 1, freedom: -2 } },
    optionB: { title: "UNLIMITED TIME / SIMPLE MONEY", description: "Complete sovereign control over your days.", icon: "🕊️", scores: { freedom: 2, adventure: 1, ambition: -1 } }
  },
  {
    id: 5, category: "relationships", question: "In a relationship, what is harder to forgive?",
    optionA: { title: "A BROKEN PROMISE", description: "Failing to follow through on a commitment.", icon: "💔", scores: { logic: 2, stability: 1, empathy: -1 } },
    optionB: { title: "A HIDDEN TRUTH", description: "Keeping secrets, even to protect you.", icon: "👁️", scores: { empathy: 2, freedom: 1, stability: -1 } }
  },
  {
    id: 6, category: "work", question: "What environment do you thrive in?",
    optionA: { title: "TOTAL CHAOS", description: "Fast-paced, unpredictable, high stakes.", icon: "🌪️", scores: { adventure: 2, risk: 2, stability: -2 } },
    optionB: { title: "PERFECT ORDER", description: "Structured, calm, highly optimized.", icon: "📐", scores: { logic: 2, stability: 2, risk: -2 } }
  },
  {
    id: 7, category: "life", question: "If you could only leave one legacy, what would it be?",
    optionA: { title: "A GREAT INVENTION", description: "Something that changes how the world works.", icon: "💡", scores: { creativity: 2, ambition: 2, logic: 1 } },
    optionB: { title: "A GREAT FAMILY", description: "A lineage of love, support, and values.", icon: "👨‍👩‍👧‍👦", scores: { empathy: 2, stability: 2, ambition: -1 } }
  },
  {
    id: 8, category: "conflict", question: "How do you handle a direct confrontation?",
    optionA: { title: "FACE IT HEAD ON", description: "Address the issue immediately, no matter the tension.", icon: "⚔️", scores: { risk: 2, logic: 1, empathy: -1 } },
    optionB: { title: "NAVIGATE AROUND IT", description: "Find a diplomatic, peaceful compromise.", icon: "🤝", scores: { empathy: 2, stability: 1, risk: -1 } }
  },
  {
    id: 9, category: "impossible", question: "You must press one button:",
    optionA: { title: "ERASE ALL PAIN", description: "But nobody can ever feel extreme joy again.", icon: "🌫️", scores: { stability: 2, logic: 1, adventure: -2 } },
    optionB: { title: "KEEP THINGS AS THEY ARE", description: "Allow suffering so that joy can exist.", icon: "🌗", scores: { risk: 2, freedom: 1, creativity: 1 } }
  },
  {
    id: 10, category: "social", question: "Would you rather be:",
    optionA: { title: "WIDELY RESPECTED", description: "Known by many for your competence and success.", icon: "👑", scores: { ambition: 2, logic: 1, empathy: -1 } },
    optionB: { title: "DEEPLY LOVED", description: "Cherished intensely by a small few.", icon: "❤️", scores: { empathy: 2, stability: 1, ambition: -1 } }
  },
  {
    id: 11, category: "love", question: "What is your ultimate relationship goal?",
    optionA: { title: "A PASSIONATE ROMANCE", description: "High energy, spontaneity, and intense emotions.", icon: "🔥", scores: { adventure: 2, risk: 1, stability: -1 } },
    optionB: { title: "A SAFE HARBOR", description: "Absolute trust, comfort, and peace.", icon: "⚓", scores: { stability: 2, empathy: 1, risk: -1 } }
  },
  {
    id: 12, category: "impossible", question: "If you had to sacrifice one, which would it be?",
    optionA: { title: "ALL YOUR MEMORIES", description: "Start entirely fresh, knowing nothing of your past.", icon: "🧠", scores: { adventure: 2, freedom: 2, stability: -2 } },
    optionB: { title: "YOUR ABILITY TO MAKE NEW ONES", description: "Live forever in the comfort of your current past.", icon: "📸", scores: { stability: 2, logic: 1, adventure: -2 } }
  },
  {
    id: 13, category: "life", question: "Which path sounds more fulfilling?",
    optionA: { title: "MASTER OF ONE", description: "Become the absolute best in the world at one specific thing.", icon: "🎯", scores: { ambition: 2, logic: 1, freedom: -1 } },
    optionB: { title: "JACK OF ALL TRADES", description: "Be decently good at everything and constantly learn.", icon: "🧩", scores: { creativity: 2, freedom: 1, stability: -1 } }
  },
  {
    id: 14, category: "truth", question: "Would you rather know the comfortable lie or the harsh truth?",
    optionA: { title: "THE HARSH TRUTH", description: "Reality, no matter how much it hurts.", icon: "🗡️", scores: { logic: 2, risk: 1, empathy: -1 } },
    optionB: { title: "THE COMFORTABLE LIE", description: "Peace of mind and emotional preservation.", icon: "🛡️", scores: { empathy: 1, stability: 2, logic: -2 } }
  },
  {
    id: 15, category: "career", question: "Pick your work style:",
    optionA: { title: "LONE WOLF", description: "Work completely alone, fully autonomous.", icon: "🐺", scores: { freedom: 2, logic: 1, empathy: -1 } },
    optionB: { title: "TEAM LEADER", description: "Guide a group toward a shared victory.", icon: "🦁", scores: { ambition: 2, empathy: 1, freedom: -1 } }
  },
  {
    id: 16, category: "impossible", question: "You are stuck in a room. Which door do you open?",
    optionA: { title: "DOOR OF CERTAINTY", description: "Leads to a completely normal, average life.", icon: "🚪", scores: { stability: 2, logic: 1, risk: -2 } },
    optionB: { title: "DOOR OF MYSTERY", description: "50% chance of extreme wealth, 50% chance of ruin.", icon: "❓", scores: { risk: 3, adventure: 2, stability: -3 } }
  },
  {
    id: 17, category: "love", question: "What breaks trust faster?",
    optionA: { title: "INCONSISTENCY", description: "Saying one thing and doing another over time.", icon: "⚖️", scores: { logic: 2, stability: 2, risk: -1 } },
    optionB: { title: "BETRAYAL", description: "One massive, deliberate act of deception.", icon: "🦂", scores: { empathy: 2, stability: 1, freedom: -1 } }
  },
  {
    id: 18, category: "lifestyle", question: "How do you prefer to travel?",
    optionA: { title: "NO ITINERARY", description: "Book a one-way ticket and see what happens.", icon: "🎒", scores: { adventure: 2, freedom: 2, stability: -2 } },
    optionB: { title: "PLANNED TO THE MINUTE", description: "Research everything and maximize the experience.", icon: "📋", scores: { logic: 2, stability: 2, risk: -1 } }
  },
  {
    id: 19, category: "money", question: "Which would you rather lose?",
    optionA: { title: "ALL YOUR MONEY", description: "Start from zero financially.", icon: "💸", scores: { risk: 1, freedom: 1, stability: -2 } },
    optionB: { title: "YOUR REPUTATION", description: "Keep your wealth, but nobody respects you.", icon: "🎭", scores: { ambition: -2, stability: 1, logic: 1 } }
  },
  {
    id: 20, category: "social", question: "In a group setting, who are you?",
    optionA: { title: "THE OBSERVER", description: "Quietly analyzing the room and listening.", icon: "🦉", scores: { logic: 2, empathy: 1, ambition: -1 } },
    optionB: { title: "THE ENTERTAINER", description: "At the center, controlling the energy.", icon: "🦚", scores: { ambition: 2, creativity: 1, stability: -1 } }
  },
  {
    id: 21, category: "impossible", question: "Would you rather:",
    optionA: { title: "FEEL TOO MUCH", description: "Extreme emotional highs and devastating lows.", icon: "🌊", scores: { empathy: 2, creativity: 1, stability: -2 } },
    optionB: { title: "FEEL NOTHING", description: "A flatline of absolute emotional neutrality.", icon: "🪨", scores: { logic: 2, stability: 2, empathy: -3 } }
  },
  {
    id: 22, category: "freedom", question: "What is your idea of a perfect weekend?",
    optionA: { title: "CREATING SOMETHING", description: "Building, painting, writing, or designing.", icon: "🎨", scores: { creativity: 3, ambition: 1, logic: -1 } },
    optionB: { title: "ESCAPING EVERYTHING", description: "Disconnecting completely from the world.", icon: "🏕️", scores: { freedom: 2, adventure: 1, ambition: -1 } }
  },
  {
    id: 23, category: "life", question: "How do you view rules?",
    optionA: { title: "AS GUIDELINES", description: "Meant to be bent or broken for a better outcome.", icon: "🔓", scores: { freedom: 2, risk: 2, stability: -2 } },
    optionB: { title: "AS FOUNDATIONS", description: "Necessary structure to prevent chaos.", icon: "🧱", scores: { logic: 2, stability: 2, adventure: -1 } }
  },
  {
    id: 24, category: "future", question: "If you could know one detail about the universe:",
    optionA: { title: "HOW IT ENDS", description: "The final conclusion of everything.", icon: "🌌", scores: { logic: 2, ambition: 1, empathy: -1 } },
    optionB: { title: "IF WE ARE ALONE", description: "The truth about other life out there.", icon: "👽", scores: { adventure: 2, creativity: 1, stability: -1 } }
  },
  {
    id: 25, category: "relationships", question: "What do you value more in a friend?",
    optionA: { title: "BRUTAL HONESTY", description: "Telling you when you are wrong.", icon: "🗣️", scores: { logic: 2, risk: 1, empathy: -1 } },
    optionB: { title: "UNCONDITIONAL SUPPORT", description: "Standing by you no matter what.", icon: "🫂", scores: { empathy: 3, stability: 1, logic: -1 } }
  },
  {
    id: 26, category: "money", question: "How do you treat your resources?",
    optionA: { title: "SAVE FOR TOMORROW", description: "Prioritize security and future planning.", icon: "🏦", scores: { stability: 2, logic: 1, risk: -2 } },
    optionB: { title: "SPEND FOR TODAY", description: "Life is short, maximize the present moment.", icon: "🎉", scores: { adventure: 2, freedom: 1, stability: -2 } }
  },
  {
    id: 27, category: "conflict", question: "When someone wrongs you, what is your instinct?",
    optionA: { title: "SEEK JUSTICE", description: "Ensure things are made fair and right.", icon: "⚖️", scores: { logic: 2, ambition: 1, empathy: -1 } },
    optionB: { title: "SEEK PEACE", description: "Forgive, forget, and move on to save energy.", icon: "🕊️", scores: { empathy: 2, freedom: 1, logic: -1 } }
  },
  {
    id: 28, category: "impossible", question: "Which is worse?",
    optionA: { title: "FAILING", description: "Trying your hardest and still losing.", icon: "📉", scores: { ambition: -1, stability: 1, risk: -1 } },
    optionB: { title: "REGRETTING", description: "Never trying at all because you were afraid.", icon: "💭", scores: { risk: 2, adventure: 1, stability: -1 } }
  },
  {
    id: 29, category: "lifestyle", question: "What is your relationship with technology?",
    optionA: { title: "EARLY ADOPTER", description: "Always trying the newest, fastest tools.", icon: "🚀", scores: { adventure: 1, creativity: 1, stability: -1 } },
    optionB: { title: "MINIMALIST", description: "Keep it simple, avoid screen time when possible.", icon: "🌿", scores: { freedom: 2, stability: 1, ambition: -1 } }
  },
  {
    id: 30, category: "love", question: "In a partner, what is more attractive?",
    optionA: { title: "INTELLECT", description: "A brilliant mind that constantly challenges you.", icon: "🧠", scores: { logic: 2, ambition: 1, empathy: -1 } },
    optionB: { title: "WARMTH", description: "A deep capacity for care, humor, and joy.", icon: "☀️", scores: { empathy: 2, stability: 1, logic: -1 } }
  },
  {
    id: 31, category: "future", question: "Would you rather:",
    optionA: { title: "LIVE 1000 YEARS", description: "Witness the future, but watch everyone else pass.", icon: "⏳", scores: { logic: 2, risk: 1, empathy: -2 } },
    optionB: { title: "LIVE A NORMAL LIFESPAN", description: "Experience time exactly as it was meant to be.", icon: "🍂", scores: { stability: 2, empathy: 1, risk: -1 } }
  },
  {
    id: 32, category: "career", question: "What matters more in your career?",
    optionA: { title: "THE MISSION", description: "Doing work that changes the world.", icon: "🌍", scores: { ambition: 2, empathy: 1, stability: -1 } },
    optionB: { title: "THE LIFESTYLE", description: "Having a job that pays well and leaves you alone.", icon: "🏖️", scores: { freedom: 2, stability: 1, ambition: -2 } }
  },
  {
    id: 33, category: "impossible", question: "If you could have one superpower:",
    optionA: { title: "INVISIBILITY", description: "Move through the world completely unnoticed.", icon: "👻", scores: { freedom: 2, logic: 1, ambition: -1 } },
    optionB: { title: "FLIGHT", description: "Absolute physical liberation.", icon: "🦅", scores: { adventure: 2, freedom: 1, stability: -1 } }
  },
  {
    id: 34, category: "truth", question: "Do you believe humanity is inherently:",
    optionA: { title: "GOOD", description: "People are mostly trying their best.", icon: "🤍", scores: { empathy: 2, stability: 1, logic: -1 } },
    optionB: { title: "SELFISH", description: "People ultimately look out for themselves.", icon: "🖤", scores: { logic: 2, risk: 1, empathy: -2 } }
  },
  {
    id: 35, category: "social", question: "At a party, you are usually:",
    optionA: { title: "DEEP IN ONE CONVERSATION", description: "Talking to one person in a corner for hours.", icon: "🗣️", scores: { empathy: 2, logic: 1, adventure: -1 } },
    optionB: { title: "WORKING THE ROOM", description: "Bouncing between multiple groups all night.", icon: "🕺", scores: { adventure: 2, ambition: 1, stability: -1 } }
  },
  {
    id: 36, category: "money", question: "Would you rather:",
    optionA: { title: "OWN NOTHING", description: "But have the freedom to go anywhere, anytime.", icon: "🎒", scores: { freedom: 3, adventure: 1, stability: -2 } },
    optionB: { title: "OWN EVERYTHING", description: "Have a massive estate that requires constant maintenance.", icon: "🏰", scores: { stability: 2, ambition: 2, freedom: -2 } }
  },
  {
    id: 37, category: "relationships", question: "What is your biggest fear in a relationship?",
    optionA: { title: "LOSING YOURSELF", description: "Becoming too absorbed in the other person.", icon: "🪞", scores: { freedom: 2, logic: 1, empathy: -1 } },
    optionB: { title: "LOSING THEM", description: "The pain of them walking away.", icon: "🥀", scores: { empathy: 2, stability: 1, freedom: -1 } }
  },
  {
    id: 38, category: "impossible", question: "You have to lose one of your senses:",
    optionA: { title: "SIGHT", description: "Live in darkness, but hear the music of the world.", icon: "👁️‍🗨️", scores: { empathy: 1, stability: 1, risk: 1 } },
    optionB: { title: "HEARING", description: "Live in silence, but see the beauty of the world.", icon: "🔇", scores: { logic: 1, stability: 1, risk: 1 } }
  },
  {
    id: 39, category: "conflict", question: "When you are highly stressed, you:",
    optionA: { title: "ISOLATE", description: "Shut down and figure it out internally.", icon: "🛖", scores: { logic: 2, stability: 1, empathy: -1 } },
    optionB: { title: "VENT", description: "Talk it out loudly with anyone who will listen.", icon: "🌋", scores: { empathy: 1, adventure: 1, logic: -1 } }
  },
  {
    id: 40, category: "future", question: "How do you want to be remembered?",
    optionA: { title: "AS A PIONEER", description: "Someone who boldly went where others wouldn't.", icon: "🚀", scores: { adventure: 2, ambition: 2, stability: -1 } },
    optionB: { title: "AS A PROTECTOR", description: "Someone who kept others safe and happy.", icon: "🛡️", scores: { stability: 2, empathy: 2, risk: -1 } }
  },
  {
    id: 41, category: "lifestyle", question: "Where do you find your peace?",
    optionA: { title: "THE CITY AT NIGHT", description: "Neon lights, endless energy, and ambition.", icon: "🌃", scores: { ambition: 2, adventure: 1, stability: -1 } },
    optionB: { title: "A QUIET FOREST", description: "Stillness, nature, and deep grounding.", icon: "🌲", scores: { stability: 2, empathy: 1, risk: -1 } }
  },
  {
    id: 42, category: "impossible", question: "Which curse would you rather endure?",
    optionA: { title: "NEVER SPEAK AGAIN", description: "You can only listen and observe forever.", icon: "🤐", scores: { logic: 2, stability: 1, adventure: -2 } },
    optionB: { title: "SAY EVERY THOUGHT OUT LOUD", description: "Zero filter, absolute transparency.", icon: "📢", scores: { risk: 3, adventure: 1, stability: -3 } }
  },
  {
    id: 43, category: "future", question: "If you could shape the future of humanity, what would you choose?",
    optionA: { title: "PERFECT HARMONY", description: "No war, no pain, but no massive leaps forward.", icon: "🌍", scores: { empathy: 2, stability: 2, ambition: -2 } },
    optionB: { title: "ENDLESS PROGRESS", description: "We conquer the stars, but inequality and struggle remain.", icon: "🚀", scores: { ambition: 3, logic: 1, empathy: -2 } }
  },
  {
    id: 44, category: "work", question: "How do you tackle a massive project?",
    optionA: { title: "A BURST OF INSPIRATION", description: "Wait for the spark, then do it all in one chaotic sprint.", icon: "⚡", scores: { creativity: 2, risk: 1, stability: -2 } },
    optionB: { title: "SLOW AND STEADY", description: "Map it out and do a small piece every single day.", icon: "🐢", scores: { logic: 2, stability: 2, risk: -1 } }
  },
  {
    id: 45, category: "truth", question: "What is a harder truth to swallow?",
    optionA: { title: "YOU ARE AVERAGE", description: "Accepting that you might not be special.", icon: "🧍", scores: { ambition: -2, stability: 1, logic: 1 } },
    optionB: { title: "YOU ARE ALONE", description: "Accepting that nobody will ever truly understand you.", icon: "🌌", scores: { empathy: -2, freedom: 1, logic: 1 } }
  },
  {
    id: 46, category: "money", question: "If you won the lottery today, what is your first move?",
    optionA: { title: "DISAPPEAR", description: "Change your number, buy an island, and escape.", icon: "🏝️", scores: { freedom: 3, adventure: 1, empathy: -2 } },
    optionB: { title: "BUILD AN EMPIRE", description: "Invest it to create massive generational wealth.", icon: "🏛️", scores: { ambition: 3, logic: 1, freedom: -1 } }
  },
  {
    id: 47, category: "relationships", question: "What do you need most from a partner?",
    optionA: { title: "TO BE UNDERSTOOD", description: "Deep psychological and emotional alignment.", icon: "🧩", scores: { empathy: 2, logic: 1, adventure: -1 } },
    optionB: { title: "TO BE INSPIRED", description: "Someone who pushes you to be your absolute best.", icon: "🔥", scores: { ambition: 2, adventure: 1, stability: -1 } }
  },
  {
    id: 48, category: "conflict", question: "When an argument gets heated, what is your weapon?",
    optionA: { title: "COLD LOGIC", description: "Dismantling their points with facts and reason.", icon: "🧊", scores: { logic: 3, empathy: -2, stability: 1 } },
    optionB: { title: "EMOTIONAL APPEAL", description: "Targeting the core feelings and underlying hurt.", icon: "❤️‍🔥", scores: { empathy: 3, logic: -2, creativity: 1 } }
  },
  {
    id: 49, category: "impossible", question: "Would you rather:",
    optionA: { title: "FORGET WHO YOU ARE", description: "Total amnesia, but you keep all your skills.", icon: "👤", scores: { freedom: 2, risk: 2, stability: -2 } },
    optionB: { title: "FORGET EVERYONE ELSE", description: "You remember yourself, but all your loved ones are strangers.", icon: "👥", scores: { logic: 1, ambition: 1, empathy: -3 } }
  },
  {
    id: 50, category: "freedom", question: "Which cage is worse?",
    optionA: { title: "A GOLDEN CAGE", description: "Trapped in luxury, but someone else makes the rules.", icon: "🦚", scores: { freedom: 3, adventure: 1, stability: -2 } },
    optionB: { title: "A RUSTY CAGE", description: "Living in poverty, but with absolute freedom to choose.", icon: "⛓️", scores: { stability: 3, logic: 1, freedom: -2 } }
  },
  {
    id: 51, category: "social", question: "What is your role in a crisis?",
    optionA: { title: "THE COMMANDER", description: "Taking charge, delegating tasks, fixing the problem.", icon: "🦅", scores: { ambition: 2, logic: 2, empathy: -1 } },
    optionB: { title: "THE HEALER", description: "Calming the panicked, tending to the wounded.", icon: "🕊️", scores: { empathy: 3, stability: 1, ambition: -1 } }
  },
  {
    id: 52, category: "life", question: "Which journey appeals to you more?",
    optionA: { title: "TO THE BOTTOM OF THE OCEAN", description: "Exploring the dark, crushing, unknown depths.", icon: "🦑", scores: { adventure: 2, risk: 2, logic: 1 } },
    optionB: { title: "TO THE EDGE OF SPACE", description: "Floating in the vast, silent, infinite void.", icon: "🛰️", scores: { freedom: 2, creativity: 2, stability: -1 } }
  },
  {
    id: 53, category: "money", question: "How do you view debt?",
    optionA: { title: "AS A TOOL", description: "Leverage it to make more money.", icon: "📈", scores: { risk: 2, ambition: 2, stability: -2 } },
    optionB: { title: "AS A TRAP", description: "Avoid it at all costs to maintain peace of mind.", icon: "🚫", scores: { stability: 3, logic: 1, risk: -2 } }
  },
  {
    id: 54, category: "love", question: "What is the ultimate romantic gesture?",
    optionA: { title: "A GRAND ADVENTURE", description: "Whisking them away on a surprise trip.", icon: "✈️", scores: { adventure: 2, risk: 1, stability: -1 } },
    optionB: { title: "A QUIET SACRIFICE", description: "Giving up something huge just to see them smile.", icon: "🕯️", scores: { empathy: 3, stability: 1, ambition: -1 } }
  },
  {
    id: 55, category: "impossible", question: "You must choose how humanity communicates:",
    optionA: { title: "NO MORE LIES", description: "It is physically impossible to tell a falsehood.", icon: "⚖️", scores: { logic: 2, stability: 2, creativity: -2 } },
    optionB: { title: "NO MORE SECRETS", description: "Everyone can hear everyone else's thoughts.", icon: "🧠", scores: { risk: 3, empathy: 1, stability: -3 } }
  },
  {
    id: 56, category: "lifestyle", question: "What does your ideal home look like?",
    optionA: { title: "ULTRA-MODERN", description: "Glass, steel, smart tech, and sharp lines.", icon: "🧊", scores: { logic: 2, ambition: 1, empathy: -1 } },
    optionB: { title: "WARM & RUSTIC", description: "Wood, fire, plants, and cozy clutter.", icon: "🪵", scores: { empathy: 2, stability: 1, logic: -1 } }
  },
  {
    id: 57, category: "truth", question: "What is worse to discover?",
    optionA: { title: "YOUR IDOL IS A FRAUD", description: "The person you looked up to is terrible.", icon: "🎭", scores: { ambition: 1, logic: 1, creativity: -1 } },
    optionB: { title: "YOUR ENEMY WAS RIGHT", description: "The person you hated had the moral high ground.", icon: "♟️", scores: { empathy: 1, logic: 1, stability: -1 } }
  },
  {
    id: 58, category: "career", question: "Would you rather:",
    optionA: { title: "BE THE BOSS", description: "Hold all the power, but carry all the stress.", icon: "👑", scores: { ambition: 3, risk: 1, freedom: -1 } },
    optionB: { title: "BE THE ADVISOR", description: "Guide the boss from the shadows, with no public pressure.", icon: "📜", scores: { logic: 3, stability: 1, ambition: -1 } }
  },
  {
    id: 59, category: "freedom", question: "What represents true freedom to you?",
    optionA: { title: "NO COMMITMENTS", description: "Nobody expects anything of you.", icon: "🍃", scores: { freedom: 3, adventure: 1, stability: -2 } },
    optionB: { title: "TOTAL CONTROL", description: "You make the rules that everyone else follows.", icon: "🕹️", scores: { ambition: 2, logic: 2, freedom: -1 } }
  },
  {
    id: 60, category: "conflict", question: "How do you deal with someone who betrayed you?",
    optionA: { title: "SCORCHED EARTH", description: "Destroy their reputation and make them pay.", icon: "🔥", scores: { risk: 2, ambition: 1, empathy: -3 } },
    optionB: { title: "GHOST THEM", description: "Cut them out completely and never look back.", icon: "👻", scores: { stability: 2, logic: 1, empathy: -1 } }
  },
  {
    id: 61, category: "impossible", question: "Would you rather experience:",
    optionA: { title: "THE BEGINNING OF THE UNIVERSE", description: "Witness the Big Bang and the birth of everything.", icon: "💥", scores: { adventure: 2, creativity: 2, stability: -1 } },
    optionB: { title: "THE END OF THE UNIVERSE", description: "Witness the final fade to black.", icon: "🌌", scores: { logic: 2, risk: 1, empathy: -1 } }
  },
  {
    id: 62, category: "life", question: "What is your approach to aging?",
    optionA: { title: "FIGHT IT", description: "Optimize, biohack, and stay youthful as long as possible.", icon: "🧬", scores: { ambition: 2, logic: 1, stability: -1 } },
    optionB: { title: "EMBRACE IT", description: "Age gracefully and accept the passing of time.", icon: "🍂", scores: { stability: 2, empathy: 1, ambition: -1 } }
  },
  {
    id: 63, category: "relationships", question: "What is the key to a lasting friendship?",
    optionA: { title: "SHARED MEMORIES", description: "A long history that bonds you together.", icon: "📸", scores: { stability: 2, empathy: 1, adventure: -1 } },
    optionB: { title: "SHARED GOALS", description: "Pushing each other toward the same future.", icon: "🎯", scores: { ambition: 2, logic: 1, stability: -1 } }
  },
  {
    id: 64, category: "money", question: "You find a bag with $100,000 in cash. What do you do?",
    optionA: { title: "TAKE IT", description: "Finders keepers, no questions asked.", icon: "💰", scores: { risk: 3, freedom: 1, logic: -1 } },
    optionB: { title: "LEAVE IT", description: "It belongs to someone dangerous. Walk away.", icon: "🚶", scores: { stability: 3, logic: 2, risk: -2 } }
  },
  {
    id: 65, category: "truth", question: "Do you believe everything happens for a reason?",
    optionA: { title: "YES", description: "The universe has a grand design.", icon: "✨", scores: { empathy: 2, creativity: 1, logic: -2 } },
    optionB: { title: "NO", description: "It's all random chaos and coincidence.", icon: "🎲", scores: { logic: 3, risk: 1, empathy: -1 } }
  },
  {
    id: 66, category: "social", question: "If you walked into a room full of strangers:",
    optionA: { title: "WAIT TO BE APPROACHED", description: "Let them come to you.", icon: "🛋️", scores: { stability: 1, logic: 1, adventure: -1 } },
    optionB: { title: "START INTRODUCING YOURSELF", description: "Take the initiative and break the ice.", icon: "🤝", scores: { adventure: 2, ambition: 1, stability: -1 } }
  },
  {
    id: 67, category: "impossible", question: "You can only save one:",
    optionA: { title: "YOUR PET", description: "Your loyal, innocent companion.", icon: "🐕", scores: { empathy: 3, stability: 1, logic: -2 } },
    optionB: { title: "A STRANGER", description: "A human being you have never met.", icon: "👤", scores: { logic: 2, ambition: 1, empathy: -1 } }
  },
  {
    id: 68, category: "work", question: "What motivates you to work hard?",
    optionA: { title: "THE REWARD", description: "Money, status, and the finish line.", icon: "🏆", scores: { ambition: 3, logic: 1, creativity: -1 } },
    optionB: { title: "THE PROCESS", description: "The joy of doing the work itself.", icon: "🛠️", scores: { creativity: 2, stability: 1, ambition: -1 } }
  },
  {
    id: 69, category: "freedom", question: "Would you rather have:",
    optionA: { title: "NO RULES, BUT NO PROTECTION", description: "Total anarchy.", icon: "🔥", scores: { freedom: 3, risk: 3, stability: -3 } },
    optionB: { title: "TOTAL SAFETY, BUT NO PRIVACY", description: "Constant surveillance.", icon: "👁️", scores: { stability: 3, logic: 1, freedom: -3 } }
  },
  {
    id: 70, category: "love", question: "In love, are you driven by:",
    optionA: { title: "YOUR HEART", description: "Blind passion and instinct.", icon: "❤️", scores: { empathy: 2, risk: 1, logic: -2 } },
    optionB: { title: "YOUR HEAD", description: "Compatibility and logical partnership.", icon: "🧠", scores: { logic: 3, stability: 1, empathy: -2 } }
  },
  {
    id: 71, category: "life", question: "What sounds like a better Friday night?",
    optionA: { title: "WILD PARTY", description: "Loud music, crowds, and unpredictability.", icon: "🎉", scores: { adventure: 2, risk: 1, stability: -2 } },
    optionB: { title: "BOARD GAMES", description: "A small group of friends and friendly competition.", icon: "🎲", scores: { stability: 2, logic: 1, adventure: -1 } }
  },
  {
    id: 72, category: "impossible", question: "Would you rather:",
    optionA: { title: "KNOW WHEN YOU WILL DIE", description: "You know the exact date.", icon: "📅", scores: { logic: 2, stability: -1, risk: 1 } },
    optionB: { title: "KNOW HOW YOU WILL DIE", description: "You know the exact cause.", icon: "💀", scores: { risk: 2, logic: -1, stability: 1 } }
  },
  {
    id: 73, category: "future", question: "If you could instantly master one skill:",
    optionA: { title: "MULTIPLE LANGUAGES", description: "Speak perfectly to anyone in the world.", icon: "🗣️", scores: { empathy: 2, adventure: 1, logic: 1 } },
    optionB: { title: "ADVANCED CODING", description: "Build the software that runs the world.", icon: "💻", scores: { logic: 3, ambition: 1, empathy: -1 } }
  },
  {
    id: 74, category: "truth", question: "What do people misunderstand about you?",
    optionA: { title: "THEY THINK I'M TOO INTENSE", description: "Because you care deeply and push hard.", icon: "🌪️", scores: { ambition: 2, risk: 1, stability: -1 } },
    optionB: { title: "THEY THINK I'M TOO QUIET", description: "Because you are observing and calculating.", icon: "🦉", scores: { logic: 2, stability: 1, adventure: -1 } }
  },
  {
    id: 75, category: "money", question: "Would you take a job you hate if it paid $1,000,000 a year?",
    optionA: { title: "YES", description: "Suffer now, retire in 3 years.", icon: "🤑", scores: { logic: 2, ambition: 2, freedom: -2 } },
    optionB: { title: "NO", description: "Peace of mind is priceless.", icon: "🧘", scores: { freedom: 2, stability: 2, ambition: -1 } }
  },
  {
    id: 76, category: "relationships", question: "When someone is crying, what do you do?",
    optionA: { title: "OFFER A HUG", description: "Provide physical and emotional comfort.", icon: "🫂", scores: { empathy: 3, stability: 1, logic: -1 } },
    optionB: { title: "OFFER A SOLUTION", description: "Help them fix whatever is making them cry.", icon: "🔧", scores: { logic: 3, ambition: 1, empathy: -1 } }
  },
  {
    id: 77, category: "impossible", question: "Which pill do you swallow?",
    optionA: { title: "RED PILL", description: "You never need to sleep again.", icon: "🔴", scores: { ambition: 3, freedom: 1, stability: -1 } },
    optionB: { title: "BLUE PILL", description: "You never need to eat again.", icon: "🔵", scores: { logic: 2, stability: 1, creativity: -1 } }
  },
  {
    id: 78, category: "conflict", question: "If you are caught in a lie, do you:",
    optionA: { title: "DOUBLE DOWN", description: "Keep lying and hope they back off.", icon: "🃏", scores: { risk: 3, ambition: 1, stability: -2 } },
    optionB: { title: "CONFESS", description: "Admit it instantly and face the consequences.", icon: "🙌", scores: { logic: 2, stability: 1, risk: -1 } }
  },
  {
    id: 79, category: "social", question: "Do you prefer:",
    optionA: { title: "BEING THE HOST", description: "Organizing the event and taking care of everyone.", icon: "🥂", scores: { ambition: 2, empathy: 1, freedom: -1 } },
    optionB: { title: "BEING THE GUEST", description: "Showing up, having fun, and leaving when you want.", icon: "🎩", scores: { freedom: 2, adventure: 1, stability: -1 } }
  },
  {
    id: 80, category: "life", question: "In the end, what is the meaning of it all?",
    optionA: { title: "TO LEAVE A MARK", description: "To be remembered long after you are gone.", icon: "🏛️", scores: { ambition: 3, creativity: 1, stability: -1 } },
    optionB: { title: "TO EXPERIENCE IT", description: "To just live, feel, and enjoy the ride.", icon: "🎢", scores: { adventure: 2, freedom: 2, logic: -1 } }
  }
  
];
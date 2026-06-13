const CONFIG = {
  apiUrl: window.ENGLISH_CONNECT_API_URL || "",
  lessonSize: 6,
};

const topics = {
  social: {
    title: "Conversas sociais",
    scenes: [
      { thing: "my friend", thingPt: "meu amigo", action: "meet", actionPt: "encontrar", place: "at school", placePt: "na escola" },
      { thing: "a movie", thingPt: "um filme", action: "watch", actionPt: "assistir", place: "after class", placePt: "depois da aula" },
      { thing: "a message", thingPt: "uma mensagem", action: "send", actionPt: "enviar", place: "at home", placePt: "em casa" },
      { thing: "my family", thingPt: "minha familia", action: "visit", actionPt: "visitar", place: "on the weekend", placePt: "no fim de semana" },
    ],
  },
  travel: {
    title: "Viagens",
    scenes: [
      { thing: "my passport", thingPt: "meu passaporte", action: "show", actionPt: "mostrar", place: "at the airport", placePt: "no aeroporto" },
      { thing: "a hotel", thingPt: "um hotel", action: "book", actionPt: "reservar", place: "near the beach", placePt: "perto da praia" },
      { thing: "the museum", thingPt: "o museu", action: "visit", actionPt: "visitar", place: "in the city", placePt: "na cidade" },
      { thing: "a map", thingPt: "um mapa", action: "use", actionPt: "usar", place: "on the street", placePt: "na rua" },
    ],
  },
  work: {
    title: "Trabalho",
    scenes: [
      { thing: "an email", thingPt: "um email", action: "send", actionPt: "enviar", place: "at the office", placePt: "no escritorio" },
      { thing: "the report", thingPt: "o relatorio", action: "finish", actionPt: "terminar", place: "before lunch", placePt: "antes do almoco" },
      { thing: "a meeting", thingPt: "uma reuniao", action: "prepare", actionPt: "preparar", place: "this afternoon", placePt: "esta tarde" },
      { thing: "the project", thingPt: "o projeto", action: "review", actionPt: "revisar", place: "with my team", placePt: "com minha equipe" },
    ],
  },
  food: {
    title: "Comida",
    scenes: [
      { thing: "pizza", thingPt: "pizza", action: "order", actionPt: "pedir", place: "for dinner", placePt: "no jantar" },
      { thing: "coffee", thingPt: "cafe", action: "drink", actionPt: "beber", place: "in the morning", placePt: "de manha" },
      { thing: "a salad", thingPt: "uma salada", action: "make", actionPt: "fazer", place: "for lunch", placePt: "no almoco" },
      { thing: "soup", thingPt: "sopa", action: "cook", actionPt: "cozinhar", place: "at home", placePt: "em casa" },
    ],
  },
  sports: {
    title: "Esportes",
    scenes: [
      { thing: "soccer", thingPt: "futebol", action: "play", actionPt: "jogar", place: "on the field", placePt: "no campo" },
      { thing: "tennis", thingPt: "tenis", action: "practice", actionPt: "praticar", place: "after work", placePt: "depois do trabalho" },
      { thing: "swimming", thingPt: "natacao", action: "learn", actionPt: "aprender", place: "at the gym", placePt: "na academia" },
      { thing: "basketball", thingPt: "basquete", action: "watch", actionPt: "assistir", place: "with my friends", placePt: "com meus amigos" },
    ],
  },
  daily: {
    title: "Rotina diaria",
    scenes: [
      { thing: "coffee", thingPt: "cafe", action: "drink", actionPt: "beber", place: "in the morning", placePt: "de manha" },
      { thing: "music", thingPt: "musica", action: "listen to", actionPt: "ouvir", place: "at home", placePt: "em casa" },
      { thing: "the bus", thingPt: "o onibus", action: "take", actionPt: "pegar", place: "before work", placePt: "antes do trabalho" },
      { thing: "homework", thingPt: "dever de casa", action: "study", actionPt: "estudar", place: "after breakfast", placePt: "depois do cafe da manha" },
    ],
  },
};

const levels = {
  beginner: {
    title: "Iniciante",
    templates: [
      ({ thing, thingPt }) => [`I like ${thing}.`, `Eu gosto de ${thingPt}.`],
      ({ thing, thingPt }) => [`This is ${thing}.`, `Isto e ${thingPt}.`],
      ({ place, placePt }) => [`I am ${place}.`, `Eu estou ${placePt}.`],
      ({ action, actionPt, thing, thingPt }) => [`I want to ${action} ${thing}.`, `Eu quero ${actionPt} ${thingPt}.`],
    ],
  },
  basic: {
    title: "Basico",
    templates: [
      ({ action, actionPt, thing, thingPt, place, placePt }) => [`I usually ${action} ${thing} ${place}.`, `Eu geralmente ${actionPt} ${thingPt} ${placePt}.`],
      ({ thing, thingPt }) => [`Can you help me with ${thing}?`, `Voce pode me ajudar com ${thingPt}?`],
      ({ place, placePt }) => [`I need more time ${place}.`, `Eu preciso de mais tempo ${placePt}.`],
      ({ action, actionPt, thing, thingPt }) => [`She wants to ${action} ${thing} today.`, `Ela quer ${actionPt} ${thingPt} hoje.`],
    ],
  },
  intermediate: {
    title: "Intermediario",
    templates: [
      ({ action, actionPt, thing, thingPt, place, placePt }) => [`I have been trying to ${action} ${thing} ${place}.`, `Eu tenho tentado ${actionPt} ${thingPt} ${placePt}.`],
      ({ thing, thingPt }) => [`Could you explain why ${thing} is important?`, `Voce poderia explicar por que ${thingPt} e importante?`],
      ({ action, actionPt, thing, thingPt }) => [`If I have enough time, I will ${action} ${thing}.`, `Se eu tiver tempo suficiente, eu vou ${actionPt} ${thingPt}.`],
      ({ place, placePt }) => [`I feel more confident when I practice ${place}.`, `Eu me sinto mais confiante quando pratico ${placePt}.`],
    ],
  },
};

const state = {
  lesson: [],
  index: 0,
  mode: "write",
  completed: new Set(),
  writeOk: false,
  speakOk: false,
  streak: Number(localStorage.getItem("englishConnectStreak") || 0),
};

const els = {
  home: document.getElementById("home-screen"),
  study: document.getElementById("study-screen"),
  startApp: document.getElementById("start-app"),
  demoLesson: document.getElementById("demo-lesson"),
  backHome: document.getElementById("back-home"),
  topic: document.getElementById("topic-select"),
  level: document.getElementById("level-select"),
  age: document.getElementById("age-select"),
  buildLesson: document.getElementById("build-lesson"),
  lessonTitle: document.getElementById("lesson-title"),
  progressRing: document.querySelector(".progress-ring"),
  lessonProgress: document.getElementById("lesson-progress"),
  globalScore: document.getElementById("global-score"),
  currentStep: document.getElementById("current-step-label"),
  streak: document.getElementById("streak-label"),
  challenge: document.getElementById("challenge-label"),
  translation: document.getElementById("translation-text"),
  english: document.getElementById("english-text"),
  hintButton: document.getElementById("hint-button"),
  hint: document.getElementById("hint-text"),
  listen: document.getElementById("listen-button"),
  speed: document.getElementById("speed-range"),
  speedLabel: document.getElementById("speed-label"),
  answer: document.getElementById("answer-input"),
  checkAnswer: document.getElementById("check-answer"),
  startSpeech: document.getElementById("start-speech"),
  spoken: document.getElementById("spoken-output"),
  feedback: document.getElementById("feedback"),
  prev: document.getElementById("prev-button"),
  next: document.getElementById("next-button"),
  tabs: document.querySelectorAll(".tab"),
  writeArea: document.getElementById("write-area"),
  speakArea: document.getElementById("speak-area"),
  quizArea: document.getElementById("quiz-area"),
};

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function distance(a, b) {
  const matrix = Array.from({ length: a.length + 1 }, (_, row) => [row]);

  for (let column = 1; column <= b.length; column++) {
    matrix[0][column] = column;
  }

  for (let row = 1; row <= a.length; row++) {
    for (let column = 1; column <= b.length; column++) {
      const cost = a[row - 1] === b[column - 1] ? 0 : 1;
      matrix[row][column] = Math.min(
        matrix[row - 1][column] + 1,
        matrix[row][column - 1] + 1,
        matrix[row - 1][column - 1] + cost
      );
    }
  }

  return matrix[a.length][b.length];
}

function similarity(userText, targetText) {
  const user = normalize(userText);
  const target = normalize(targetText);

  if (!user || !target) return 0;
  return 1 - distance(user, target) / Math.max(user.length, target.length);
}

function createHint(phrase) {
  const words = phrase.replace(/[.?!]/g, "").split(" ");
  return words.map((word, index) => (index % 2 === 0 ? word : "_".repeat(Math.min(word.length, 8)))).join(" ");
}

function buildLocalLesson(topicKey, levelKey, ageProfile) {
  const topic = topics[topicKey];
  const level = levels[levelKey];
  const phrases = new Set();
  const lesson = [];

  while (lesson.length < CONFIG.lessonSize) {
    const scene = pick(topic.scenes);
    const [english, portuguese] = pick(level.templates)(scene);

    if (phrases.has(english)) continue;

    phrases.add(english);
    lesson.push({ english, portuguese });
  }

  return lesson.map((phrase, index) => ({
    id: `${topicKey}-${levelKey}-${Date.now()}-${index}`,
    english: phrase.english,
    portuguese: phrase.portuguese,
    hint: ageProfile === "child" ? createHint(phrase.english) : `Comeca com: ${phrase.english.split(" ").slice(0, 2).join(" ")}`,
  }));
}

async function buildApiLesson(topicKey, levelKey, ageProfile) {
  if (!CONFIG.apiUrl) return null;

  const response = await fetch(CONFIG.apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      topic: topics[topicKey].title,
      level: levels[levelKey].title,
      ageProfile,
      amount: CONFIG.lessonSize,
    }),
  });

  if (!response.ok) {
    throw new Error("Nao foi possivel gerar a aula pela API.");
  }

  const data = await response.json();
  return data.phrases;
}

async function generateLesson() {
  const topicKey = els.topic.value;
  const levelKey = els.level.value;
  const ageProfile = els.age.value;

  setFeedback("Gerando uma aula nova...", "warning");
  els.buildLesson.disabled = true;

  try {
    const apiLesson = await buildApiLesson(topicKey, levelKey, ageProfile);
    state.lesson = apiLesson || buildLocalLesson(topicKey, levelKey, ageProfile);
    state.index = 0;
    state.completed = new Set();
    state.writeOk = false;
    state.speakOk = false;
    els.lessonTitle.textContent = `${topics[topicKey].title} · ${levels[levelKey].title}`;
    renderPhrase();
    setFeedback(apiLesson ? "Aula gerada pela API." : "Aula gerada localmente. Quando voce ligar uma API, este fluxo ja esta preparado.", "success");
  } catch (error) {
    state.lesson = buildLocalLesson(topicKey, levelKey, ageProfile);
    state.index = 0;
    state.completed = new Set();
    renderPhrase();
    setFeedback("A API nao respondeu, entao gerei uma aula local para voce continuar praticando.", "warning");
  } finally {
    els.buildLesson.disabled = false;
  }
}

function renderPhrase() {
  const phrase = state.lesson[state.index];
  const hasLesson = Boolean(phrase);

  els.english.textContent = hasLesson ? phrase.english : "English Connect";
  els.translation.textContent = hasLesson ? phrase.portuguese : "Clique em gerar aula para comecar.";
  els.hint.textContent = hasLesson ? phrase.hint : "";
  els.hint.hidden = true;
  els.answer.value = "";
  els.spoken.value = "";
  state.writeOk = false;
  state.speakOk = false;

  buildQuizOptions();
  updateProgress();
}

function buildQuizOptions() {
  els.quizArea.innerHTML = "";
  const phrase = state.lesson[state.index];
  if (!phrase) return;

  const pool = state.lesson
    .filter((item) => item.id !== phrase.id)
    .map((item) => item.portuguese)
    .slice(0, 3);
  const options = shuffle([phrase.portuguese, ...pool]);

  options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "quiz-option";
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => {
      if (option === phrase.portuguese) {
        state.writeOk = true;
        setFeedback("Boa! Voce reconheceu o significado da frase.", "success");
      } else {
        setFeedback("Quase. Leia a frase de novo e tente ligar ao sentido completo.", "error");
      }
    });
    els.quizArea.appendChild(button);
  });
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function setFeedback(message, type = "info") {
  els.feedback.className = "feedback";
  if (type !== "info") {
    els.feedback.classList.add(`is-${type}`);
  }
  els.feedback.textContent = message;
}

function updateProgress() {
  const total = Math.max(state.lesson.length, 1);
  const percent = Math.round((state.completed.size / total) * 100);
  const globalPercent = Number(localStorage.getItem("englishConnectProgress") || percent);

  els.lessonProgress.textContent = `${percent}%`;
  els.progressRing.style.setProperty("--progress", `${percent}%`);
  els.globalScore.textContent = `${Math.max(globalPercent, percent)}%`;
  els.currentStep.textContent = `${Math.min(state.index + 1, total)}/${total}`;
  els.streak.textContent = state.streak;
}

function checkWrittenAnswer() {
  const phrase = state.lesson[state.index];
  if (!phrase) return;

  const score = similarity(els.answer.value, phrase.english);

  if (score >= 0.96) {
    state.writeOk = true;
    setFeedback("Escrita perfeita. Agora treine a fala ou avance se ja pronunciou.", "success");
  } else if (score >= 0.82) {
    state.writeOk = true;
    setFeedback("Muito perto. Aceitei a resposta, mas revise pequenos detalhes de escrita.", "warning");
  } else {
    state.writeOk = false;
    setFeedback(`Ainda nao. Compare com calma: "${phrase.english}"`, "error");
  }
}

function playPhrase() {
  const phrase = state.lesson[state.index];
  if (!phrase || !("speechSynthesis" in window)) return;

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(phrase.english);
  utterance.lang = "en-US";
  utterance.rate = Number(els.speed.value);
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function startSpeechRecognition() {
  const phrase = state.lesson[state.index];
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!phrase) return;

  if (!SpeechRecognition) {
    setFeedback("Este navegador nao liberou reconhecimento de fala. No Android, teste pelo Chrome.", "error");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  setFeedback("Estou ouvindo. Fale a frase em ingles.", "warning");
  recognition.start();

  recognition.onresult = (event) => {
    const spoken = event.results[0][0].transcript;
    els.spoken.value = spoken;
    const score = similarity(spoken, phrase.english);

    if (score >= 0.86) {
      state.speakOk = true;
      setFeedback("Pronuncia aceita. Otimo ritmo.", "success");
    } else {
      state.speakOk = false;
      setFeedback(`Voce disse "${spoken}". Escute novamente e tente mais uma vez.`, "error");
    }
  };

  recognition.onerror = () => {
    setFeedback("Nao consegui captar a fala. Verifique o microfone e tente novamente.", "error");
  };
}

function goNext() {
  const phrase = state.lesson[state.index];
  if (!phrase) return;

  if (!state.writeOk && state.mode !== "speak") {
    setFeedback("Complete a escrita ou o quiz antes de avancar.", "warning");
    return;
  }

  if (!state.speakOk && state.mode === "speak") {
    setFeedback("Fale a frase corretamente antes de avancar.", "warning");
    return;
  }

  state.completed.add(phrase.id);
  state.streak += 1;
  localStorage.setItem("englishConnectStreak", String(state.streak));
  localStorage.setItem("englishConnectProgress", String(Math.round((state.completed.size / state.lesson.length) * 100)));

  if (state.index < state.lesson.length - 1) {
    state.index += 1;
    renderPhrase();
    setFeedback("Proxima frase pronta.", "info");
  } else {
    updateProgress();
    setFeedback("Aula concluida. Gere outra aula com tema ou nivel diferente para continuar.", "success");
  }
}

function goPrev() {
  if (state.index > 0) {
    state.index -= 1;
    renderPhrase();
    setFeedback("Frase anterior carregada.", "info");
  }
}

function switchMode(mode) {
  state.mode = mode;
  els.tabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.mode === mode));
  els.writeArea.hidden = mode !== "write";
  els.speakArea.hidden = mode !== "speak";
  els.quizArea.hidden = mode !== "quiz";

  const labels = {
    write: "Digite a frase em ingles",
    speak: "Pronuncie a frase em voz alta",
    quiz: "Escolha a traducao correta",
  };

  els.challenge.textContent = labels[mode];
}

function showStudyScreen() {
  els.home.hidden = true;
  els.study.hidden = false;
  if (!state.lesson.length) {
    generateLesson();
  }
}

els.startApp.addEventListener("click", showStudyScreen);
els.demoLesson.addEventListener("click", () => {
  els.topic.value = "social";
  els.level.value = "beginner";
  showStudyScreen();
});
els.backHome.addEventListener("click", () => {
  els.study.hidden = true;
  els.home.hidden = false;
});
els.buildLesson.addEventListener("click", generateLesson);
els.checkAnswer.addEventListener("click", checkWrittenAnswer);
els.answer.addEventListener("keydown", (event) => {
  if (event.key === "Enter") checkWrittenAnswer();
});
els.listen.addEventListener("click", playPhrase);
els.startSpeech.addEventListener("click", startSpeechRecognition);
els.next.addEventListener("click", goNext);
els.prev.addEventListener("click", goPrev);
els.hintButton.addEventListener("click", () => {
  els.hint.hidden = !els.hint.hidden;
});
els.speed.addEventListener("input", () => {
  els.speedLabel.textContent = `${Number(els.speed.value).toFixed(1)}x`;
});
els.tabs.forEach((tab) => {
  tab.addEventListener("click", () => switchMode(tab.dataset.mode));
});

updateProgress();

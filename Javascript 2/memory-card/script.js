const cardsContainer = document.getElementById("cards-container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const currentEl = document.getElementById("current");
const showBtn = document.getElementById("show");
const hideBtn = document.getElementById("hide");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const addCardBtn = document.getElementById("add-card");
const clearBtn = document.getElementById("clear");
const addContainer = document.getElementById("add-container");

// Keep track of the current card
let currentActiveCard = 0;

// Store cards data
let cardsData = getCardsData();
const cardsEl = [];

// Create all cards
function createCards() {
  cardsData.forEach((data, index) => createCard(data, index));
}

// Create a single card
function createCard(data, index) {
  const card = document.createElement("div");
  card.classList.add("card");

  if (index === 0) {
    card.classList.add("active");
  }

  card.innerHTML = `
    <div class="inner-card">
      <div class="inner-card-front">
        <p>${data.question}</p>
      </div>
      <div class="inner-card-back">
        <p>${data.answer}</p>
      </div>
    </div>`;

  card.addEventListener("click", () => card.classList.toggle("show-answer"));

  // Add to DOM
  cardsEl.push(card);
  cardsContainer.appendChild(card);
}

// Navigate to the next card
nextBtn.addEventListener("click", () => {
  if (currentActiveCard < cardsEl.length - 1) {
    cardsEl[currentActiveCard].className = "card left";
    currentActiveCard++;
    cardsEl[currentActiveCard].className = "card active";
    updateCurrentText();
  }
});

// Navigate to the previous card
prevBtn.addEventListener("click", () => {
  if (currentActiveCard > 0) {
    cardsEl[currentActiveCard].className = "card right";
    currentActiveCard--;
    cardsEl[currentActiveCard].className = "card active";
    updateCurrentText();
  }
});

// Add a new card
addCardBtn.addEventListener("click", () => {
  const question = questionEl.value;
  const answer = answerEl.value;

  if (question.trim() && answer.trim()) {
    const newCard = { question, answer };
    cardsData.push(newCard); // Add to data array
    setCardsData(cardsData); // Save to localStorage
    createCard(newCard, cardsData.length - 1); // Create the card in the DOM
    questionEl.value = ""; // Clear input
    answerEl.value = ""; // Clear input
    addContainer.classList.remove("show"); // Hide add container
    updateCurrentText(); // Update current card text
  }
});

// Show the add card container
showBtn.addEventListener("click", () => {
  addContainer.classList.add("show");
});

// Hide the add card container
hideBtn.addEventListener("click", () => {
  addContainer.classList.remove("show");
});

// Set cards data in local storage
function setCardsData(cards) {
  localStorage.setItem("cards", JSON.stringify(cards));
  window.location.reload(); // Refresh to show new cards
}

// Get cards data from local storage
function getCardsData() {
  const cards = JSON.parse(localStorage.getItem("cards"));
  return cards === null ? [] : cards;
}

// Update current card text
function updateCurrentText() {
  currentEl.innerText = `${currentActiveCard + 1} / ${cardsEl.length}`;
}

// Clear cards button
clearBtn.addEventListener("click", () => {
  localStorage.clear();
  cardsContainer.innerHTML = "";
  window.location.reload();
});

// Initialize cards on page load
createCards();
updateCurrentText(); 

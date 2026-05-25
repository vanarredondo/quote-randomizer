// QUOTES DATA
const quotes = [
  { 
    text: "The only way to do great work is to love what you do.", 
    author: "Steve Jobs", 
    category: "inspiration" 
  },
  { 
    text: "You miss 100% of the shots you don't take.", 
    author: "Wayne Gretzky", 
    category: "motivation" 
  },
  { 
    text: "Life is what happens when you're busy making other plans.", 
    author: "John Lennon", 
    category: "life" 
  },
  { 
    text: "The future belongs to those who believe in the beauty of their dreams.", 
    author: "Eleanor Roosevelt", 
    category: "inspiration" 
  },
  { 
    text: "It is during our darkest moments that we must focus to see the light.", 
    author: "Aristotle", 
    category: "motivation" 
  },
  { 
    text: "The only impossible journey is the one you never begin.", 
    author: "Tony Robbins", 
    category: "motivation" 
  },
  { 
    text: "Success is not final, failure is not fatal.", 
    author: "Winston Churchill", 
    category: "success" 
  },
  { 
    text: "Be yourself; everyone else is already taken.", 
    author: "Oscar Wilde", 
    category: "life" 
  },
  { 
    text: "The best time to plant a tree was 20 years ago. The second best time is now.", 
    author: "Chinese Proverb", 
    category: "wisdom" 
  },
  // WISDOM quotes (add these)
{ 
  text: "The only true wisdom is in knowing you know nothing.", 
  author: "Socrates", 
  category: "wisdom" 
},
{ 
  text: "Wisdom is not found in books alone.", 
  author: "Unknown", 
  category: "wisdom" 
},

// HAPPINESS quotes (add these)
{ 
  text: "Happiness is not something ready made. It comes from your own actions.", 
  author: "Dalai Lama", 
  category: "happiness" 
},
{ 
  text: "The greatest happiness you can have is knowing that you don't necessarily require happiness.", 
  author: "William Saroyan", 
  category: "happiness" 
},

// LOVE quotes (add these)
{ 
  text: "Love is the only force capable of transforming an enemy into a friend.", 
  author: "Martin Luther King Jr.", 
  category: "love" 
},
{ 
  text: "To love oneself is the beginning of a lifelong romance.", 
  author: "Oscar Wilde", 
  category: "love" 
},
];

const categories = ["all", "inspiration", "motivation", "success", "life", "wisdom", "happiness", "love"];

// GET HTML ELEMENTS
const quoteTextEl = document.getElementById("quoteText");
const quoteAuthorEl = document.getElementById("quoteAuthor");
const quoteTextPopupEl = document.getElementById("quoteTextPopup");
const quoteAuthorPopupEl = document.getElementById("quoteAuthorPopup");
const newQuoteBtnEl = document.getElementById("newQuoteBtn");
const copyBtnEl = document.getElementById("copyBtn");
const shareBtnEl = document.getElementById("shareBtn");
const categoriesContainerEl = document.getElementById("categoriesContainer");

// STATE
let currentQuote = quotes[0];
let selectedCategory = "all";

// DISPLAY QUOTE FUNCTION
function displayQuote(quote) {
  quoteTextEl.textContent = `"${quote.text}"`;
  quoteAuthorEl.textContent = `— ${quote.author}`;
  quoteTextPopupEl.textContent = `"${quote.text}"`;
  quoteAuthorPopupEl.textContent = `— ${quote.author}`;
}

// GET RANDOM QUOTE
function getRandomQuote() {
  let filteredQuotes;
  
  if (selectedCategory === "all") {
    filteredQuotes = quotes;
  } else {
    filteredQuotes = quotes.filter(quote => quote.category === selectedCategory);
  }
  
  const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
  currentQuote = filteredQuotes[randomIndex];
  displayQuote(currentQuote);
}

// CREATE CATEGORY BUTTONS
function createCategoryButtons() {
  categoriesContainerEl.innerHTML = "";
  
  categories.forEach(category => {
    const btn = document.createElement("button");
    btn.className = "category-btn";
    btn.textContent = category;
    
    if (category === selectedCategory) {
      btn.classList.add("active");
    }
    
    btn.addEventListener("click", () => {
      selectedCategory = category;
      createCategoryButtons();
      getRandomQuote();
    });
    
    categoriesContainerEl.appendChild(btn);
  });
}

// COPY QUOTE
function copyQuote() {
  const textToCopy = `"${currentQuote.text}" — ${currentQuote.author}`;
  navigator.clipboard.writeText(textToCopy);
  alert("Quote copied! 💜");
}

// SHARE QUOTE
function shareQuote() {
  const textToShare = `"${currentQuote.text}" — ${currentQuote.author}`;
  const twitterURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(textToShare)}`;
  window.open(twitterURL, "_blank");
}

// BUTTON LISTENERS
newQuoteBtnEl.addEventListener("click", getRandomQuote);
copyBtnEl.addEventListener("click", copyQuote);
shareBtnEl.addEventListener("click", shareQuote);

// INITIALIZE
createCategoryButtons();
displayQuote(currentQuote);
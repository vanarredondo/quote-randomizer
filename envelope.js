// Get the elements
const envelope = document.querySelector('.pixel-envelope');
const popup = document.getElementById('quotePopup');
const closeBtn = document.getElementById('closeBtn');

// Click envelope to open popup and show a new quote
envelope.addEventListener('click', () => {
  // Get a random quote each time
  getRandomQuote();
  // Show the popup
  popup.classList.add('active');
});

// Click close button
closeBtn.addEventListener('click', () => {
  popup.classList.remove('active');
});

// Click outside card to close
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.classList.remove('active');
  }
});
// ===== ADD THIS BELOW =====

// Get all flowers
const flowers = document.querySelectorAll('.flower');

// When you click a flower, show a quote from that category
flowers.forEach(flower => {
  flower.addEventListener('click', () => {
    // Get the category from the flower's data-category attribute
    const category = flower.getAttribute('data-category');
    
    // Filter quotes by category
    const filteredQuotes = quotes.filter(q => q.category === category);
    
    // Pick a random quote from that category
    const randomQuote = filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
    
    // Show it
    currentQuote = randomQuote;
    displayQuote(currentQuote);
    popup.classList.add('active');
  });
});
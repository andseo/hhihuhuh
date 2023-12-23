  // Wait for the DOM to load
  document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.product-card-item');
    const loadMoreBtn = document.getElementById('loadMorePes');
    let currentMax = 3;

    // Function to show only a specific number of cards
    function showCards() {
      cards.forEach((card, index) => {
        card.style.display = index < currentMax ? 'flex' : 'none';
      });
    }

    // Initially show only the first three cards
    showCards();

    // Add click event listener to the Load More button
    loadMoreBtn.addEventListener('click', function () {
      currentMax += 3; // Increase the number of cards to show by 3
      showCards();
      
      // If all cards are shown, hide the Load More button
      if (currentMax >= cards.length) {
        loadMoreBtn.style.display = 'none';
      }
    });
  });

// Set the initial number of items to show
let itemsToShow = 12;
let increment = 6; // Number of items to show each time "Load More" is clicked

window.onload = function() {
  const items = document.querySelectorAll('.additional-product-items .product-item');
  
  // Initially, hide all items beyond the first set
  for (let i = itemsToShow; i < items.length; i++) {
    items[i].style.display = 'none';
  }

  // Hide the Load More button if there aren't enough items to paginate
  if (items.length <= itemsToShow) {
    document.getElementById('loadMore').style.display = 'none';
  }
};

function loadMoreItems() {
  const items = document.querySelectorAll('.additional-product-items .product-item');

  // Determine the next set of items to show
  const end = itemsToShow + increment;

  // Loop through the items and show the next set
  for (let i = itemsToShow; i < end && i < items.length; i++) {
    items[i].style.display = 'block'; // Use 'flex', 'grid', or 'inline-block' as needed
  }

  // Update the number of items shown
  itemsToShow = end;

  // Hide the Load More button if all items are shown
  if (itemsToShow >= items.length) {
    document.getElementById('loadMore').style.display = 'none';
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const reviewsContainer = document.getElementById('reviews-container');
  const reviewForm = document.getElementById('review-form');

  // Function to fetch and display reviews
  function fetchReviews() {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];

    reviewsContainer.innerHTML = ''; // Clear existing reviews

    reviews.forEach(review => {
      const reviewElement = document.createElement('div');
      reviewElement.innerHTML = `<strong>${review.name}</strong>: ${review.comment}`;
      reviewsContainer.appendChild(reviewElement);
    });
  }

  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    // Prepare review data
    const reviewData = {
      name: name,
      comment: comment
    };

    // Save the review to local storage
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push(reviewData);
    localStorage.setItem('reviews', JSON.stringify(reviews));

    // Refresh reviews and reset the form
    fetchReviews();
    reviewForm.reset();
  }

  // Attach event listener to the form submission
  reviewForm.addEventListener('submit', handleFormSubmit);

  // Fetch and display reviews on page load
  fetchReviews();
});
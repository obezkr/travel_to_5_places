const fs = require('fs');
const querystring = require('querystring');


function saveReview(reviewData) {
  // Read the reviews file
  fs.readFile('reviews.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }


    const reviews = JSON.parse(data);


    reviews.push(reviewData);


    const reviewsJson = JSON.stringify(reviews, null, 2);


    fs.writeFile('reviews.txt', reviewsJson, (err) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log('Review saved successfully!');
    });
  });
}

let requestBody = '';
process.stdin.on('data', (data) => {
  requestBody += data;
});

process.stdin.on('end', () => {
  const reviewData = querystring.parse(requestBody);
  saveReview(reviewData);
});
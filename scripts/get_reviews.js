const fs = require('fs');

function getReviews() {
   
  fs.readFile('reviews.txt', 'utf8', (err, data) = {
    if (err) {
      console.error(err);
      return;
    }

     
    console.log(data);
  });
}

getReviews();
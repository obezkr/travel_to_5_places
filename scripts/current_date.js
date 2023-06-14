function displayCurrentDate() {
      var currentDate = new Date(); // Створення об'єкту з поточною датою та часом
      var dateElement = document.getElementById('current-date'); // Отримання елементу, в якому буде відображатись дата
      dateElement.textContent = currentDate.toDateString(); // Встановлення тексту елементу на поточну дату
    }
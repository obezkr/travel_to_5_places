function displayCurrentDate() {
      var currentDate = new Date(); // ��������� ��'���� � �������� ����� �� �����
      var dateElement = document.getElementById('current-date'); // ��������� ��������, � ����� ���� ������������ ����
      dateElement.textContent = currentDate.toDateString(); // ������������ ������ �������� �� ������� ����
    }
// script.js

// Hàm load JSON data từ backend
function loadJSONData() {
  // Khởi tạo một đối tượng XMLHttpRequest
  const xhr = new XMLHttpRequest();

  // Định nghĩa URL backend cung cấp JSON (thay thế "/data" bằng URL thực tế)
  const url = "https://itest.com.vn/lects/webappdev/json/data/";

  // Cấu hình yêu cầu GET
  xhr.open("GET", url, true);

  // Hàm xử lý khi có thay đổi trạng thái
  xhr.onreadystatechange = function () {
    // Kiểm tra nếu trạng thái là 4 (hoàn thành) và mã phản hồi là 200 (thành công)
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Chuyển đổi JSON thành mảng các đối tượng JavaScript
      const data = JSON.parse(xhr.responseText);

      // Hiển thị dữ liệu lên bảng
      displayData(data);
    }
  };

  // Gửi yêu cầu
  xhr.send();
}

// Hàm hiển thị dữ liệu trong bảng
function displayData(data) {
  // Lấy phần tbody của bảng
  const tableBody = document
    .getElementById("data-table")
    .getElementsByTagName("tbody")[0];

  // Duyệt qua từng đối tượng trong mảng JSON
  data.forEach((person) => {
    // Tạo một hàng mới trong bảng
    const row = document.createElement("tr");

    // Tạo ô cho họ và tên
    const nameCell = document.createElement("td");
    nameCell.textContent = person.name;
    row.appendChild(nameCell);

    // Tạo ô cho tuổi
    const ageCell = document.createElement("td");
    ageCell.textContent = person.age;
    row.appendChild(ageCell);

    // Tạo ô cho số lượng và tên xe
    const carsCell = document.createElement("td");
    let carInfo = "";

    // Duyệt qua các đối tượng cars và thêm vào chuỗi thông tin
    person.cars.forEach((car) => {
      carInfo += car.name + " - " + car.models.join(", ") + "; ";
    });

    carsCell.textContent = carInfo.trim();
    row.appendChild(carsCell);

    // Thêm hàng vào bảng
    tableBody.appendChild(row);
  });
}

// Gọi hàm loadJSONData khi tải trang
window.onload = function () {
  loadJSONData();
};

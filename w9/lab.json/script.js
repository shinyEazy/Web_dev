async function loadData() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) throw new Error("Failed to fetch data");

    const data = await response.json();
    const tableBody = document.querySelector("#data-table tbody");

    tableBody.innerHTML = "";

    data.forEach((person) => {
      let personRowSpan = person.cars.reduce(
        (sum, car) => sum + car.models.length,
        0
      );

      person.cars.forEach((car, carIndex) => {
        car.models.forEach((model, modelIndex) => {
          const row = document.createElement("tr");

          if (carIndex === 0 && modelIndex === 0) {
            const nameCell = document.createElement("td");
            nameCell.textContent = person.name;
            nameCell.rowSpan = personRowSpan;
            row.appendChild(nameCell);

            const ageCell = document.createElement("td");
            ageCell.textContent = person.age;
            ageCell.rowSpan = personRowSpan;
            row.appendChild(ageCell);

            const carCountCell = document.createElement("td");
            carCountCell.textContent = person.cars.length;
            carCountCell.rowSpan = personRowSpan;
            row.appendChild(carCountCell);
          }

          if (modelIndex === 0) {
            const carNameCell = document.createElement("td");
            carNameCell.textContent = car.name;
            carNameCell.rowSpan = car.models.length;
            row.appendChild(carNameCell);
          }

          const modelCell = document.createElement("td");
          modelCell.textContent = model;
          row.appendChild(modelCell);

          tableBody.appendChild(row);
        });
      });
    });
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

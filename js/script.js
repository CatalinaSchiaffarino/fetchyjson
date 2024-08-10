const DATA_URL = "json/data.json";
const container = document.getElementById("container");

function showData(dataArray) {
  container.innerHTML = '';
  for (const item of dataArray) {
    container.innerHTML += `<p>${item.name} ${item.lastname}</p>`;
  }
}

fetch(DATA_URL)
  .then(response => response.json())
  .then(data => {
    showData(data.students);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

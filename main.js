const API_URL = "https://jsonplaceholder.typicode.com/todos/";

const btnLoad = document.getElementById("btnLoad");
const btnClear = document.getElementById("btnClear");
const tblRecords = document.getElementById("tblRecords");
const loading = document.getElementById("loading");

async function loadDataFromAPI() {
  loading.textContent = "Loading data...";

  tblRecords.innerHTML = "";

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to load data from API.");
    }

    const data = await response.json();

    displayData(data);

    loading.textContent = "";
  } catch (error) {
    console.error(error);

    loading.textContent = "Error: Unable to load data from the API.";
  }
}

function displayData(data) {
  tblRecords.innerHTML = "";

  data.forEach((todo) => {
    const row = document.createElement("tr");

    const userID = document.createElement("td");
    userID.textContent = todo.userId;

    const taskID = document.createElement("td");
    taskID.textContent = todo.id;

    const title = document.createElement("td");
    title.textContent = todo.title;

    const status = document.createElement("td");

    if (todo.completed) {
      status.textContent = "Completed";
    } else {
      status.textContent = "Pending";
    }

    row.appendChild(userID);
    row.appendChild(taskID);
    row.appendChild(title);
    row.appendChild(status);

    tblRecords.appendChild(row);
  });
}

function clearTable() {
  tblRecords.innerHTML = "";

  loading.textContent = "";
}

btnLoad.addEventListener("click", loadDataFromAPI);

btnClear.addEventListener("click", clearTable);

export const API_URL = "https://jsonplaceholder.typicode.com/todos/";

export async function getDataFromAPI() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch data from API.");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}

export function clearTable(tableBody) {
  tableBody.innerHTML = "";
}

export function createTableRow(todo) {
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

  return row;
}

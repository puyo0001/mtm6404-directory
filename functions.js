// 1- List function
function list(clients) {
  return clients
    .map(
      (client, index) => `
          <li class="list-group-item d-flex justify-content-between" data-index="${index}">
            ${client.name}
            <strong>$ ${client.balance.toFixed(2)}</strong>
          </li>
        `
    )
    .join(""); // Join the array of strings into a single HTML string
} // Create a list of clients

// 2- Order function
function order(clients, property) {
  return clients.sort((a, b) => {
    if (a[property] < b[property]) return -1;
    if (a[property] > b[property]) return 1;
    return 0;
  });
} // Sort the clients array by the given property

// 3- Total function
function total(clients) {
  return clients.reduce((sum, client) => sum + client.balance, 0);
} // Sum all the balances

// 4. Info function
function info(index) {
  return clients.find((client, i) => i === index);
} // Find the client with the given index

// 5. Search function
function search(query) {
  return clients.filter((client) =>
    client.name.toLowerCase().includes(query.toLowerCase())
  );
} // Filter the clients array by the given query

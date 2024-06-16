document.getElementById('fetch-users').addEventListener('click', fetchUsers);

async function fetchUsers() {
    const url = 'https://reqres.in/api/users';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayUsers(data.data);
    } catch (error) {
        console.error('Fetch error: ', error);
    }
}

function displayUsers(users) {
    const userContainer = document.getElementById('user-container');
    userContainer.innerHTML = ''; // Clear previous users
    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';
        userCard.innerHTML = `
            <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
            <h2>${user.first_name} ${user.last_name}</h2>
            <p>${user.email}</p>
        `;
        userContainer.appendChild(userCard);
    });
}

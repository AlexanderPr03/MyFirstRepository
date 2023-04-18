function fetchUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())  
           .then(users => users.map(user => user.name))
           .catch((err) => notification.classList.add('visible'));       
}

async function fetchData() {
    const response = await fetch('https://jsdonplaceholder.typicode.com/users');
    const data = await response.json();
    
    return data;
}


console.log(fetchData());
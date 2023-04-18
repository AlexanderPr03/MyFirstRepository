async function fetchData() {
    const response = await fetch('https://jsdonplaceholder.typicode.com/users');
    const data = await response.json();
    
    return data;
}

console.log(fetchData());
console.log(fetchData());
console.log(fetchData());
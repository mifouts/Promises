fetch("https://jsonplaceholder.typicode.com/users/1")

// 1. Then

fetch("https://jsonplaceholder.typicode.com/users/1").then((response) => {
    console.log(response.json())
    response.json().then((data) => {})
});

// 2. Async Await


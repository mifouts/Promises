// fetch("https://jsonplaceholder.typicode.com/users/1")
const emailRef = document.querySelector(".email");
// 1. Then

fetch("https://jsonplaceholder.typicode.com/users/1").then((response) => {
    response.json().then(data => {
        emailRef.innerHTML = data.email;
    })
});

// 2. Async Await


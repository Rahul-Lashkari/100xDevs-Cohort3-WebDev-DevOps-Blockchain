// GET request using Fetch API
// Function to fetch data using Fetch API - Promise version
function getData1() {
    // Fetch API uses Promises to handle requests
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json()) 
        .then(json => console.log(json)) 
        .catch(error => console.error(error)); 
}

// Function to fetch data using Fetch API - Async/Await version
async function getData2() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1"); 
        const json = await response.json(); 
        console.log(json); 
    } catch (error) {
        console.error(error); 
    }
}

getData1();
getData2();


// POST request using Fetch API
// Function to post data using Fetch API - Promise version
function postData1() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST", 
        body: JSON.stringify({
            title: "Hi", 
            body: "bar",
            userId: 1,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8", 
            "Authorization": "Bearer my token", 
        },
    })
        .then(response => response.json()) 
        .then(json => console.log(json)) 
        .catch(error => console.error(error));
}

// Function to post data using Fetch API - Async/Await version
async function postData2() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({
                title: "Hello", 
                body: "bar",
                userId: 2,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8", 
                "Authorization": "Bearer my token",
            },
        });

        const json = await response.json();
        console.log(json); 
    } catch (error) {
        console.error(error); 
    }
}

postData1();
postData2();

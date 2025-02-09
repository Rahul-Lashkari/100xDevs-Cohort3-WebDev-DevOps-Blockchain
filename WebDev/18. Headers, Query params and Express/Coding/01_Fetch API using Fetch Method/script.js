async function fetchPost() {
    console.log("Before Sending Request");    

    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    
    const data = await response.json();

    console.log(data);

    console.log("After Receiving Response");

    // document.getElementById("posts").innerText = data.title;

    document.getElementById("posts").innerText = JSON.stringify(data);
}

fetchPost();

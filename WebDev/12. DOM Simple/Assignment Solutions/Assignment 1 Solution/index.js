function addTodo() {
    const input = document.querySelector("input");

    const value = input.value;

    if (value.trim()) {
        
        const element = document.createElement("div");

        
        element.innerText = value;

        
        document.querySelector("body").appendChild(element);
    } else { 
        alert("Please write something in the input field!");
    }
}
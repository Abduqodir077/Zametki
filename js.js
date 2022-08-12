const groceries = document.getElementsByClassName("groceries")[0];
const pencil = document.getElementById("pencil");
const allItems = document.getElementById("allItems");
const userInput = document.getElementById("userInput");
const par2 = document.getElementById("par2");

pencil.addEventListener("click", () => {
    allItems.innerHTML = "";
})

userInput.addEventListener("keydown", (event) => {
    {
        if(event.key == "Enter")
        addItem();
    }
})

function addItem(){
    let h2 = document.createElement("h2");
    h2.innerHTML = "- " + userInput.value;

    h2.addEventListener("click", () => {
        h2.style.textDecoration = "line-through";
    })

    allItems.insertAdjacentElement("beforeend", h2);
    userInput.value = "";
}

// userInput.addEventListener("click", () =>{
//     localStorage.setItem('text', par2.value);
// });
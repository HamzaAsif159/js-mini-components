
document.getElementById("search-input").addEventListener('keyup', (event) => {
let allNames = document.getElementsByClassName("name");
let inputName = event.target.value.toLowerCase();
    for(let counter = 0; counter < allNames.length; counter++) {
        const currentName = allNames[counter].textContent.toLowerCase();
        if (currentName.includes(inputName)) {
           allNames[counter].style.display = "block";
        }
        else {
            allNames[counter].style.display = "none";
        }
    }
})
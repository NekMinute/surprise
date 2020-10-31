const button = document.querySelector('#button')
const input = document.querySelector('#input')
const goButton = document.querySelector('.goButton')


button.addEventListener('click', check);

function check(event) {
    event.preventDefault()
    if(input.value === "baby"){
        goButton.style.display = "inline";
        input.style.borderColor = "gold"
    }
    else{
        input.style.borderColor = "red"
    }

    // console.log("hey")
}

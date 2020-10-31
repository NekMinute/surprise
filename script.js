// variable
const msgBtn = document.querySelector('.msg-btn');
const msg = document.querySelector('.msg-p');
var a = "";
var b = "";


// event listners
msgBtn.addEventListener('click', displayThis);


//functions
// function displayThis(event){
//     event.preventDefault();
//     // a = "adkbud"
//     // msg.innerText = "hjbaje"
//     for(let i = 0; i < 100 ; i++){
//         msg.innerText = msg.innerText + "Love you verrrrrrrrrryyyyy much Babyyyyyyy... \n";
//     }
// }

function displayThis(event){
    event.preventDefault();
    setInterval(() => {a = a + "very ";
        msg.innerText = msg.innerText + "Love you " + a + " much Babyyyyyyy... \n";
}, 500 )
}


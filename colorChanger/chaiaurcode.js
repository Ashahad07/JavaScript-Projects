const buttons = document.querySelectorAll('.button')
// console.log(buttons)

const body = document.querySelector('body');

buttons.forEach((button) => {
//   console.log(button.id)
    button.addEventListener("click",function (e) {
        console.log(e.target.id)
        body.style.backgroundColor = e.target.id
        // if (e.target.id === 'grey') {
        //     body.style.backgroundColor = 'grey'; 
        // }
         
    })
}
)
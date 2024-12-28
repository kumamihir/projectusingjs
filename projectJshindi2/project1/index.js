const buttons = document.querySelectorAll(".box")
const body = document.querySelector("body")

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'box1'){
            body.style.backgroundColor = 'red';
        }
        if(e.target.id === 'box2'){
            body.style.backgroundColor = 'green';
        }
        if(e.target.id === 'box3'){
            body.style.backgroundColor = 'pink';
        }
        if(e.target.id === 'box4'){
            body.style.backgroundColor = 'black';
        }
    })
})

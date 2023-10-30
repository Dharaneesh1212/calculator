`use strict`

let string = ""
const buttonsEl = document.querySelectorAll('button');
buttonsEl.forEach((button)=>{
    button.addEventListener('click',(e)=>{

        if(e.target.innerText === "="){
            string = eval(string)
            document.getElementById('input-area').value = string;
        }
        else if(e.target.innerText === "C"){
            string = "";
            document.getElementById('input-area').value = string;
        }
        else{
        
        string = string + e.target.innerText;
        document.getElementById('input-area').value = string
        }
    })
})



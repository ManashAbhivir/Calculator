console.log("Life is beautiful with Shree Ji !!");

const button = document.querySelectorAll(".button");
const screentxt = document.querySelector("#screentxt");
const equalTo = document.querySelector("#equalTo");
const ONC = document.querySelector("#ONC");
const partialRes = document.querySelector("#partialRes");
const swapdiv = document.querySelector(".swapcontainer");

const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");

const swapToTrigo = () => {
seven.innerText = "sin";
eight.innerText = "cos";
nine.innerText = "tan";
sub.innerText = "Hist"; 
add.innerText = "Fact";
six.innerText = "x ^ y";
five.innerText = "log x";
four.innerText = "ln x";
}                            

const swapToNumbers = () => {
    seven.innerText = "7";
    eight.innerText = "8";
    nine.innerText = "9";
    sub.innerText = "-";
    add.innerText = "+";
    six.innerText = "6";
    five.innerText = "5";
    four.innerText = "4";

}


equalTo.disabled = false;
button.disabled = true;



let string = "";
let prevString = "";
Array.from(button).forEach((button) =>{
    button.addEventListener("click",(evt) =>{
    bId = button.getAttribute("id");
    console.log(`button was clicked ${bId}`);
                                      

    if(evt.target.innerHTML == '='){
    prevString = string;
    string = eval(string);
    screentxt.innerText = string;
    screentxt.style.fontSize = "60px";
    partialRes.innerText = "";
    // equalTo.disabled = true;
    string = "";
    }
    else if(evt.target.innerHTML == 'ON/C'){
    screentxt.innerText = "";
    string = "";
    partialRes.innerText = "";
    button.disabled = false;
    }

    else if(evt.target.innerHTML == 'root'){
    string = eval(string);
    string = (string)**(0.5);
    screentxt.innerText = string;
    partialRes.innerText = string; 
    }
    else if(evt.target.innerHTML == 'swap'){
      if(seven.innerText == "7"){
    swapdiv.style.backgroundColor = "grey";    
    
    swapToTrigo();
      }
    
    else if(evt.target.innerHTML == 'ln x'){
        let str = "";


        
        screentxt.innerText = calcLn(x);
    }

    else{
    swapdiv.style.backgroundColor = "black";
    swapToNumbers();
     }
}
    else if(evt.target.innerHTML == 'Hist'){
        screentxt.innerText = prevString; 
        screentxt.style.opacity = "0.5"
    }

    else if(evt.target.innerHTML == 'MC'){
    }

    else if(evt.target.innerHTML == 'M+'){
    }
    else if(evt.target.innerHTML == 'Fact'){
        let str = "";
        button.forEach((button) =>{

            button.addEventListener("click",(e) =>{
                str += e.target.innerHTML ; 
            })
        })
        string = calcFact(eval(str));
        screentxt.innerText = string;
    }

     
    else{
     console.log(evt.target);
     string += evt.target.innerHTML;
     console.log(string);
     screentxt.innerText = string;      
     screentxt.style.fontSize = "30px";
     partialRes.innerText = eval(string);
    }
    })

})

const calcFact = (n) =>{
if(n==1){
    return 1;
}
if(n==0){
    return 1;
}
return calcFact(n-1)*n;
}
 
const calcLn = (x) =>{
    return Math.ln10(x);
}

// ONC.addEventListener("double click", (evt) =>{
//     prevString = "";
// })
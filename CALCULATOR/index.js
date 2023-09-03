let btns = document.getElementsByClassName("btn");
let ans = "0";
let operator = "";
let operatorIdx = -1;

function updateAnsDOM(){
    document.getElementById("computedAns").innerHTML = ans;
}



// to find operator index 
function getOperatorIdx(){
    operator = ans[ans.length - 1];
    operatorIdx = ans.length - 1;
}

for(let i=0;i<btns.length;i++){
    btns[i].addEventListener("click",()=>{
        let btn = btns[i];

        // to ignore calculation btns
        if(!btn.classList.contains("num") && !btn.classList.contains("operator"))
            return;
        
        // check for more than one operator 
        if(operator!="" && btn.classList.contains("operator")){
            return;   
        }

        if(ans == "0")
            ans = btn.innerHTML;
        else
            ans += btn.innerHTML;
        
        if(operator=="" && btn.classList.contains("operator")){
            getOperatorIdx();
        }          
        updateAnsDOM();
    })
}


// Equal Btn
let equalBtn = document.getElementById("equalBtn");
equalBtn.addEventListener("click",()=>{

    // Extracting left and right side numbers and converting string to number
    let numA = Number(ans.substring(0,operatorIdx));
    let numB = Number(ans.substring(operatorIdx+1, ans.length));
    let calcAns = 0;

    switch (operator) {
        case '%':
            calcAns = numA % numB;
            break;
        
        case '/':
            calcAns = numA / numB;
            break;
        
        case 'x':
            calcAns = numA * numB;
            break;
        
        case '-':
            calcAns = numA - numB;
            break;
        
        case '+':
            calcAns = numA + numB;
            break;
    }

    ans = String(calcAns);
    updateAnsDOM();

    operator = "";
    operatorIdx = -1;
})

// Clear Btn
let clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click",()=>{
    operator = "";
    operatorIdx = -1;
    ans = "0";
    updateAnsDOM();
})

// Converter Btn
let converterBtn = document.getElementById("converterBtn");
converterBtn.addEventListener("click",()=>{
    if(operator == ""){
        if(ans[0] == '-'){
            ans = ans.substring(1,ans.length);
        }else{
            ans = "-" + ans;
        }
        updateAnsDOM();
    }
})

// Backspace Btn
let backspaceBtn = document.getElementById("backspaceBtn");
backspaceBtn.addEventListener("click",()=>{
    if(ans.length > 1){
        ans = ans.substring(0, ans.length - 1);

        // for removing old opeartor
        if(operatorIdx == ans.length){
            operator = "";
            operatorIdx = -1;
        }

    }else{
        ans = "0";
    }
    updateAnsDOM();
})
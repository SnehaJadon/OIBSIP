let btns= document.getElementsByClassName("btn");
let ans="0";
let opeartor="";
let operatorIdx=-1;
// console.log(btns);

function updateAnsDOM(){
    document.getElementById("computedAns").innerHTML= ans;
}
function getOperatorIdx(){
    operator = ans[ans.length-1];
    operatorIdx = ans.length-1;
    
}

for(let i=0;i<btns.length;i++){
    let btn = btns[i];
    btn.addEventListener("click", ()=>{

        if(!btn.classList.contains("num") && !btn.classList.contains("operator")) return;

        if(ans == "0") {
            ans = btn.innerHTML;
        }
        else
            ans+=btn.innerHTML;

        if(btn.classList.contains("operator")){
            getOperatorIdx();
        }
        updateAnsDOM();
    })


}

let equalBtn = document.getElementById("equalBtn");

equalBtn.addEventListener("click", ()=>{
    let num1 = Number(ans.substring(0, operatorIdx));
    let num2 = Number(ans.substring(operatorIdx+1, ans.length));
    
    let calAns =0;
    switch(operator){
        case "%": 
            calAns = num1%num2;
            break;
        case "/": 
            calAns = num1/num2;
            break;
        case "*": 
            calAns = num1*num2;
            break;
        case "-": 
            calAns = num1-num2;
            break;
        case "+": 
            calAns = num1+num2;
            break;
    }

    ans = calAns;
    updateAnsDOM();
    opeartor = "";
    operatorIdx = -1;
})

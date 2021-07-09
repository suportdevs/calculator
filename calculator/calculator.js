function getHistory(){
    return document.getElementById("calculator-value").innerText;
}
function printHistroy(num){
    document.getElementById("calculator-value").innerText = num;
}

function getOutput(){
    return document.getElementById("calculator-result").innerText;
}
function printOutput(num){
    if(num==""){
        document.getElementById("calculator-result").innerText = num;
    }else{
        document.getElementById("calculator-result").innerText = getFormattedNumber(num);
    }  
}

function getFormattedNumber(num){
    if(num=="-"){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
function reverseFormattedNumber(num){
    return Number(num.replace(/,/g,''));
}

var operator = document.getElementsByClassName("operator");
for(var i=0; i<operator.length; i++){
    operator[i].addEventListener("click", function(){
        if(this.id=="clear"){
            printHistroy("");
            printOutput("");
        }
        else if(this.id=="backspace"){
            var output = reverseFormattedNumber(getOutput()).toString();
            output = output.substr(0, output.length-1);
            printOutput(output);
        }
        else{
            var history = getHistory();
            var output = getOutput();
            if(output=="" && history!=""){
                if(isNaN(history[history.length-1])){
                    history = history.substr(0, history.length-1);
                };
            }
            if(output!="" || history!=""){
                output = output==""?
                output : reverseFormattedNumber(output);
                history = history + output;
                if(this.id=="="){
                    var result = eval(history);
                    printOutput(result);
                    printHistroy("");
                }
                else{
                    history = history+this.id;
                    printHistroy(history);
                    printOutput("");
                }
            }
        }
    })
}

var number = document.getElementsByClassName("number");
for(var i=0; i<number.length; i++){
    number[i].addEventListener("click", function(){
        var output = reverseFormattedNumber(getOutput());
        if(output!=NaN){ //if output is a number
            output = output+this.id;
            printOutput(output);
        }
    })
}
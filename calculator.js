function getHistory(){
    return document.getElementById('calculator-value').innerText;
}
function printHistory(num){
    document.getElementById('calculator-value').innerText = num;
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

var operator = document.getElementsByClassName("oparator");
for(var i=0; i<operator.length; i++){
    var element = operator[i];
    element.addEventListener("click", function(){
        if(this.id=="clear"){
            printOutput("");
            printHistory("");
        }
        else if(this.id=="backspace"){
            var output = reverseFormattedNumber(getOutput()).toString();
            output = output.substr(0,output.length-1);
            printOutput(output);
        }
        else{
            var output = getOutput();
            var history = getHistory();
            if(output=="" && history!=""){
                if(isNaN(history[history.length-1])){
                    history = history.substr(0,history.length-1);
                };
            }
            if(output!="" || history!=""){
                output = output==""?
                output : reverseFormattedNumber(output);
                history = history + output;
                if(this.id=="="){
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history = history+this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    })
}

var number = document.getElementsByClassName("number");
for(var i=0; i<number.length; i++){
    var element = number[i];
    element.addEventListener("click", function(){
        var output = reverseFormattedNumber(getOutput());
        if(output!=NaN){ // if output is a number
            output = output+this.id;
            printOutput(output);
        }
    })
}
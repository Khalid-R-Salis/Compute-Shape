const pi = 3.142;
function dropdown(){
    var select = document.getElementById('shapes').value;
    if (select=="rectangle") {

        document.getElementById("content").style.backgroundColor="green";
        document.getElementById("Length").innerHTML = "Enter Length";
        document.getElementById("Breath").innerHTML = "Enter Breath";
        document.getElementById("input2").disabled= false;
        document.getElementById("input1").value= "";
        document.getElementById("input2").value= "";
        document.getElementById("result").innerHTML= "";
        // document.getElementById(radio1).checked == true;

}else if(select=="circle"){
        document.getElementById("content").style.backgroundColor="lightblue";
        document.getElementById("input2").disabled=true;
        document.getElementById("Length").innerHTML = "Enter Radius"
        document.getElementById("input1").value= "";
        document.getElementById("input2").value= "";
        document.getElementById("result").innerHTML= "";
}else{
        document.getElementById("content").style.backgroundColor="#7097AB";
        document.getElementById("input2").disabled=true;
        document.getElementById("Length").innerHTML = "Enter Sides"
        document.getElementById("input1").value= "";
        document.getElementById("input2").value= "";
        document.getElementById("result").innerHTML= "";

}
};

 function compute(){
    var select2 = document.getElementById('shapes').value;
    let takeInpute1 = +(document.getElementById("input1").value);
    let takeInpute2 = +(document.getElementById("input2").value);
 
 if(select2 == "rectangle" && takeInpute1 !=0 && takeInpute2 !=0 ){
    if(radio1.checked == true && radio2.checked == false){
        let Area = (takeInpute1 * takeInpute2).toFixed(2);
    document.getElementById("result").innerHTML = `for the Area of the Rectangle is: ${Area}`
    } else if(radio1.checked == false && radio2.checked == true){
        let Perimeter= (2*(takeInpute1 + takeInpute2)).toFixed(2);
    document.getElementById("result").innerHTML = `for the Perimeter of the Rectangle is: ${Perimeter} `
    }
    } else if(select2 == "circle" && takeInpute1 !=0 && takeInpute2 == ""){
        if(radio1.checked == true && radio2.checked == false){
            let Area = pi * (takeInpute1 * takeInpute1);
            document.getElementById("result").innerHTML = `for the Area of the Circle is: ${Area}`
        } else if(radio1.checked == false && radio2.checked == true){
            let Perimeter = (2 * pi* takeInpute1).toFixed(2);
            // abbNum(Perimeter,2);
            document.getElementById("result").innerHTML = `for the Perimeter of the Circle is: ${Perimeter}`
        }

    } else if(select2 == "square" && takeInpute1 !=0 && takeInpute2 == ""){
        if(radio1.checked == true && radio2.checked == false){
            let Area = (takeInpute1 * takeInpute1).toFixed(2);
            document.getElementById("result").innerHTML = `for the Area of the Square is: ${Area}`
        } else if(radio1.checked == false && radio2.checked == true){
            let Perimeter = 4*takeInpute1;
            document.getElementById("result").innerHTML = `for the Perimeter of the Square is: ${Perimeter}`
        }
    }
}

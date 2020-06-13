var maths = +prompt("Enter Maths marks:");
var english = +prompt("Enter English marks:");
var science = +prompt("Enter Science marks:");
var total = 300;
var MarksObtained = (maths + english + science);
var percent = (MarksObtained/total)*(100)
if (percent>=80 && percent <=100 ){
    alert("Total Marks:" + total + "\n Marks Obtained:" + MarksObtained + "\n Percentage:" + percent + "\n Grade : A-one"+ "\n Remarks : Excellent")
}
else if (percent>=70 && percent <=80 ){
    alert("Total Marks:" + total + "\n Marks Obtained:" + MarksObtained + "\n Percentage:" + percent + "\n Grade : A"+ "\n Remarks : Good"   );
}
else if (percent>=60 && percent <=70 ){
    alert("Total Marks:" + total + "\n Marks Obtained:" + MarksObtained + "\n Percentage:" + percent + "\n Grade : B"+ "\n Remarks : You need to Improve"   );
}
else if (percent<=60){
    alert("Total Marks:" + total + "\n Marks Obtained:" + MarksObtained + "\n Percentage:" + percent + "\n Grade : C"+ "\n Remarks : Fail"   );
}
else{
    alert()
}

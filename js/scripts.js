//weight / height squared
var answer;

var bmi = function(weight, height){
  return weight / (height * height);
}

var getWeightData = function(){
  var measureweight = document.getElementById("kilo").checked;

  if (measureweight === true){
    return document.getElementById("weight").value;
  } else {
    var wt = parseFloat(document.getElementById("weight").value);
    return wt * 0.45359237;
  }
}

var getHeightData = function(){
  var measureheight = document.getElementById("cent").checked;

  if (measureheight === true){
    var htcent = parseFloat(document.getElementById("height").value);
    return htcent / 100;
  } else {
    //convert to kg
    var ht = parseFloat(document.getElementById("height").value);
    return (ht / 100) * 2.54;
  }
}

var subanswer = function(){
  if (answer <= 18.5){
    return "underweight";
  } else if (answer > 18.5 && answer < 25){
    return "normal";
  } else if (answer >= 25 && answer < 30){
    return "overweight";
  } else if (answer >= 30 && answer < 35){
    return "obese";
  } else if (answer >= 35 && answer < 40){
    return "obese";
  } else {
    return "extremely obese";
  }
}

var run = function(){
  var weight = getWeightData();
  var height = getHeightData();
  answer = bmi(weight, height);
  document.getElementById("result").innerHTML = "Your BMI is " + answer.toFixed(0) + ".";
  var answer2 = subanswer();
  document.getElementById("explanation").innerHTML = "The BMI folks would say you are " + answer2 + ".";
}

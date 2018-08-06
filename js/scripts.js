//weight / height squared

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

var run = function(){
  var weight = getWeightData();
  var height = getHeightData();
  var answer = bmi(weight, height);
  document.getElementById("result").innerHTML = "Your BMI is " + answer.toFixed(0) + ".";
}

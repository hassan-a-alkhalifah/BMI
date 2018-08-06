//weight / height squared

var bmi = function(weight, height){
  return weight / (height * height);
}

var getWeightData = function(){
  var measureweight = document.getElementById("kilo").checked;

  if (measureweight === true){
    //nothing
    return parseFloat(document.getElementById("weight").value);
  } else {
    //convert to kg
    var wt = parseFloat(document.getElementById("weight").value);
    return wt * 0.45359237;
  }
}

var getHeightData = function(){
  var measureheight = document.getElementById("cent").checked;

  if (measureheight === true){
    //nothing
    return parseFloat(document.getElementById("height").value);
  } else {
    //convert to kg
    var ht = parseFloat(document.getElementById("height").value);
    return ht * 2.54;
  }
}

var weight = getWeightData();
var height = getHeightData();

console.log(height);


getElementById("result").innerHTML = "Your BMI is";

function bmi(w, h) {
  var bmi=w/(h*h);
  return bmi<=18.5?"Underweight":bmi <= 25.0?"Normal": bmi <= 30.0?"Overweight": "Obese";
}
//Another Sol

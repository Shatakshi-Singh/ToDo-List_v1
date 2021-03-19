//jshint esversion:6

exports.getDate = function(){ //a way of declaring function and save lines

let today = new Date();

let options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};

let day = today.toLocaleDateString("en-US", options);

return day;
}

module.exports.getDay = getDay;
function getDay(){

let today = new Date();

let options = {
  weekday: "long",

};

 return today.toLocaleDateString("en-US", options);

}

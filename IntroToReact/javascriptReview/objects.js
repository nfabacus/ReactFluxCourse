//You can put function in a variable and use like a class.
var Vehicle = function (make, color, premium) {
  var self = this;
  this.make = make;
  this.odometeor = 0;
  this.engine = "V6";
  this.color = color;

  if(premium === true) {
    this.engine = "V8";
    this.color = "Platinum";
  }

  this.addTrip = function(newMiles) {
    if(newMiles >0 ) {
      self.odometeor += newMiles;
    }
  };
};

var toyota = new Vehicle("Toyota", "Blue", true);
console.log(toyota.make);
console.log(toyota.color);
console.log(toyota.engine);
console.log(toyota.odometeor);
toyota.addTrip(200);
console.log(toyota.odometeor);
toyota.addTrip(100);
console.log(toyota.odometeor);

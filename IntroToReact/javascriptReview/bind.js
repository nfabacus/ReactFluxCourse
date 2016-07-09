// Binding example.
this.car = "Old Honda Civic";

var nobysGarage = {
  car: "Aston Martin",
  getCar: function() {
    return this.car;
  }
};

console.log(nobysGarage.getCar());

var storeCarForLater = nobysGarage.getCar; //If you do not bind getCar with nobyGarage here, it will return "Old Honda Civic."

console.log(storeCarForLater());

var storeRealCar = nobysGarage.getCar.bind(nobysGarage);
console.log(storeRealCar());

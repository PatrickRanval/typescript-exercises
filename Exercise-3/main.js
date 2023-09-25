//added brake to interface
//this causes car to throw error, so invocation of car needs brake
var car = {
    brand: "Toyota",
    speed: 120,
    accelerate: function () {
        console.log("The ".concat(this.brand, " is accelerating"));
    },
    brake: function () {
        console.log("Hit the brakes on the ".concat(this.brand));
    },
};
car.accelerate();
car.brake();

interface Vehicle {
    brand: string;
    speed: number;
    
    accelerate(): void;
    brake(): void;
}

//added brake to interface
//this causes car to throw error, so invocation of car needs brake

const car: Vehicle = {
    brand: "Toyota",
    speed: 120,
    accelerate(): void {
        console.log(`The ${this.brand} is accelerating`);
    },
    brake(): void {
     console.log(`Hit the brakes on the ${this.brand}`);
    },
}

car.accelerate();
car.brake();

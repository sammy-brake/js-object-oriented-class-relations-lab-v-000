
let driverId = 0;
let passengerId = 0;
let tripsId = 0;
class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;
  }
}


class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++passengerId;
  }
}


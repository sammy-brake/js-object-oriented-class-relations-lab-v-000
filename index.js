
let driverId = 0;
let passengerId = 0;
let tripsId = 0;
class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;
  }
}


class Passenter {
  constructor(name) {
    this.name = name
    this.id = ++passengerId;
  }
}

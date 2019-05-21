
let driverId = 0;
let passengerId = 0;
let tripId = 0;
let store = {drivers: [], passengers: [], trips: []}

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this);
  }

};

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerId;
      if(driver){
      this.setDriver(driver);
    }
    store.passengers.push(this);
  }
  setDriver(driver){
    this.driverId = driver.id;
  }
};

class Trip {
  constructor(driverId, passengerId) {
    this.driverId = driverId;
    this.passengerId  = passengerId;
    this.id = ++tripId;
    store.trips.push(this);
  }
};

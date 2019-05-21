
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
      store.passengers.push(this);
      if(driver){
      this.setDriver(driver)
    }
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

export class Parking {
  #parkingSpace = [];
  constructor(lotSize) {
    this.lotSize = lotSize;
    this.#parkingSpace = new Array(lotSize).fill(null);
  }

  parkVehicle(vehicleNumber) {
    const availableIndex = this.#getNextAvailableIndex();
    if (availableIndex === -1) {
      console.log("Sorry No space left");
      return;
    }
    this.#parkingSpace[availableIndex] = vehicleNumber;
    console.log(
      `Vehicle ${vehicleNumber} has now parked at: ${availableIndex}`
    );
  }

  exitVehicle(vehicleNumber) {
    const vehicleIndex = this.#parkingSpace.findIndex(
      (vehicle) => vehicle === vehicleNumber
    );
    if (vehicleIndex !== -1) {
      this.#parkingSpace[vehicleIndex] = null;
      console.log(`Vehicle ${vehicleNumber} has now exited`);
    } else {
      console.log(`Sorry this vehicle is not parked inside the parking`);
    }
  }

  viewParkingSpace() {
    return this.#parkingSpace;
  }

  getAvailableSize() {
    return this.#parkingSpace.filter((space) => space === null).length;
  }

  #getNextAvailableIndex() {
    return this.#parkingSpace.findIndex((slot) => slot === null);
  }
}

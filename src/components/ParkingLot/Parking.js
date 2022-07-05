export class Parking {
  #parkingSpace = [];
  constructor(lotSize) {
    this.lotSize = lotSize;
    this.#parkingSpace = new Array(lotSize).fill(null);
  }

  parkVehicle(vehicleNumber) {
    const availableIndex = this.#getNextAvailableIndex();
    if (availableIndex === -1) {
      return "Sorry No space left";
    }
    this.#parkingSpace[availableIndex] = vehicleNumber;
    return `Vehicle ${vehicleNumber} is now parked at: #${availableIndex}`;
  }

  exitVehicle(vehicleNumber) {
    const vehicleIndex = this.#parkingSpace.findIndex(
      (vehicle) => vehicle === vehicleNumber
    );
    if (vehicleIndex !== -1) {
      this.#parkingSpace[vehicleIndex] = null;
      return `Vehicle ${vehicleNumber} has now exited`;
    } else {
      return `Sorry this vehicle is not parked inside the parking`;
    }
  }

  viewParkingSpace() {
    return this.#parkingSpace;
  }

  getAvailableSize() {
    return this.#parkingSpace.filter((space) => space === null).length;
  }

  getOccupiedSpace() {
    return this.#parkingSpace.filter((space) => space !== null).length;
  }

  #getNextAvailableIndex() {
    return this.#parkingSpace.findIndex((slot) => slot === null);
  }
}

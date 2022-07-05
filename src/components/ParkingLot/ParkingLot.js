import React, { useState } from "react";
import "./ParkingLot.css";
import { Parking } from "./Parking";

const DEFAULT_PARKING_CAPACITY = 10;
let parkingLotObject = new Parking(DEFAULT_PARKING_CAPACITY);
export const ParkingLot = () => {
  const [formInputs, setFormInputs] = useState({
    capacity: DEFAULT_PARKING_CAPACITY,
    parkVehicle: "",
    exitVehicle: "",
    space: parkingLotObject.viewParkingSpace(),
  });

  const changeCapacityHandler = (event) => {
    // const conf = confirm("Are you sure you want to change the capacity?");
    event.preventDefault();
    parkingLotObject = new Parking(+formInputs.capacity);
    setFormInputs((prevState) => ({
      ...prevState,
      capacity: formInputs.capacity,
      parkVehicle: "",
      exitVehicle: "",
      space: parkingLotObject.viewParkingSpace(),
    }));
  };

  const parkVehicleHandler = (event) => {
    event.preventDefault();
    if (formInputs.parkVehicle === "") {
      alert("Please enter valid vehicle number");
      return;
    }
    parkingLotObject.parkVehicle(formInputs.parkVehicle);
    setFormInputs((prevState) => ({
      ...prevState,
      space: parkingLotObject.viewParkingSpace(),
    }));
  };

  const exitVehicleHandler = (event) => {
    event.preventDefault();
    if (formInputs.exitVehicle === "") {
      alert("Please enter valid vehicle number");
      return;
    }
    parkingLotObject.exitVehicle(formInputs.exitVehicle);
    setFormInputs((prevState) => ({
      ...prevState,
      space: parkingLotObject.viewParkingSpace(),
    }));
  };

  const inputOnChangeHandler = (event) => {
    if (formInputs[event.target.name] === event.target.value) {
      return;
    }

    setFormInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="parking-app">
      <form className="parking-info center-vh">
        <h1>Parking Lot Information</h1>
        <div className="parking-form-control">
          <label>Capacity</label>
          <input
            type="number"
            className="small-input"
            min="10"
            value={formInputs.capacity}
            name="capacity"
            onChange={inputOnChangeHandler}
          />
          <button
            className="btn btn-secondary btn-lg"
            onClick={changeCapacityHandler}
          >
            Change
          </button>
        </div>
        <div className="parking-form-control">
          <label>Available Space</label>
          <input type="text" disabled value="0" className="small-input" />
        </div>
        <div className="parking-form-control">
          <label>Occupied Space</label>
          <input type="text" disabled value="0" className="small-input" />
        </div>
        <div className="parking-form-control">
          <label>Park Vehicle</label>
          <input
            type="text"
            className="vehicle-info-input"
            value={formInputs.parkVehicle}
            name="parkVehicle"
            onChange={inputOnChangeHandler}
          />
          <button className="btn btn-info btn-lg" onClick={parkVehicleHandler}>
            Park
          </button>
        </div>
        <div className="parking-form-control">
          <label>Exit Vehicle</label>
          <input
            type="text"
            className="vehicle-info-input"
            value={formInputs.exitVehicle}
            name="exitVehicle"
            onChange={inputOnChangeHandler}
          />
          <button className="btn btn-info btn-lg" onClick={exitVehicleHandler}>
            Exit
          </button>
        </div>
      </form>
      <div className="parking-view">
        <h1>Parking View</h1>
        <div className="parking-spots">
          {formInputs.space.map((spot, index) => (
            <div className="parking-spot" key={index}>
              <span>{`#${index} => `} </span>
              <span>{spot ? spot : "Empty"}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

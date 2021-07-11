import "./App.css";
import React, { Component } from "react";
import Door from "./Components/door";
import NavBar from "./Components/navBar";
import { getDoors, saveDoor, deleteDoor } from "./Services/doorService";

class App extends Component {
  state = {
    doors: [],
  };

  componentDidMount() {
    // const doors = axios("https://localhost:44304/api/Doors");
    // console.log(doors.then((response) => response.data));

    this.setState({ doors: getDoors() });
  }

  handleOpenClose = ({ Id }) => {
    const doors = [...this.state.doors];
    const index = doors.findIndex((x) => x.id === Id);
    doors[index].isOpen = !doors[index].isOpen;
    if (doors[index].isOpen && doors[index].isLocked)
      doors[index].isLocked = false;
    this.setState({ doors: doors });
  };

  handleLock = ({ Id }) => {
    const doors = [...this.state.doors];
    const index = doors.findIndex((x) => x.id === Id);
    doors[index].isLocked = !doors[index].isLocked;
    this.setState({ doors: doors });
  };

  handleNewDoor = () => {
    //Call API to Insert the new door
    //update the state

    const door = {
      name: "",
      isLocked: false,
      isOpen: true,
    };
    saveDoor(door);
    const doors = getDoors();
    this.setState({ doors: doors });
  };

  handleRemoveDoor = (id) => {
    //Call API to remove the new door
    //update the state

    const doors = deleteDoor(id);
    this.setState({ doors: doors });
  };

  handleChange = (name, { Id }) => {
    console.log(name, Id);
    const doors = [...this.state.doors];
    const index = doors.findIndex((x) => x.id === Id);
    doors[index].name = name;
    console.log(doors);
    this.setState({ doors: doors });
  };

  render() {
    return (
      <div className="container">
        <NavBar />
        <button className="btn btn-primary m-2" onClick={this.handleNewDoor}>
          Add New Door
        </button>
        {this.state.doors.map((door) => (
          <Door
            key={door.id}
            Id={door.id}
            Name={door.name}
            IsLocked={door.isLocked}
            IsOpen={door.isOpen}
            HandleOpenClose={this.handleOpenClose}
            OnHandleLock={this.handleLock}
            HandleRemove={this.handleRemoveDoor}
            onChange={this.handleChange}
          />
        ))}
      </div>
    );
  }
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";

const electronRemote = require("electron").remote;
const { dialog } = electronRemote;

const electron = require("electron");

export default class App extends React.Component {
  handleDialogClick = () => {
    const properties = ["openFile", "openDirectory", "multiSelections"];
    dialog.showOpenDialog({ properties });
  };

  handleMessageBoxShow = () => {
    const options = {
      type: "info",
      buttons: ["Yes", "No", "Cancel"],
      message: "Do you really want to quit?"
    };

    dialog.showMessageBox(options, res => {
      console.log("res: ", res);
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="#" onClick={this.handleDialogClick}>
            Dialog
          </a>
          <a className="App-link" href="#" onClick={this.handleMessageBoxShow}>
            MessageBox
          </a>
        </header>
      </div>
    );
  }
}

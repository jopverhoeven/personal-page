import React, { Component } from "react";
import ProfilePicture from "../assets/images/ProfilePicture.jpg";

export default class MainPage extends Component {
  render() {
    return (
      <div className="flex flex-auto justify-center items-center">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-evenly animate-fade-in-down">
          <img
            src={ProfilePicture}
            alt="ProfilePicture"
            className="w-3/4 sm:w-1/4 rounded-full m-4"
          />
          <p className="text-center">
            Welcome to JopVerhoeven.nl <br />
            JopVerhoeven.nl is built using React hosted on Raspberry Pi with
            Docker
          </p>
        </div>
      </div>
    );
  }
}

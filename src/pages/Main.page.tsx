import React, { Component } from "react";
import ProfilePicture from "../assets/images/ProfilePicture.jpg";

export default class MainPage extends Component {
  render() {
    return (
      <div className="h-screen flex bg-green-300">
        <div className="m-auto">
          <div className="flex flex-col items-center">
            <img src={ProfilePicture} alt="ProfilePicture" className="w-1/3 rounded-full"/>
            <div>JopVerhoeven.nl</div>
          </div>
        </div>
      </div>
    );
  }
}

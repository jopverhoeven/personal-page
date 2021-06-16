import React, { Component } from "react";
import ProfilePicture from "../assets/images/ProfilePicture.jpg";
import GitHub from "../assets/images/GitHub.png";
import LinkedIn from "../assets/images/LinkedIn.png";
import Instagram from "../assets/images/Instagram.png";

export default class MainPage extends Component {
  render() {
    return (
      <div className="flex flex-auto justify-center items-center bg-gray-100">
        <div className="w-full flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-evenly animate-fade-in-down">
          <img
            src={ProfilePicture}
            alt="ProfilePicture"
            className="w-2/4  sm:w-1/4 rounded-full m-4"
          />
          <div className="p-4 flex flex-col">
            <h1 className="text-3xl font-light">About me</h1>
            <p>Hello, my name is Jop Verhoeven, 21 years old.</p>
            <p>
              I am studying Software Engineering at the Fontys Hogeschool in
              Eindhoven.
            </p>
            <p>
              My specialties lie in Fullstack development of applications, but
              also CI/CD with Docker and Kubernetes.
            </p>

            <h1 className="text-3xl font-light text-center sm:text-left sm:mt-10">
              My Profiles
            </h1>
            <div className="flex flex-row mt-2">
              <a href="https://github.com/jopverhoeven">
                <img
                  src={GitHub}
                  alt="Link to GitHub Profile"
                  className="w-10 h-10 transform transition duration-200 hover:scale-110 "
                ></img>
              </a>
              <a href="https://www.linkedin.com/in/jop-verhoeven/">
                <img
                  src={LinkedIn}
                  alt="Link to LinkedIn Profile"
                  className="w-10 h-10 ml-4 transform transition duration-200 hover:scale-110 "
                ></img>
              </a>
              <a href="https://www.instagram.com/jopverhoeven/">
                <img
                  src={Instagram}
                  alt="Link to Instagram Profile"
                  className="w-10 h-10 ml-4 transform transition duration-200 hover:scale-110 "
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

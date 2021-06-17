import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="fixed top-0 w-full flex items-center justify-center h-16 bg-white border-b-2">
        <Link to="/" className="transform transition duration-200 hover:scale-110 cursor-pointer">
          <h1 className="text-xl font-light">
            JopVerhoeven.nl
          </h1>
        </Link>
      </div>
    );
  }
}

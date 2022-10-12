import React, { Component } from "react";

class ButtonBox extends Component {
  render() {
    return (
      <div 
        className="ButtonBox">
        {this.props.children} 
      </div>
      );
  }
}
export default ButtonBox;


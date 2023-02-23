import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
  constructor(props) {
    super(props);
    
    if (this.props.age === Number) {
      return <Age />;
    }
  }
  render() {
    return (
      <div className="welcome">
        <Age />
        <p>
          Welcome, <strong>Giuseppe</strong>.
        </p>
        <p>Welcome, {this.props.name}</p>
      </div>
    );
  }
}
 
  
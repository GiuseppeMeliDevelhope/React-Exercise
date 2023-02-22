import React from "react";
import { Age } from "./Age";

export class File extends React.Component {
  constructor(props) {
    super(props);
    
    if (this.props.age === Number && this.props.name==="John" ) {
      return <Age />;
    }
  }
  render() {
    return (
      <div>
        <Age />
        <p>
          Welcome, <strong>Giuseppe</strong>.
        </p>
      </div>
    );
  }
}
 
  
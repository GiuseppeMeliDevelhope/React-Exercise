import React from "react";
import { Age } from "./Age";

function Welcome(props) {
  if (typeof props.age === "number") {
    return <Age />;
  }

  return (
    <div className="welcome">
      <Age />
      <p>
        Welcome, <strong>Giuseppe</strong>.
      </p>
      <p>Welcome, {props.name}</p>
    </div>
  );
}

export default Welcome;

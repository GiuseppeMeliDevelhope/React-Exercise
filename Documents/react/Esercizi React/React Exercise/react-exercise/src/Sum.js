import React from "react";

function Sum({ numbers }) {
  const sum = numbers.reduce((total, num) => total + num, 0);
  
  return <h1>The sum is: {sum}</h1>;
}

export default Sum;

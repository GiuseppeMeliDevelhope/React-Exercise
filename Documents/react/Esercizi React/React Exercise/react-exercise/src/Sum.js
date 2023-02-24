
//If the numbers prop of the Sum component is not set, it will be undefined, and the reduce function will not work, resulting as an error.




export function Sum({ numbers = [] }) {
    const sum = numbers.reduce((total, num) => total + num, 0);
    
    return <h1>The sum is: {sum}</h1>;
  }
  
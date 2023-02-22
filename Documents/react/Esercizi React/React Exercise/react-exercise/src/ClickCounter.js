import React from "react";

export class ClickCounter extends React.Component{
    state= {
        count: this.props.initialValue ?? 0,
    }
    

   handleCounterIncrement = (event) => {

    console.log(event)
    
    this.setState(state => {
         return{
            count: state.count + this.props.incrementBy
         }
    })
   }
    
    render() {
        
        return <div>
            <h1>Counter: {this.state.count} </h1>

           <button onClick={this.handleCounterIncrement}>Increment</button>
        </div>
    }
}



ClickCounter.defaultProps= {
    initialValue:0,
    incrementBy: 1,
}

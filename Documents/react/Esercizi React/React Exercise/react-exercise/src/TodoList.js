import React from "react";

export class TodoList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: []
    }

    this.handleAddItem = this.handleAddItem.bind(this)
  }

  handleAddItem() {
    const newItem = this.inputElement.value;

    if (newItem !== "") {
      this.setState((prevState) => ({
        items: [...prevState.items, newItem]
      }))
      
      //now it clears the input field after the value is added to the item array
      this.inputElement.value = "";
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div>
          <input type="text" ref={(a) => (this.inputElement = a)} />
          <button onClick={this.handleAddItem}>Add</button>
        </div>
      </div>
    )
  }
}



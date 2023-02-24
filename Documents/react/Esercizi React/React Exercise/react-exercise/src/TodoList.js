import React from "react";

export class TodoList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: []
    }

    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
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

  handleRemoveItem(index) {
    this.setState((prevState) => ({
      items: prevState.items.filter((_, i) => i !== index)
    }))
  }

  render() {
    const { render } = this.props;
    const { items } = this.state;

    return (
      <div>
        {render(items, this.handleRemoveItem)}
        <div>
          <input type="text" ref={(a) => (this.inputElement = a)} />
          <button onClick={this.handleAddItem}>Add</button>
          <button onClick={() => this.setState({items:[]})}>Reset</button>
        </div>
      </div>
    )
  }
}

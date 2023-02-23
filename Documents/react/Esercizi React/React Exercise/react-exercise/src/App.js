import React from "react";
import Container from "./Container";
import { TodoList } from "./TodoList";

export class App extends React.Component{
    render(){
        return(
            <div>
                <Container title="The Title">
                 <h1>Hello World!</h1>
                 <p>This is my custom container component.</p>
                </Container>
                <TodoList
                   render={(items, handleRemoveItem) => (
                  <ul>
                    {items.map((item, index) => (
                      <li key={index}>
                        {item}
                        <button onClick={() => handleRemoveItem(index)}>Remove</button>
                      </li>
                      ))}
                    </ul>
                  )}
                />
              </div>
        )
    }
}


    

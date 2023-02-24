import React from "react";
import Container from "./Container";
import DisplayLanguage from "./DisplayLanguage";
import { LanguageContext } from './LanguageProvider';
import { TodoList } from "./TodoList";



export class App extends React.Component{
    
  state = {
    language: 'en'
  };

  setLanguage = (language) => {
    this.setState({ language });
  }
  
  
  render(){
    
    const { language } = this.state;

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
         <LanguageContext.Provider value={{ language, setLanguage: this.setLanguage }}>
        <div>
          <DisplayLanguage />
        </div>
      </LanguageContext.Provider>
              </div>
        )
    }
}


    

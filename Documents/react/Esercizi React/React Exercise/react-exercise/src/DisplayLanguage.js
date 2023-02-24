// DisplayLanguage.js
import React, { Component } from "react";
import { LanguageContext } from './LanguageProvider';

class DisplayLanguage extends Component {

    render() {
        return (
          <LanguageContext.Consumer>
            {({ language, setLanguage }) => (
              <div>
                <label htmlFor="language-select">Select language:</label>
                <select id="language-select" onChange={(event) => setLanguage(event.target.value)}>
                  <option value="en">English</option>
                  <option value="it">Italian</option>
                </select>
                <h1>{language === 'en' ? 'Selected Language: English' : 'Selected Language: Italiano'}</h1>
                <p>{language === 'en' ? 'Welcome to my React-App!' : 'Benvenuto alla mia React-App!'}</p>
              </div>
            )}
          </LanguageContext.Consumer>
        );
      }
    }
    
    export default DisplayLanguage;
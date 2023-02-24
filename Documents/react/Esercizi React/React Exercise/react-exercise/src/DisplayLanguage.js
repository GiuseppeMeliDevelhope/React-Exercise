import React, { Component } from 'react';

const LanguageContext = React.createContext();


class DisplayLanguage extends Component {
  state = {
    language: 'en'
  };

  handleLanguageChange = (event) => {
    this.setState({ language: event.target.value });
  }

  render() {
    const { language } = this.state;

    return (
      <div>
        <label htmlFor="language-select">Select language:</label>
        <select id="language-select" onChange={this.handleLanguageChange}>
          <option value="en">English</option>
          <option value="es">Italiano</option>
        </select>
        <h1>{language === 'en' ? 'Hello!' : 'Ciao!'}</h1>
        <p>{language === 'en' ? 'Welcome to my React-App!' : 'Benvenuto alla mia React-App!'}</p>
      </div>
    );
  }
}

export default DisplayLanguage;

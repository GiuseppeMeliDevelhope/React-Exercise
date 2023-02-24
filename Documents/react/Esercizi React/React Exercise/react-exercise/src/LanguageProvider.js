import React, { Component } from "react";

export const LanguageContext = React.createContext({
  language: "en",
  setLanguage: () => {},
});

class LanguageProvider extends Component {
  state = {
    language: "en",
  };

  setLanguage = (language) => {
    this.setState({ language });
  };

  render() {
    const { language } = this.state;
    return (
      <LanguageContext.Provider
        value={{
          language,
          setLanguage: this.setLanguage,
        }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

export default LanguageProvider;

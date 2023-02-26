
import React from "react";
import DisplayLanguage from "./DisplayLanguage";
import LanguageProvider from "./LanguageProvider";


export default class App extends React.Component{
    
  state = {
    language: 'en'
  };

  setLanguage = (language) => {
    this.setState({ language });
  }
  
  
  render(){
    
    const { language } = this.state;

    return(
        <LanguageProvider>
        <DisplayLanguage />
      </LanguageProvider>
    )
  }
}
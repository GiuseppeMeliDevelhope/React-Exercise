
import React, { useContext } from "react"
import { LanguageContext } from './LanguageProvider'

function DisplayLanguage() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div>
      <label htmlFor="language-select">Select language:</label>
      <select id="language-select" onChange={(event) => setLanguage(event.target.value)}>
        <option value="en">English</option>
        <option value="it">Italian</option>
      </select>
      <h1>{language === 'en' ? 'Selected Language: English' : 'Selected Language: Italiano'}</h1>
      <p>{language === 'en' ? 'Welcome to Exercise useContext!' : 'Benvenuto all esercizio useContext !'}</p>
    </div>
  )
}

export default DisplayLanguage;

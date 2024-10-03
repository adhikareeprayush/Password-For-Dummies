import copyIcon from "./assets/copy-svgrepo-com.svg";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [length, setLength] = useState(12);
  const [isUppercase, setIsUppercase] = useState(true);
  const [isLowercase, setIsLowercase] = useState(true);
  const [isNumbers, setIsNumbers] = useState(false);
  const [isSymbols, setIsSymbols] = useState(false);
  const [password, setPassword] = useState('');

  // Function to create a password based on the selected character set
  const createPassword = useCallback((allChars) => {
    let password = '';
    const allCharsLength = allChars.length;

    for (let i = 0; i < length; i++) {
      const random = Math.floor(Math.random() * allCharsLength);
      password += allChars[random];
    }

    return password;
  }, [length]);

  // Generate password when settings change
  const generatePassword = useCallback(() => {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+=';

    let allChars = '';

    if (isUppercase) allChars += uppercaseLetters;
    if (isLowercase) allChars += lowercaseLetters;
    if (isNumbers) allChars += numbers;
    if (isSymbols) allChars += symbols;

    setPassword(createPassword(allChars));

  }, [isLowercase, isNumbers, isSymbols, isUppercase, createPassword]);

  // Regenerate the password whenever the character set or length changes
  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  // Copy the generated password to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password).then(() => {
      alert("Password copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
  };

  // Make sure at least one checkbox remains checked
  const toggleCheckbox = (setter, value) => {
    if (value === false) { // Prevent unchecking if it's the last one checked
      if (
        isUppercase + isLowercase + isNumbers + isSymbols > 1 // Allow unchecking if more than one is checked
      ) {
        setter(value);
      } else {
        alert("At least one checkbox must be checked.");
      }
    } else {
      setter(value); // Proceed if checking a box
    }
  };

  return (
    <div className="App">
      <h2 className="header">P@ssword For Dummies</h2>
      <div className="container">
        <div className="password-container">
          <div className="password">{password}</div>
          <button className="btn" onClick={copyToClipboard}>
            <img src={copyIcon} alt="copy" />
          </button>
        </div>
        <div className="password-requirements">
          <div className="input-field">
            <label htmlFor="length">Length {length}:</label>
            <input
              type="range"
              name="length"
              id="length"
              min="8"
              max="32"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              autoComplete="off"
            />
          </div>
          <div className="input-field">
            <label htmlFor="uppercase">Uppercase</label>
            <input
              type="checkbox"
              name="uppercase"
              id="uppercase"
              checked={isUppercase}
              onChange={() => toggleCheckbox(setIsUppercase, !isUppercase)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="lowercase">Lowercase</label>
            <input
              type="checkbox"
              name="lowercase"
              id="lowercase"
              checked={isLowercase}
              onChange={() => toggleCheckbox(setIsLowercase, !isLowercase)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="numbers">Numbers</label>
            <input
              type="checkbox"
              name="numbers"
              id="numbers"
              checked={isNumbers}
              onChange={() => toggleCheckbox(setIsNumbers, !isNumbers)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="symbols">Symbols</label>
            <input
              type="checkbox"
              name="symbols"
              id="symbols"
              checked={isSymbols}
              onChange={() => toggleCheckbox(setIsSymbols, !isSymbols)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

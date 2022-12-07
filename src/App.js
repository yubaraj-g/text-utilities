// import { type } from '@testing-library/user-event/dist/type';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');

  const [alertText, setAlertText] = useState(null);

  const showAlertFunction = (message, type) => {
    setAlertText({
      msg: message,
      typ: type
    })

    setTimeout(() => {
      setAlertText(null)
    }, 1700);
  }

  const darkBackground = () => {
    document.body.style.backgroundColor = '#000540';
    document.body.style.color = 'white';
  }
  const lightBackground = () => {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }

  const toggleMode = () => {
    if (mode==='light')
    {
      setMode("dark");
      darkBackground();
      showAlertFunction('DarkMode has been enabled', 'warning');
    }
    else
    {
      setMode('light');
      lightBackground();
      showAlertFunction('DarkMode has been disabled', 'primary');
    }
  }

  const toggleGreen = () => {
    if (mode==='light' || 'dark') {
      setMode("green");
      document.body.style.backgroundColor = 'green';
      document.body.style.color = 'black';
      showAlertFunction('GreenMode has been enabled', 'success');
    } else if (mode==='green') {
      setMode('light');
      lightBackground();
      showAlertFunction('GreenMode has been disabled', 'primary');
    }
  }

  return (
    <>
      <Navbar title="LOGO" aboutText="About-Site" mode={mode} toggleMode={toggleMode} toggleGreen={toggleGreen} />
      {/* <Navbar /> */}

      <Alert alert={alertText} />

      <Textform showAlert={showAlertFunction} heading="Random text anything.." mode={mode} />

      <About mode={mode} />
    </>
  );
}

export default App;

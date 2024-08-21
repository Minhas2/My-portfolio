
import './App.css';
import MyResume from './Component/My-Resume';
import Header from './Component/Header';
import Skills from './Component/Skills';
import Projects from './Component/projects';
import Connect from './Component/connect';
import Footer from './Component/footer';
import { useState } from 'react';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };



  return (
    <>
      <div style={{backgroundColor: isDarkMode ? '#121212' : '#ffffff',
      color: isDarkMode ? '#ffffff' : '#000000'}}>
     <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
     <MyResume isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/> 
     <Skills isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/> 
     <Projects isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/> 
     <Connect isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/> 
     <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/> 
     </div>
    </>
  );
}

export default App;

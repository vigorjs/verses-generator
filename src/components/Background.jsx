import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const Background = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
  
  const theme = {
    isDarkMode,
    toggleTheme,
    colors: isDarkMode 
      ? { background: '#101010', text: '#fff', primary: '#4CAF50' }
      : { background: '#f7f7f7', text: '#333', primary: '#2196F3' }
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="relative h-screen">

      {isDarkMode ?
        <div className={`absolute top-0 bottom-0 left-0 right-0  overflow-hidden `}>
          <div id="backgroundBintang" className="fixed top-0 right-0 left-0 bottom-[-1150px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#3f3f3f59] from-0% to-[#3f3f3f00] to-100%"></div>
          <div className="relative w-screnn h-screen overflow-hidden">
            <div id="bintangJatuh" className=" top-[-5vh] right-0 animate-[animasiBintang_10s_ease_infinite] animate-delay-[8s]"></div>
            <div id="bintangJatuh" className=" top-[-5vh] right-[50%] animate-[animasiBintang_10s_ease_infinite]"></div>
            <div id="bintangJatuh" className=" top-[-5vh] right-[80%] animate-[animasiBintang_10s_ease_infinite] animate-delay-[2.5s]"></div>
            <div id="bintangJatuh" className=" top-[-5vh] right-[20%] animate-[animasiBintang_10s_ease_infinite] animate-delay-[5.5s]"></div>
            <div id="bintangJatuh" className=" top-[30%] right-0 animate-[animasiBintang_10s_ease_infinite] animate-delay-[4.5s]"></div>
            <div id="bintangJatuh" className=" top-[50%] right-0 animate-[animasiBintang_10s_ease_infinite] animate-delay-[2s]"></div>
            <div id="bintangJatuh" className=" top-[68%] right-0 animate-[animasiBintang_10s_ease_infinite] animate-delay-[3.8s]"></div>
          </div>
        </div>
       : <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden">
          <div className="fixed top-0 right-0 left-0 bottom-0 bg-gradient-custom animate-gradient"></div>
            <div className="circle circle1 animate-moveInCircle1"></div>
            <div className="circle circle2 animate-moveInCircle2"></div>
            <div className="circle circle3 animate-moveInCircle3"></div>
            <div className="circle circle4 animate-moveInCircle4"></div>
         </div>     
     }

        {children}

      </div>
    </ThemeContext.Provider>
  )
}
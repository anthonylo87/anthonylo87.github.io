import { useState, useRef, createContext } from 'react';

export const appContext = createContext({});

export function AppProvider({ children }) {
  const [color, setColor] = useState(`text-raffia-800`);
  const [selSection, setSelSection] = useState(0);

  const aboutRef = useRef(null);
  const expRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const appColor = {
    0: {
      background: 'bg-raffia-400',
      textColor: 'text-raffia-900',
      borderColor: 'border-raffia-900',
      bgFill: 'bg-raffia-900',
    },
    1: {
      background: 'bg-raffia-900',
      textColor: 'text-raffia-200',
      borderColor: 'border-raffia-200',
      bgFill: 'bg-raffia-200',
    },
    2: {
      background: 'bg-nepal-200',
      textColor: 'text-nepal-900',
      borderColor: 'border-nepal-900',
      bgFill: 'bg-nepal-900',
    },
    3: {},
  };

  const scrollIntoView = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const changeColor = () => {
    let height = window.innerHeight;
    if (window.scrollY >= 2 * height) {
      setColor(appColor[2].textColor);
      setSelSection(2);
    } else if (window.scrollY >= height) {
      setColor(appColor[1].textColor);
      setSelSection(1);
    } else {
      setColor(appColor[0].textColor);
      setSelSection(0);
    }
  };

  const handleScroll = (e) => {
    const innerHeight = window.innerHeight;
    const scrollTop = e.currentTarget.scrollTop;

    if (scrollTop >= 2 * innerHeight) {
      setColor(appColor[2].textColor);
      setSelSection(2);
    } else if (scrollTop >= innerHeight) {
      setColor(appColor[1].textColor);
      setSelSection(1);
    } else {
      setColor(appColor[0].textColor);
      setSelSection(0);
    }
  };

  return (
    <appContext.Provider
      value={{
        color,
        setColor,
        selSection,
        setSelSection,
        appColor,
        aboutRef,
        expRef,
        projectRef,
        contactRef,
        scrollIntoView,
        changeColor,
        handleScroll,
      }}
    >
      {children}
    </appContext.Provider>
  );
}

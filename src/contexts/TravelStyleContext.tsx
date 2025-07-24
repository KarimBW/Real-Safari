
import React, { createContext, useContext, useState, useEffect } from 'react';

export type TravelStyle = 'guided' | 'solo';

interface TravelStyleContextType {
  travelStyle: TravelStyle;
  setTravelStyle: (style: TravelStyle) => void;
}

const TravelStyleContext = createContext<TravelStyleContextType | undefined>(undefined);

export const useTravelStyle = () => {
  const context = useContext(TravelStyleContext);
  if (context === undefined) {
    throw new Error('useTravelStyle must be used within a TravelStyleProvider');
  }
  return context;
};

export const TravelStyleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [travelStyle, setTravelStyleState] = useState<TravelStyle>('guided');

  // Load from localStorage on mount
  useEffect(() => {
    const savedStyle = localStorage.getItem('travelStyle') as TravelStyle;
    if (savedStyle && (savedStyle === 'guided' || savedStyle === 'solo')) {
      setTravelStyleState(savedStyle);
    }
  }, []);

  const setTravelStyle = (style: TravelStyle) => {
    setTravelStyleState(style);
    localStorage.setItem('travelStyle', style);
  };

  return (
    <TravelStyleContext.Provider value={{ travelStyle, setTravelStyle }}>
      {children}
    </TravelStyleContext.Provider>
  );
};

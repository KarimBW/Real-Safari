
import React, { createContext, useContext, useState, useEffect } from 'react';

export type TravelStyle = 'guided' | 'solo';

interface BookingSelection {
  destination?: string;
  campId?: string;
  campName?: string;
  travelStyle?: TravelStyle;
  selectedSeason?: 'brown' | 'green';
  groupSize?: number;
  totalCost?: number;
}

interface TravelStyleContextType {
  travelStyle: TravelStyle;
  setTravelStyle: (style: TravelStyle) => void;
  bookingSelection: BookingSelection;
  setBookingSelection: (selection: Partial<BookingSelection>) => void;
  clearBookingSelection: () => void;
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
  const [bookingSelection, setBookingSelectionState] = useState<BookingSelection>({});

  // Load from localStorage on mount
  useEffect(() => {
    const savedStyle = localStorage.getItem('travelStyle') as TravelStyle;
    if (savedStyle && (savedStyle === 'guided' || savedStyle === 'solo')) {
      setTravelStyleState(savedStyle);
    }

    const savedBooking = localStorage.getItem('bookingSelection');
    if (savedBooking) {
      try {
        setBookingSelectionState(JSON.parse(savedBooking));
      } catch (error) {
        console.error('Error parsing booking selection from localStorage:', error);
      }
    }
  }, []);

  const setTravelStyle = (style: TravelStyle) => {
    setTravelStyleState(style);
    localStorage.setItem('travelStyle', style);
    
    // Also update booking selection
    const updatedSelection = { ...bookingSelection, travelStyle: style };
    setBookingSelectionState(updatedSelection);
    localStorage.setItem('bookingSelection', JSON.stringify(updatedSelection));
  };

  const setBookingSelection = (selection: Partial<BookingSelection>) => {
    const updatedSelection = { ...bookingSelection, ...selection };
    setBookingSelectionState(updatedSelection);
    localStorage.setItem('bookingSelection', JSON.stringify(updatedSelection));
  };

  const clearBookingSelection = () => {
    setBookingSelectionState({});
    localStorage.removeItem('bookingSelection');
  };

  return (
    <TravelStyleContext.Provider value={{ 
      travelStyle, 
      setTravelStyle, 
      bookingSelection, 
      setBookingSelection, 
      clearBookingSelection 
    }}>
      {children}
    </TravelStyleContext.Provider>
  );
};

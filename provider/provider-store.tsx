import React, { createContext, useContext, ReactNode, useState } from 'react';
import { IPlanet } from '../interfaces/inteface-planets';

interface StoreContextType {
  wishlist: IPlanet[];
  addWishlist: (data: IPlanet) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

interface StoreProviderProps {
  children: ReactNode;
}

const StoreProvider = ({ children }: StoreProviderProps) => {
  const [wishlist, setWishlist] = useState<IPlanet[]>([]);

  const addWishlist = (data: IPlanet) => {
    setWishlist([...wishlist, data]);
  };

  return (
    <StoreContext.Provider value={{ wishlist, addWishlist }}>{children}</StoreContext.Provider>
  );
};

const useWishlist = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('store must be used within a StoreProvider');
  }
  return context;
};

export { StoreProvider, useWishlist };

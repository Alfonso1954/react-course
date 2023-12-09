import { createContext } from "react";

const ShoppingCardContext = createContext();

export const ShoppingCardProvider = ({ children }) => {
  return (
    <ShoppingCardContext.Provider value={{}}>
      {children}
    </ShoppingCardContext.Provider>
  );
};

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
// import type { User } from "../types/user";
//types
export type User = {
  id: string;
  name: string;
  email: string;
} | null;

type AppContextType = {
  user: User;
  setUser: (user: User) => void;
  isAuthenticated: boolean;
  activeSection: string;
  setActiveSection: (section: string) => void;
  name: String | null;
  setName: (name: String) => void;
};

//  Context
const AppContext = createContext<AppContextType | null>(null);

//Provider
export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [activeSection, setActiveSection] = useState("home");
  const [name, setName] = useState<String>("");
  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated: Boolean(user),
        activeSection,
        setActiveSection,
        name,
        setName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// Hook
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
}

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

// User type
export type User = {
  id: string;
  name: string;
  email: string;
} | null;

// Context type
type AppContextType = {
  user: User;
  setUser: (user: User) => void;
  isAuthenticated: boolean;
  activeSection: string;
  setActiveSection: (section: string) => void;
  name: string;
  setName: (name: string) => void;
};

// Create context
const AppContext = createContext<AppContextType | null>(null);

// Provider
export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [activeSection, setActiveSection] = useState("home");
  const [name, setName] = useState<string>(""); // safe string state

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

// Hook to consume context
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
}

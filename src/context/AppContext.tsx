import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
// import { toast } from "sonner";

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
  // Authentication details
  email: string;
  fullName: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setFullName: (fullName: string) => void;
  login: () => void | any;
};

// Create context
const AppContext = createContext<AppContextType | null>(null);

// Provider
export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [activeSection, setActiveSection] = useState("home");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  //logging in button onclick;
  const login = (): void => {
    console.log({ email, password });
  };
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
        email,
        setEmail,
        fullName,
        setFullName,
        password,
        setPassword,
        login,
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

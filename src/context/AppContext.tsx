import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { toast } from "sonner";
import type { Blog } from "../assets/Dummies";

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
  email: string;
  fullName: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setFullName: (fullName: string) => void;
  login: () => void;
  menuText: string;
  setMenuText: (name: string) => void;
  activeMenu: (label: string) => void;
  AddToReadList: (blog: Blog) => void;
  bookmarkingFunc: (blog: Blog) => void;
  readList: Blog[];
  bookmarks: Blog[];
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
  const [menuText, setMenuText] = useState("");
  const [readList, setReadList] = useState<Blog[]>([]);
  const [bookmarks, setBookmarks] = useState<Blog[]>([]);

  // Logging in button onclick
  const login = (): void => {
    console.log({ email, password });
  };

  // Sidebar menu that is active when in use
  const activeMenu = (label: string): void => {
    setMenuText(label);
    console.log(menuText);
  };

  // Add to readlist
  const AddToReadList = (blog: Blog): void => {
    setReadList((prev) => {
      // prevent duplicates
      const alreadyAdded = prev.some((b) => b.id === blog.id);
      if (alreadyAdded) {
        toast.error("Already in readlist");
        return prev;
      }
      toast.success(`${blog.title} added to readlist`);
      console.log([...prev, blog].length);
      return [...prev, blog];
    });
  };

  // Bookmarking function
  const bookmarkingFunc = (blog: Blog): void => {
    setBookmarks((prev) => {
      const alreadyBookmarked = prev.some((b) => b.id === blog.id);
      if (alreadyBookmarked) {
        toast.error("Already bookmarked");
        return prev;
      }
      console.log(bookmarks.length + 1);
      toast.success(`${blog.title} added to bookmarks`);
      return [...prev, blog];
    });
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated: Boolean(true),
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
        menuText,
        setMenuText,
        activeMenu,
        AddToReadList,
        bookmarkingFunc,
        readList,
        bookmarks,
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

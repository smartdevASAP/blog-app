//declare the type user to extend in the application
type user = {
  name: String;
  isAuthenticated: boolean | undefined;
  status: "active" | "idle" | "suspended";
};

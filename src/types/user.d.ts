//declare the type user to extend in the application
export type userMetaData = {
  name: String;
  isAuthenticated: boolean | undefined;
  status: "active" | "idle" | "suspended";
  hasSupportedDeveloper: boolean | null;
};

export type authentiacting_user = {
  authenticatedWithGoogle: boolean;
  authenticationStatus: "LoggedIn" | "registered";
};

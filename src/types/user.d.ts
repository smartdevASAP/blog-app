//declare the type user to extend in the application
export type User = {
  id: string;
  name: string;
  email: string;
} | null;

export type authentiacting_user = {
  authenticatedWithGoogle: boolean;
  authenticationStatus: "LoggedIn" | "registered";
};

import React from "react";
import { useStorageState } from "../app/useStorageState";
import axios from "axios";

const AuthContext = React.createContext<{
  signIn: (email: String, password: String) => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session");
  return (
    <AuthContext.Provider
      value={{
        signIn: (email, password) => {
          const data = {
            user: {
              email: email,
              password: password
            }
          };
          axios.post('https://rs-blackmarket-api.herokuapp.com/api/v1/users/sign_in', data)
          .then(function (response) {
            setSession(response.headers['authorization']);
          })
          .catch(function (error) {
            console.log(error);
          });
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

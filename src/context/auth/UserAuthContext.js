import { createContext, useContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { getUserInfo } from "../../services/auth";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { userLogOut, userRegistration, userSignIn } from "../../services/auth";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", null);

  function logIn(email, password) {
    userSignIn(email, password);
  }
  function signUp(email, password) {
    userRegistration(email, password);
  }
  function logOut() {
    setUser(null);
    userLogOut();
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      if (currentuser) {
        getUserInfo(currentuser).then((data) => {
          setUser(data);
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const isAdmin = user?.["role"] === "ADMIN";

  const value = {
    user,
    isAdmin,
    logIn,
    signUp,
    logOut,
  };

  return (
    <userAuthContext.Provider value={value}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}

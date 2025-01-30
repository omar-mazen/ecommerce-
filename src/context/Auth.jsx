import { createContext, useContext, useState } from "react";
import { isValidToken } from "../util/helper";
const authContext = createContext();
export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.token && isValidToken(user.token)) {
      return {
        isAuth: true,
        role: user.role,
        id: user.id,
      };
    }
    return {};
  });
  // const [auth, setAuth] = useState({
  //   isAuth: false,
  //   role: null,
  //   id: null,
  // });
  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   if (user && user.token && isValidToken(user.token)) {
  //     setAuth({
  //       isAuth: true,
  //       role: user.role,
  //       id: user.id,
  //     });
  //   }
  // }, []);
  return (
    <authContext.Provider value={{ auth, setAuth }}>
      {children}
    </authContext.Provider>
  );
}
export function useAuth() {
  const { auth, setAuth } = useContext(authContext);
  return { auth, setAuth };
}

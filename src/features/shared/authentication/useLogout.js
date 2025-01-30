import { useAuth } from "../../../context/Auth";
import { deleteCookie } from "../../../util/helper";

export default function useLogout() {
  const { setAuth } = useAuth();
  function logout() {
    deleteCookie("refresh_token");
    localStorage.removeItem("user");
    setAuth({});
  }
  return logout;
}

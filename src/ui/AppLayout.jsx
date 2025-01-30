import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Main from "./Main";

export default function AppLayout() {
  return (
    <>
      <NavBar />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

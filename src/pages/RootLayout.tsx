import MainNavigation from "../components/MainNavigation.tsx";
import { Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

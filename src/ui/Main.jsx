import useMobileScreen from "../Hooks/useMobileScreen";

export default function Main({ children }) {
  const isMobile = useMobileScreen();
  return (
    <main className={`w-full ${isMobile ? "pb-24" : "pb-8"}`}>{children}</main>
  );
}

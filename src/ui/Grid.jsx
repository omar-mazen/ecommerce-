export default function Grid({ children }) {
  return (
    <main className={`grid grid-rows-[1fr,4rem]overflow-hidden`}>
      {children}
    </main>
  );
}

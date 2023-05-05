import TipsForm from "./components/organisms/TipsForm";
import Logo from "./assets/logo.svg";
import clsx from "clsx";

function App() {
  return (
    <main
      className={clsx(
        "h-screen max-w-4xl mt-[15vh] mx-auto",
        "grid grid-rows-[min-content_min-content] place-items-center gap-12 xl:gap-20"
      )}
    >
      <Logo />
      <TipsForm />
    </main>
  );
}

export default App;

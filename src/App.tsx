import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { ModeToggle } from "./components/mode-toggle";
import { Button } from "./components/ui/button";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="bg-background text-foreground flex flex-col items-center justify-center h-screen gap-8">
      <div className="flex items-center justify-center gap-4">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="size-18" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="size-18 animate-[spin_3s_linear_infinite]"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-4xl font-bold">Vite + React</h1>
      <div className="flex items-center justify-center gap-4">
        <Button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </Button>
      </div>
      <div className="flex items-center justify-center gap-4 p-4 rounded-xl bg-muted border">
        <ModeToggle />
        <span>You can use this to change the theme</span>
      </div>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </main>
  );
}

export default App;

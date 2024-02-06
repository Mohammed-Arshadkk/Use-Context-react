import React from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";
import ComponentC from './components/ComponentC'
import { LoadingProvider } from "./contexts/Loading";
import { WaitingProvider } from "./contexts/Waiting";

function App() {

  return (
    <>
      <div>
        <LoadingProvider>
          <ComponentA />
        </LoadingProvider>

        <WaitingProvider>
          <ComponentC />
        </WaitingProvider>
      </div>
    </>
  );
}

export default App;

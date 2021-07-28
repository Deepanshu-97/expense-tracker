import React from "react";
import { GlobalProvider } from "./context/GlobalState";
import { Header } from "./components/Header";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
    </GlobalProvider>
  );
};

export default App;

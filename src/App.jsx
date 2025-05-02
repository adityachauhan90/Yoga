import React, { useState } from "react";
import YogaPage from "./Yoga/YogaPage"; // ✅ Correct path based on your folder structure
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <YogaPage />
    </>
  );
}

export default App;

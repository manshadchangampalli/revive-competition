import React, { lazy, Suspense } from "react";
import "./App.css";
const Page = lazy(() => import("./Page"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading</h1>}>
        <Page />
      </Suspense>
    </div>
  );
}

export default App;

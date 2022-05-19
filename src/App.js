import React, { lazy, Suspense } from "react";
import "./App.css";
import Loading from "./components/loading/Loading";
const Page = lazy(() => import("./Page"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading/>}>
        <Page />
      </Suspense>
    </div>
  );
}

export default App;

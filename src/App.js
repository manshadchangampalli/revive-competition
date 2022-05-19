import React, { lazy, Suspense } from "react";
import "./App.css";
import Loading from "./components/loading/Loading";
const Page = lazy(() => import("./Page"));

function App() {
  return (
    // if the page load slowly the loading page will load 
    <div className="App">
      <Suspense fallback={<Loading/>}>
        <Page />
      </Suspense>
    </div>
  );
}

export default App;

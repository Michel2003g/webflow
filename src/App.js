import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";

import Home from "./pages/Home";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='' element={<Layout />}>
          <Route index element={<Home />}/>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

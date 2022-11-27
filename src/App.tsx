import { createRef, useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import { RouterIndex } from "./routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <RouterIndex />
      </Router>
    </>
  );
}

export default App;

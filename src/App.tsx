import { createRef, useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import { Form } from "./form";
import { FormHandles } from '@unform/core';

// import { Header } from "./Header";
import { Input } from "./Input";
import { RouterIndex } from "./routes";



function App() {
  const [editModalOpen, setEditModalOpen] = useState(false);

  const formRef = createRef<FormHandles>();

  
  // const handleSubmit =  (data)  => (
  //   console.log("data", data)
  // );
  

  return (
    <>
      {/* <Form ref={formRef} onSubmit={handleSubmit}>
      <Input name="image" placeholder="Cole o link aqui" />
      </Form> */}
          <GlobalStyle />
          <Router>
            <RouterIndex />
          </Router>
    </>
  );
}

export default App;

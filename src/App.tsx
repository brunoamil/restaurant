import { createRef, useState } from "react";
import { Form } from "./form";
import { FormHandles } from '@unform/core';

// import { Header } from "./Header";
import { Input } from "./Input";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const formRef = createRef<FormHandles>();

  // const toggleModal = () => {
  //   setOpenModal(!openModal);
  // }

  // const handleSubmit =  (data)  => (
  //   console.log("data", data)
  // );
  return (
    <>
      {/* <Header onOpenModal={toggleModal} /> */}
      {/* <Form ref={formRef} onSubmit={handleSubmit}>
      <Input name="image" placeholder="Cole o link aqui" />
      </Form> */}
    </>
  );
}

export default App;

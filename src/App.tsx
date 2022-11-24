import { useState } from "react";
import { Header } from "./Header";

function App() {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    console.log("teste");
    setOpenModal(!openModal);
  }
  return (
    <>
      <Header onOpenModal={toggleModal} />
    </>
  );
}

export default App;

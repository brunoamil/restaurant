import { createRef, useEffect, useState } from "react";
import { Form } from "./form";
import { FormHandles } from '@unform/core';

// import { Header } from "./Header";
import { Input } from "./Input";
import { Food } from "./Food";
import api from "./services/api";

interface foodProps {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const formRef = createRef<FormHandles>();

  const [foods, setFoods] = useState<foodProps[]>([]);
  // const toggleModal = () => {
  //   setOpenModal(!openModal);
  // }

  // const handleSubmit =  (data)  => (
  //   console.log("data", data)
  // );
  const buscandoDados = async () => {
    try {
      await api.get<foodProps[]>("/foods")
        .then(res => {
          setFoods(res.data);
          console.log("res", res.data)
        });
    } catch (error) {
      console.log("error", error)
    }
  }

  const handleDeleteFood = async ( id: number) => {
    try {
      await api.delete(`/foods/${id}`)
      const foodsFiltered = foods.filter(food => food.id !== id);
      setFoods(foodsFiltered);
    } catch (error) {
      console.log("Error ao editar", error);
    }
  }
  
  useEffect(() => {
    buscandoDados();
  }, []);

  return (
    <>
      {/* <Header onOpenModal={toggleModal} /> */}
      {/* <Form ref={formRef} onSubmit={handleSubmit}>
      <Input name="image" placeholder="Cole o link aqui" />
      </Form> */}
      {foods && foods.map((food: foodProps) => {
        return (
          <Food key={food.id} food={food} handleDelete={handleDeleteFood} />
        )
      })}
    </>
  );
}

export default App;

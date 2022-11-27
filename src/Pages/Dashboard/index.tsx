import { useEffect, useState } from "react";
import { Food } from "../../Food";

import { Header } from "../../Header";
import api from "../../services/api";
import { FoodsContainer } from "./styles";

interface foodProps {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

export const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [foods, setFoods] = useState<foodProps[]>([]);
  const [editingFood, setEditingFood] = useState<foodProps>({} as foodProps);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const buscandoDados = async () => {
    try {
      await api.get<foodProps[]>("/foods").then((res) => {
        setFoods(res.data);
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleDeleteFood = async (id: number) => {
    console.log("id delete", id);
    try {
      await api.delete(`/foods/${id}`);
      const foodsFiltered = foods.filter((food) => food.id !== id);
      setFoods(foodsFiltered);
    } catch (error) {
      console.log("Error ao editar", error);
    }
  };

  const handleEditFood = (food: foodProps) => {
    setEditingFood(food);
    setEditModalOpen(true);
  }

  useEffect(() => {
    buscandoDados();
  }, []);

  return (
    <>
      <Header onOpenModal={toggleModal} />
      <FoodsContainer>
      {foods &&
        foods.map((food: foodProps) => {
          return (
            <Food key={food.id} food={food} handleDelete={handleDeleteFood} handleEditFood={handleEditFood}/>
          );
        })}
        </FoodsContainer>
    </>
  );
};

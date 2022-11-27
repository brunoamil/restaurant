import { createRef } from "react";
import { FormHandles } from "@unform/core";
import { FiCheckSquare } from "react-icons/fi";

import { Input } from "../Input";
import { Modal } from "../Modal";
import { Form } from "./styles";

interface foodProps {
    id: number;
    name: string;
    description: string;
    price: string;
    available: boolean;
    image: string;
  }

interface modalOpenFoodProps {
  isOpen: boolean;
  setIsOpenModal: () => void;
  addFood: (food: foodProps) => Promise<void>;
}
export const ModalAddFood = ({
  isOpen,
  setIsOpenModal,
  addFood
}: modalOpenFoodProps) => {
  const formRef = createRef<FormHandles>();

  const handleSubmit = (data: any) => {
    addFood(data)
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpenModal}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />
        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />
        <Input name="description" placeholder="Descrição" />
        <button type="submit">
          <p className="text"> Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

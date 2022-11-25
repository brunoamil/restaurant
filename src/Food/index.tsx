import { useState } from "react";
import { FiEdit3, FiTrash } from "react-icons/fi"
import api from "../services/api";
import { Container } from "./styles";

interface foodDetalhes {
    id: number;
    name: string;
    description: string;
    price: string;
    available: boolean;
    image: string;
}

interface foodProps {
    food: foodDetalhes;
    //handleEditFood?: (food: foodDetalhes) => void;
    handleDelete: (idFood: number) => void;
}
export const Food = ({ food, handleDelete}:foodProps) => {
    const [available, setAvailable] = useState(false);

    const toggleAvailable = async () => {
        await api.put(`/foods/${food.id}`, {
            ...food, available: !available,
        });
        setAvailable(!available);
    }
    const setEditingFood = () => {
        //handleEditFood(food);
    }
    return (
        <Container>
            <header>
                <img src={food.image} alt={food.name} />
            </header>
            <section className="body">
                <h2>{food.name}</h2>
                <p>{food.description}</p>
                <p className="price">R$<b>{food.price}</b></p>
            </section>
            <section className="footer">
                <div className="icon-container">
                    <button type="button" className="icon" onClick={setEditingFood} data-testid={`edit-food-${food.id}}`}><FiEdit3 size={20}/></button>
                    <button type="button" className="icon"  data-testid={`remove-food-${food.id}`} onClick={() => handleDelete(food.id)}><FiTrash size={20}/></button>
                </div>
                <div className="availability-container">
                    <p>Availability</p>
                    <label htmlFor={`available-switch-${food.id}`} className="switch">
                        <input id={`available-switch-`} type="checkbox" onChange={toggleAvailable} data-testid={`change-status-food-${food.id}`} />
                        <span className="slider" />
                    </label>
                </div>
            </section>
        </Container>
    );
}
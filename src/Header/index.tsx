import { Container } from "./styles"
import { FiPlusSquare } from "react-icons/fi";

interface headerProps {
    onOpenModal: () => void;
}

export const Header = ({ onOpenModal }: headerProps) => {
    return (
        <Container>
            <header>
                <nav>
                    <div>
                        <button type="button" onClick={onOpenModal}>
                            <div className="text">Novo prato</div>
                            <div className="icon"><FiPlusSquare size={24}/></div>
                        </button>
                    </div>
                </nav>
            </header>
        </Container>
    )
}
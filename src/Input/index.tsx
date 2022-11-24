import { InputHTMLAttributes, useCallback, useEffect, useRef, useState } from "react"
import { useField } from "@unform/core";
import { IconBaseProps } from "react-icons";

import { Container } from "./styles"
import { FiPlusSquare } from "react-icons/fi";

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
};

export const Input = ({ name, icon, ...rest}:inputProps) => {
    const inputRef = useRef(null);

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    
    const {fieldName, defaultValue, registerField } = useField(name);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(true);
        setIsFilled(!!inputRef.current);
    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: "value",
        })
    }, [fieldName,registerField ]);

    return (
        <Container isFilled={isFilled} isFocused={isFocused}>
            {icon && <FiPlusSquare size={24} />}
           <input 
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            defaultValue={defaultValue}
            ref={inputRef}
           {...rest}
           />
        </Container>
    )
}
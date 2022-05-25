import React from "react";
import { InputBoxWrapper, Input } from "./inputBox.style"

const InputBox = ({
    onChange = () => { },
    onKeyDown = () => { },
    placeholder = "search by Name",
    marginBottom, 
    id,value
}) => {


    return <InputBoxWrapper  marginBottom={marginBottom}>
        <Input size="100" 
        onChange={onChange} type="text" 
        placeholder={placeholder} 
        onKeyDown={onKeyDown} 
        value={value} 
        id={id}
        />
    </InputBoxWrapper>
}

export default InputBox
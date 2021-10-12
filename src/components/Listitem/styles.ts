import styled from "styled-components";

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(( {done}: ContainerProps) => (
    `
    display: flex;
    background-color: #233C66;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;
    font-size: 20px;
   
    input {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }
   
    label {
        color: #CCC;
        text-decoration: ${ done ? 'line-through' : 'initial'}; 
    }
    `
));

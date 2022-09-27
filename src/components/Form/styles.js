import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    padding: 20px;
    border: 2px solid #000;
    margin-bottom: 20px;
    text-align: center;

    h1 {
        margin-bottom: 10px;
    }

    input {
        padding: 3px;
        margin: 2px;
    }

    input::placeholder {
        text-align: center;
    }

    button {
        margin-top: 12px;
    }
`;
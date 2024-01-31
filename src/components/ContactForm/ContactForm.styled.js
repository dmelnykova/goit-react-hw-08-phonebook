import styled from 'styled-components';
import {
  Field as ContactInfo,
  Form as FormWrapper,
  ErrorMessage as Error,
} from 'formik';

export const Form = styled(FormWrapper)`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const Field = styled(ContactInfo)`
    font-size: 25px;
    padding: 8px;
    border: 2px solid #403050;
    border-radius: 8px;
`;

export const ErrorMessage = styled(Error)`
    color: red;
    font-size: 20px;
`;

export const Button = styled.button`
    background-color: #403050;
    color: white;
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 6px;
    font-size: 22px;
    border: none;

    &:hover {
        background-color: black;
    }
`;
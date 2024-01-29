import {
  Field as ContactInfo,
  Form as FormWrapper,
  ErrorMessage as Error,
} from 'formik';
import styled from 'styled-components';

export const Text = styled.h3`
  text-align: center;
  margin-top: 60px;
  font-size: 28px;
`;

export const Form = styled(FormWrapper)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 456px;
  padding: 20px;
  font-size: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 12px;
`;

export const Field = styled(ContactInfo)`
  max-width: 100%;
  font-size: 24px;
  background-color: white;
  padding: 8px;
  border: 1px solid #e2e6e9;
  border-radius: 8px;
`;

export const ErrorMessage = styled(Error)`
  color: red;
  font-size: 18px;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #2F4F4F;
  color: white;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: black;
  }
`;
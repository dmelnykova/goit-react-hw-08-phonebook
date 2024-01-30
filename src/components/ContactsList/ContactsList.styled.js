import styled from 'styled-components';

export const Span = styled.p`
  font-size: 24px;
`;

export const Item = styled.li`
    display: flex;
    gap: 18px;
    margin-bottom: 18px;
    font-size: 20px;
    font-weight: 700;
    align-items: center;
`;

export const Btn = styled.button`
    font-size: 18px;
    border-radius: 4px;
    border: 1px solid #8fbcbc;
    background-color: #8fbcbc; 
    transition: background-color 0.3s ease, color 0.5s ease;
    &:hover,
    &:focus {
    color: white;
    background-color: red;
    }
`;
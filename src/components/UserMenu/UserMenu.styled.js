import styled from "styled-components";

export const UserInfo = styled.div`
  display: flex;
  gap: 20px;
  font-weight: 700;
  align-items: center;
`;

export const Button = styled.button`
  background-color: #F8F8FF;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export const UserName = styled.p`
  font-size: 22px;
  color: white;
`;


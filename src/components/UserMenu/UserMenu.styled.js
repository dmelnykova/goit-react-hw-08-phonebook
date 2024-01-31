import styled from "styled-components";

export const UserInfo = styled.div`
  display: flex;
  gap: 20px;
  font-weight: 700;
  align-items: center;
`;

export const Button = styled.button`
  background-color: #B08849;
  color: #263f3f;
  font-weight: 700;
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


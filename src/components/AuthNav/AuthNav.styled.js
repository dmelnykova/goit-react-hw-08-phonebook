import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
gap: 8px;
`;

export const Button = styled(NavLink)`
  padding: 2px 4px;
  background-color: blue;
  color: white;
  border: 2px solid black;
  border-radius: 4px;
  text-decoration: none;

  &:hover {
    background-color: orange;
  }
`;

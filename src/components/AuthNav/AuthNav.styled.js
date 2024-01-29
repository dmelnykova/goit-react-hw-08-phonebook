import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
gap: 22px;
`;

export const Button = styled(NavLink)`
  font-size: 22px;
  color: white;
  text-decoration: none;

  &:hover {
    color: #CCD6DD;
  }
`;

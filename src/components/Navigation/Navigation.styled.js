import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MainNav = styled.nav`
  display: flex;
  gap: 20px;
`;


export const Link = styled(NavLink)`
  font-size: 22px;
  color: white;
  text-decoration: none;

  &:hover {
    color: #CCD6DD;
  }
`;
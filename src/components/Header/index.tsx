import React from 'react';

import { NavLink as Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <Link exact activeClassName="selected" to="/">
          Listagem
        </Link>
        <Link exact activeClassName="selected" to="/import">
          Importar
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;

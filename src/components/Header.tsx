import React from 'react';
import { Logo } from '../assets/logo';
import Avatar from './Avatar';
import styled from "styled-components";

interface HeaderProps {
  name:string
}

const Typography = styled.span`
 color:#FFF;
`;

const Container = styled.div`
 display: flex;
 justify-content: space-between;
 width: 100%;
`;

const ContainerLogotipo = styled.div`
 display: flex;
 gap: 10px;
 align-items: center;
 height: 50px;
`;

export const Header = ({ name }:HeaderProps) => {
  return (
    <Container>
      <ContainerLogotipo>
        <Logo />
        <Typography>Capital Planner</Typography>
      </ContainerLogotipo>
      <Avatar name={name} />
    </Container>
  );
};
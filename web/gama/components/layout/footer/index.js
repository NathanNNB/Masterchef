import React from 'react'
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: fixed;
  bottom:0;
  height: 75px;
  text-align: center;

`;
const GithubIcon = styled(FaGithub)`
  width:28px;
  height: 28px;
  color: ${({theme}) => theme.colors.contrastWhite }
`;

Container.p = styled.div`
  color: ${({ theme }) => theme.colors.contrastWhite};
  display: flex;
  justify-content: center;
  font-size: 20px;
  margin-top: auto;
  margin-bottom: auto;
  @media (max-width:700px){
    font-size: 15px
  }
  @media (max-width:400px){
    font-size: 12.5px
  }

`;
Container.div = styled.div`
  margin-top: 50px;
`;

Container.section = styled.div`
  margin-top: auto;
  margin-bottom: auto;
`;

export default function Footer() {
  return (
    <Container.div>
      
    <Container>
        <Container.p>
          Desenvolvido por Nathan Novais e Matheus Portilho
        </Container.p>
        <Container.section>
        <Link href="/">
          <a>
            <GithubIcon/>
          </a>
        </Link>
        </Container.section>
    </Container>
    </Container.div>
  )
}

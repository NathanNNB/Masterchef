import React from 'react'
import styled from 'styled-components';
import Image from 'next/image'
import Link from 'next/link'
import NavButton from '../../ui/button/NavButton';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary}; 
  width: 100%;
  height: 94px;
  z-index: 1;
  display: flex;
  justify-content: space-evenly;
  
  @media (max-width: 620px){
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 150px;
    position: fixed;
    
  }
`;

Container.div = styled.div`
  margin-bottom: 50px;
`;

Container.section = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  justify-content: center;

`;
Container.nav = styled.nav`
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  justify-content: space-evenly;
  width: 30%;
  @media (max-width: 620px){
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

`;


export default function DefaultHeader(
  // props
) {
  return (
    <Container.div> 
      
    <Container>

      <Container.section>
        <Link href="/about">
          <a>
            <Image
              src="/img/Logo.png" width={110} height={31.5}
              />
          </a>
        </Link>
      </Container.section>
      
      {/* <Container.section>
        {props.children}
      </Container.section> */}
      <Container.nav>

        <Container.section>
          <NavButton text='Entrar' link='/about'/>
        </Container.section>
        <Container.section>
          <NavButton text='Registrar-se' link='/about'/>
        </Container.section>

      </Container.nav>
    </Container>
    </Container.div>
  )
}

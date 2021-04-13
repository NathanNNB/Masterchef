import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';

const ASC = styled.a`
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  display: flex;
`
const ButtonHome = styled.button`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.contrastWhite};
  color: ${({ theme }) => theme.colors.secondary};
  border-radius: 25px;
  border: 1px solid ${({ theme }) => theme.colors.secondary} ;
  width: 250px;
  ;
  padding: 20px ;
  font-weight: bold;
  font-size: 20px;
  line-height: 1;
  text-transform: uppercase;
  transition: .3s;
  text-align: center;

  cursor: pointer;
  &:hover{
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.contrastWhite};
  }
`;



export default function HomeButton({text, link}) {
  return (
    <div>
        <Link href={link}>
        <ButtonHome>
          <ASC >{text}</ASC>
        </ButtonHome>
        </Link>
    </div>
    )
  }
import styled from 'styled-components';


const Content = styled.div`
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-flow: column wrap;
  :nth-child(n){
    
    padding-bottom:40px;
  }
  @media (max-width:620px){
    margin-top: 150px;
  }
`
Content.h2 = styled.h2`
  display: flex;
  justify-content: center;
  
`
Content.section = styled.section`
  padding-top: 35px;
  padding-bottom: 15px;

  display: flex;
  justify-content: center;
`

export default Content;
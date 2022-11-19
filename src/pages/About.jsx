import React from 'react'
import styled from 'styled-components'
import Coppyright from '../components/Coppyright';
import Navbar from '../components/Navbar';
import {mobile} from "../responsive"

const Container = styled.div`
  width: 100%;
  height: 100vh;  
  display: flex;
  overflow: hidden;
  ${mobile({display:"none"})}

`;

const Wrapper = styled.div`
  height: 100%; 
  display: flex; 
`;

const Slide = styled.div`
display: flex;
align-items: center;
width: 100vw;
height: 100vh;
background-color: #d6d5d5 ;
`;
const ImgContainer = styled.div`
flex:1;
height: 100%;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;  
`;

const InfoContainer = styled.div`
flex:1;
padding: 50px;
`;

const Title = styled.h1`
font-size: 70px;
`;
const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing:3px;

`;
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color:transparent;
cursor: pointer;
`;

function About() {
  return (
    <>
    <Navbar/>
    <Container>
   
    <Wrapper>
        <Slide>
        <ImgContainer><Img src="https://images.pexels.com/photos/4219038/pexels-photo-4219038.jpeg?auto=compress&cs=tinysrgb&w=600"/></ImgContainer>
        <InfoContainer>
            <Title>Title</Title>
            <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis rerum minima error autem modi, mollitia doloremque magnam aut illo obcaecati harum reprehenderit officia sunt soluta voluptates delectus ut! Vitae, porro!</Desc>
            <Button>Show now</Button>
        </InfoContainer>
        </Slide>
    </Wrapper>
   </Container>
   {/* <Footer/> */}
   <Coppyright/>
   </>
  )
}

export default About

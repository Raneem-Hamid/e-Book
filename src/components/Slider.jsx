// import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"


const Container = styled.div`
  width: 100%;
  height: 100vh;  
  display: flex;
  /* position: relative; */
  overflow: hidden;
  ${mobile({display:"none"})}

`;

// const Arrow =styled.div`
//   width: 50px; 
//   height: 50px;
//   background-color :#fff7f7 ;
//   border-radius:50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: absolute;
//   top: 0;
//   bottom:0;
//   left: ${props=> props.direction==="left" && "10px"};
//   right: ${props=> props.direction==="right" && "10px"};
//   margin: auto;
//   cursor: pointer;
//   opacity:0.5 ;
//   z-index:2;
// `;

const Wrapper = styled.div`
  height: 100%; 
  display: flex; 
  /* transform: translateX(0vw); */
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
/* color: white; */
`;
const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing:3px;
/* color: white; */

`;
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color:transparent;
cursor: pointer;
/* color: white; */
/* border: 2px  solid white; */
`;


function Slider() {
    // const [slideIndex, setSlideIndex]= useState(0);
    // const handleClick = (direction) => {
    // if (direction==="left")
    // };


  return (
   <Container>
    {/* <Arrow direction="left" onClick={()=>handleClick("left")}>
 <ArrowLeft> </ArrowLeft>
    </Arrow> */}
    <Wrapper>
        <Slide>
        <ImgContainer><Img src="https://images.pexels.com/photos/4219038/pexels-photo-4219038.jpeg?auto=compress&cs=tinysrgb&w=600"/></ImgContainer>
        <InfoContainer>
            <Title>Title</Title>
            <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis rerum minima error autem modi, mollitia doloremque magnam aut illo obcaecati harum reprehenderit officia sunt soluta voluptates delectus ut! Vitae, porro!</Desc>
            <Button>Show now</Button>
        </InfoContainer>
        </Slide>

        {/* <Slide bg="fcf1ed">
        <ImgContainer><Img src="https://placeholder.com/10"/></ImgContainer>
        <InfoContainer>
            <Title>Title2</Title>
            <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis rerum minima error autem modi, mollitia doloremque magnam aut illo obcaecati harum reprehenderit officia sunt soluta voluptates delectus ut! Vitae, porro!</Desc>
            <Button>Show now</Button>
        </InfoContainer>
        </Slide> */}

        {/* <Slide bg="fbf0f4">
        <ImgContainer><Img src="https://placeholder.com/10"/></ImgContainer>
        <InfoContainer>
            <Title>Title3</Title>
            <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis rerum minima error autem modi, mollitia doloremque magnam aut illo obcaecati harum reprehenderit officia sunt soluta voluptates delectus ut! Vitae, porro!</Desc>
            <Button>Show now</Button>
        </InfoContainer>
        </Slide> */}
    </Wrapper>
    {/* <Arrow direction="right"  onClick={()=>handleClick("right")}>
   <ArrowRight></ArrowRight>
    </Arrow> */}
   </Container>
  )
}

export default Slider

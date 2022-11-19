import React from 'react'
import styled from 'styled-components'
import Coppyright from '../components/Coppyright';
import Navbar from '../components/Navbar';
import {mobile} from "../responsive"
import { EmailOutlined, PhoneInTalkOutlined, Place } from '@mui/icons-material';


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
font-size: 40px;
`;
const Form=styled.form`
display: flex;
 flex-direction:column;
`;
const Input=styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 5px;
`;

const Text=styled.textarea`
flex: 1;
margin: 20px 10px 0px 0px
`;


const Button=styled.button`
width: 40%;
border: none;
padding: 15px 20px ;
background-color: #8f5408;
color: white;
cursor: pointer;
margin-top:20px;

`;

const ContactContainer = styled.div`
display: flex;
margin: 20px;
`;

const ContactItem = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin:10px;

${mobile({ justifyContent: "start" })}

`;

function Contact() {
  return (
    <>
    <Navbar/>
    <Container>
   
    <Wrapper>
        <Slide>
        <ImgContainer><Img src="https://images.pexels.com/photos/4219038/pexels-photo-4219038.jpeg?auto=compress&cs=tinysrgb&w=600"/></ImgContainer>
        <InfoContainer>
            <Title>GIT IN TOUCH</Title>
            <Form>
                <Input placeholder="Your Name"/>
                <Input placeholder="Phone Number"/>
                <Input placeholder="Email"/>
                <Text placeholder="Your Message"/>
                <Button>SEND</Button>
            </Form>
            <ContactContainer>
                    <ContactItem><Place style={{ marginRight: "10px" }} />Amman-Jordan</ContactItem>
                    <ContactItem><PhoneInTalkOutlined style={{ marginRight: "10px" }} />00962778083610</ContactItem>
                    <ContactItem><EmailOutlined style={{ marginRight: "10px" }} />Book@gmail.com</ContactItem>
                </ContactContainer>
        </InfoContainer>
        </Slide>
    </Wrapper>
   </Container>
   {/* <Footer/> */}
   <Coppyright/>
   </>
  )
}

export default Contact

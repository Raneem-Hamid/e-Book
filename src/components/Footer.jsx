import { EmailOutlined, PhoneInTalkOutlined, Place } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';
import { mobile } from "../responsive"
import { Link } from 'react-router-dom';



const Container = styled.div`
display: flex;
background-color:#d6d5d5;
${mobile({ flexDirection: "column" })}

`;
const Left = styled.div`
flex: 1;
display: flex;
display: flex;
flex-direction: column;
padding: 20px;
`;
const Title = styled.h1``;
const Des = styled.p`
margin: 20px 0px;
`;
// const SocialContainer = styled.div`
// display: flex;
// `;
// const SocialIcon = styled.div`
// width: 40px;
// height: 40px;
// border-radius: 50%;
// /* color:white; */
// background-color: gray;
// display: flex;
// justify-content: center;
// align-items: center;
// margin-right: 10px;
// `;

const Center = styled.div`
flex: 1;
padding: 20px;
/* ${mobile({ display: "none" })} */

`;

const Text = styled.h3`
margin-bottom:30px;
`;
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-direction: column;
/* flex-wrap:wrap ; */
`;
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`;

const Right = styled.div`
flex: 1;
padding: 20px;
`;

const ContactContainer = styled.div`
display: flex;
align-items:flex-start ;
flex-direction:column;
`;

const ContactItem = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 20px;

${mobile({ justifyContent: "start" })}

`;



function Footer() {
    return (
        <Container>
            <Left>
                <Title>About us</Title>
                <Des>A website that helps you find the books you want, know the author, read the description of the book, and know its rating, and you can add it to your favorites list..!
                </Des>
                {/* <SocialContainer>
                    <SocialIcon>
                        <PhoneInTalkOutlined />
                    </SocialIcon>
                    <SocialIcon>
                        <EmailOutlined />
                    </SocialIcon>
                </SocialContainer> */}

            </Left>
            <Center>
                <Text>Useful Links</Text>
                <List>
                {/* <Link to="/" style={{ textDecoration: 'none', color: 'black' }}><ListItem>HOME</ListItem></Link> */}
                <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}><ListItem>ABOUT</ListItem></Link>
                <Link to="/cont" style={{ textDecoration: 'none', color: 'black' }}><ListItem>CONTACT</ListItem></Link>
                <Link to={"/fav"} style={{ textDecoration: 'none', color: 'black'}} ><ListItem>Favorait</ListItem></Link>
                </List>
            </Center>
            <Right>
                <Text>Contact</Text>
                <ContactContainer>
                    <ContactItem><Place style={{ marginRight: "10px" }} />Amman-Jordan</ContactItem>
                    <ContactItem><PhoneInTalkOutlined style={{ marginRight: "10px" }} />00962778083610</ContactItem>
                    <ContactItem><EmailOutlined style={{ marginRight: "10px" }} />Book@gmail.com</ContactItem>
                </ContactContainer>
            </Right>
        </Container>
    )
}

export default Footer

import React, { useContext } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from "../responsive"
import { AppContext } from '../Context';
import { useParams } from 'react-router';
import Coppyright from '../components/Coppyright';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';



const Container = styled.div``;
const Wrapper = styled.div`
padding: 50px;
display: flex;
background-color: #dadada ;
${mobile({ padding: "10px", flexDirection: "column" })}

`;
const ImgContainer = styled.div`
flex: 1;
`;
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit:contain;
${mobile({ height: "40vh" })}

`;
const InfoContainer = styled.div`
flex: 1;
padding:0px 50px ;
${mobile({ padding: "10px" })}

`;
const Title = styled.h1`
font-weight: 200;
`;
const Des = styled.p`
margin: 20px 0px;
`;
const Ath=styled.h3`
margin-bottom: 10px;
`;
const Qut=styled.h5``;

function Singlebook() {
  const { post } = useContext(AppContext)
  const theId = useParams();
  const BookId = theId.id
  // console.log(theId.id);
  const book = post.find(b => {
    return b.id == BookId
  })
  console.log(book);

  return (

    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={book.image_url} />
        </ImgContainer>
        <InfoContainer>
          <Title>{book.title}</Title>
          <Des>{book.description}</Des>
          <Ath>{book.authors}</Ath>
          <Qut>{book.Quote1}</Qut>

          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}> </Box>
          <Rating name="half-rating-read" defaultValue={book.rating} precision={0.5} readOnly />
        </InfoContainer>
      </Wrapper>
      <Footer />
      <Coppyright />
    </Container>
  )
}

export default Singlebook

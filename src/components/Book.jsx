import { AutoStoriesOutlined, FavoriteBorderOutlined } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"


const Info=styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top:0;
left: 0;
background-color:rgba(0,0,0,0.2);
z-index:3;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`;

const Container = styled.div`
flex:1;
margin: 5px;
min-width:280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color:#e6e6e6d0;
position: relative;

&:hover ${Info}{
opacity: 1;
}
`;
// const Circle=styled.div`
// width: 200px;
// height: 200px;
// border-radius:50%;
// background-color: white;
// position: absolute;
// `;
const Image=styled.img`
height: 75%;
z-index:2;
`;

const Icon=styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
display: flex;
background-color: white;
align-items: center;
justify-content: center;
margin: 10px;

&:hover{
    background-color: #5e5e5e;
    transform: scale(1.1);
}
`;


function Book({data}) {
    // console.log(data.volumeInfo.imageLinks?.smallThumbnail);
  return (
   <Container>
    {/* <Circle/> */}
    <Image src={data.image_url}/>
    <Info>
        {/* <Link to={"/fav/"+data.id} style={{color:"teal"}}><Icon>
            <FavoriteBorderOutlined/>
        </Icon></Link> */}
    <Link to={"/singleb/"+data.id} style={{color:"teal"}}><Icon>
            <AutoStoriesOutlined/>
        </Icon></Link>
    </Info>


   </Container>
  )
}

export default Book

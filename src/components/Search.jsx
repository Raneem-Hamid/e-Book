import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import {mobile} from "../responsive"



const Container=styled.div`
/* width: 100%; */
height: 60px;
padding: 0;

`;
const Left=styled.div`
flex:1;
display: flex;
align-items:center;
`;
const Wrapper = styled.div `
    padding: 10px 20px 0px;
    display: flex;
    justify-content:space-between;
    align-items:center;
    margin: 0px;
    `;

const SearchContainer = styled.div`
    border: 0.5px solid lightgrey ;
    display: flex;
    align-items: center;
    margin-left: 100px;
    padding: 5px;
    background-color: white;

`;
const Form=styled.form``;
const Button=styled.button``;


const Input = styled.input`
   border:none; 
   ${mobile({width:"50px"})}
   margin: 0;

`;


const Right=styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
margin: 0px 150px 0px 0px;
`;
const Rating=styled.input`
margin: .4rem;
`;
const Label=styled.label`
font: 1rem 'Fira Sans', sans-serif;
`;

// console.log(data);

function Search({setResult,setResult2}) {
    const [search,setSearch]=useState("");
    const [rating,setRating]=useState("");

   
    useEffect(() => {
        
        setResult2(rating);
      }, [rating]);

     const handleSearch=(e)=>{
        e.preventDefault();
        setResult(search);
    }
  return (
     <Container>
    <Wrapper>
    <Left>
    <SearchContainer>
        <Form onSubmit={handleSearch}>
           <Input placeholder="Search" value={search} name='input' onChange={(e)=>setSearch(e.target.value)} /> <Button type='submit' >
            <SearchIcon style={{color:"gray",fontSize:16}}/></Button>
            </Form>
        </SearchContainer>

    </Left>
    <Right>
    <Rating type="range" id="volume" name="volume"
         min="0" max="5" value={rating}
         onChange={(e) => {
           setRating(e.target.value);}}/>
           <Label for="cowbell">Filter by Rating</Label>

    </Right>
    </Wrapper>
   </Container>
  )
}

export default Search

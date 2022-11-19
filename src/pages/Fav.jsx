import React from 'react'
import styled from 'styled-components'
import Books from '../components/Books'
import Coppyright from '../components/Coppyright'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container=styled.div``;
const Wrapper=styled.div``;
const Tittle=styled.h1``;


function Fav() {
  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <Tittle> your Favorite Books</Tittle>
            <Books/>
        </Wrapper>
        <Footer/>
        <Coppyright/>
    </Container>
  )
}

export default Fav

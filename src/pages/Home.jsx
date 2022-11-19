import React from 'react'
import styled from 'styled-components';
import Coppyright from '../components/Coppyright';
import Books from '../components/Books';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';

const Container=styled.div`
background-color: #d6d5d5;
`;

function Home() {
  return (
    <Container>
        <Navbar/>
        <Slider/>
        <Books/>
        <Footer/>
        <Coppyright/>
    </Container>
  )
}

export default Home

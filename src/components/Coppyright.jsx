import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: #d6d5d5;
    color:black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;


function Coppyright() {
  return (
   <Container>
    E-Book &copy;2022
   </Container>
  )
}

export default Coppyright


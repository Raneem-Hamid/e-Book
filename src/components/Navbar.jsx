import React from 'react';
import styled from 'styled-components';
// import SearchIcon from '@mui/icons-material/Search';
// import Badge from '@mui/material/Badge';
import { FavoriteBorderOutlined, Logout } from '@mui/icons-material';
import { mobile } from "../responsive"
import { Link } from 'react-router-dom';
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import { useCookies } from "react-cookie";
import Logoutg from "../pages/Logout"



const Container = styled.div`
height: 60px;
background-color: white;
${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
    padding: 10px 20px ;
    display: flex;
    justify-content:space-between;
    align-items:center;
    ${mobile({ padding: "10px 0px" })}

`;
const Left = styled.div`
flex:1;
display: flex;
align-items:center;
`;
// const Language= styled.span`
//    font-size:14px;
//    cursor: pointer; 
//    ${mobile({display:"none"})}

// `;

// const SearchContainer = styled.div`
//     border: 0.5px solid lightgrey ;
//     display: flex;
//     align-items: center;
//     margin-left: 25px;
//     padding: 5px;
// `;

// const Input = styled.input`
//    border:none; 
//    ${mobile({width:"50px"})}

// `;

// const Center = styled.div`
// flex:1;
// text-align: center;
// `;
const Logo = styled.img`
  /* font-weight:bold;  
  ${mobile({ fontSize: "24px" })} */
  width:50px;
  height:50px;

`;

const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center" })}

`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  &:hover{
   color:teal;
}
`;
const Button = styled.button``;
const Nav = styled.div``;

function Navbar() {

  const [cookies, setCookie, removeCookie] = useCookies(["currentUser"]);

  const handelLogout = () => {
    removeCookie("currentUser");
  };

  return (
    <Container>
      <Wrapper>
        <Left>
         
          <Logo src="https://api.logo.com/api/v2/images?format=webp&logo=logo_5822cdcf-2211-452c-ac42-319cbd866b86&width=1000&height=750&margins=166&fit=contain&u=1668876416"></Logo>
        </Left> 
        
        
               <Right>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}><MenuItem>HOME</MenuItem></Link>
          <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}><MenuItem>ABOUT</MenuItem></Link>
          <Link to="/cont" style={{ textDecoration: 'none', color: 'black' }}><MenuItem>CONTACT</MenuItem></Link>
          <Nav>
            {cookies.currentUser == null && (
              <MenuItem> <Link to={"/log"} style={{ textDecoration: 'none', color: 'black' }}>Login</Link></MenuItem>
            )}
          </Nav>
          <Nav>
            <Link to={"/log"} style={{ textDecoration: 'none', color: 'black' }}>
            {cookies.currentUser != null &&
                  (cookies.currentUser.googleId != "" ? (
                    <MenuItem><Logoutg/> </MenuItem>
                  ) : (
                    <MenuItem> <Logout variant="success" onClick={handelLogout} /></MenuItem>
                  ))}
             
            </Link>
          </Nav>
          {/* <Link to="/reg" style={{ textDecoration: 'none', color: 'black' }}><MenuItem>REGISTER</MenuItem></Link> */}

          {/* <Badge badgeContent={4} color="primary"> */}
          {/* <Link to={"/fav"} style={{ textDecoration: 'none', color: 'black'}} >
              <MenuItem><FavoriteBorderOutlined /></MenuItem></Link> */}

      {/* </Badge> */}
          
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar

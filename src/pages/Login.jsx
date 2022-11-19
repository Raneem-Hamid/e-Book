import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Navbar from '../components/Navbar';

const MySwal = withReactContent(Swal);


const Container=styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(#ffe8b97e,#ffe8b97e), url("https://img.freepik.com/premium-photo/open-book-with-glasses-wooden-table-against-background-set-books-vintage-toning-web-banner-literature-learning-concept_101969-2143.jpg?w=2000") center;
display: flex;
align-items: center;
justify-content: center;
`;
const Wrapper=styled.div`
width: 25%;
padding: 20px;
background-color: #c9b096;
${mobile({width:"75%"})}

`;
const Title=styled.h1`
font-size: 24px;
font-weight: 300;
`;
const Form=styled.form`
display: flex;
 flex-direction: column;
`;
const Input=styled.input`
flex: 1;
min-width: 40%;
margin:10px 0px;
padding: 5px;
`;
const Button=styled.button`
width: 40%;
border: none;
padding: 10px 5px ;
background-color:teal;
color: white;
cursor: pointer;
/* margin-bottom: 10px; */
margin-top: 10px;
`;

// const Link=styled.a`
// margin: 5px 0px;
// font-size: 12px;
// text-decoration: underline;
// cursor: pointer;
// `;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  &:hover{
   color:teal;
}
`;

function Login() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["currentUser"]);
  const [allUsers, setAllusers] = useCookies(["allUsers"]);

  const handelSubmit = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    const currentUser = { email: email, password: password };
    console.log(currentUser);
    if (checkUser()) {
      setCookie("currentUser", currentUser, { path: "/" });
      navigate("/");
    } else {
      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid Email or password",
        denyButtonColor: "#8E05C2",
      });
    }

    function checkUser() {
      
      let user = allUsers.AllUsers.filter(
        
        (user) =>
         user.email == currentUser.email&& user.password == currentUser.password
      );
      if (user.length > 0) return true;
    }
  };

  return (
    <><Navbar/>
       <Container>
        <Wrapper>
            <Title>SIGN IN </Title>
            <Form>
                <Input type="text" placeholder="Email"id="email"/>
                <Input type='password'placeholder="Password" id="password"/>
                <Button type="button"onClick={handelSubmit}>Sign in</Button>
                <Link to="/reg" style={{ textDecoration: 'none', color: 'black' }}><MenuItem>CREAT AN ACCOUNT</MenuItem></Link>
                {/* <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                <Link>CREAT AN ACCOUNT</Link> */}
            </Form>
        </Wrapper>
    </Container>
    
    </>
  )
}

export default Login

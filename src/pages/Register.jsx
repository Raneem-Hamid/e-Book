import React,{useState} from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Navbar from '../components/Navbar';



const Container=styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(#ffe8b97e,#ffe8b97e), url("https://img.freepik.com/premium-photo/open-book-with-glasses-wooden-table-against-background-set-books-vintage-toning-web-banner-literature-learning-concept_101969-2143.jpg?w=2000") center;
display: flex;
align-items: center;
justify-content: center;
`;
const Wrapper=styled.div`
width: 40%;
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
 flex-wrap: wrap;
`;
const Input=styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 5px;
`;
const Agreement=styled.span`
font-size: 12px;
margin: 20px 0px;
`;
const Button=styled.button`
width: 40%;
border: none;
padding: 15px 20px ;
background-color:teal;
color: white;
cursor: pointer;
margin-top:20px;
`;
const MySwal = withReactContent(Swal);
const patterns = {
  email: /(\w{4,}).?-?_?(\w{2,})?@([a-z\d]+).com/,
  password: /^[\w]{8,20}$/,
};



function Register() {
  const [cookies, setCookie] = useCookies(["currentUser"]);
  const [allUsers, setAllusers] = useCookies(["allUsers"]);
  const [isRedirect, setRedirect] = useState("false");
  const [allUsersArray, setAllusersArray] = useState([]);
  const navigate = useNavigate();
  const handelSubmit = () => {
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let ConfirmPassword = document.getElementById("ConfirmPassword").value;

    if (
      patterns.email.test(email) &&
      patterns.password.test(password) &&
      password == ConfirmPassword
    ) {
      console.log("tets");
      if (checkEmail(email)) {
        let newUser = { name: name, email: email, password: password };
        setAllusersArray([...allUsersArray, newUser]);
        console.log(allUsersArray);
        setCookie("currentUser", newUser, { path: "/" });
        setAllusers("AllUsers", [...allUsersArray, newUser], { path: "/" });
      } else {
        MySwal.fire({
          icon: "error",
          title: "Oops...",
          text: "This Email is already used",
          denyButtonColor: "#8E05C2",
        });
      }
    } else {
      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid Password or Email pattern ",
        denyButtonColor: "#8E05C2",
      });
    }
  };

  const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  &:hover{
   color:teal;
}
`;

  //   if (isRedirect) {
  //     navigate("/");
  //   }

  function checkEmail(E) {
    let rightUser = allUsersArray?.filter((user) => {
      if (user.email == E) return true;
    });
    if (rightUser[0] == null) {
      return true;
    }

    return false;
  }
  return (
    <>
     <Navbar/>
    <Container>
        <Wrapper>
            <Title>CREAT AN ACCOUNT </Title>
            <Form>
                <Input placeholder=" Name" id={"name"}/>
                <Input placeholder="Email" id={"email"}/>
                <Input placeholder="Password" id={"password"}/>
                <Input placeholder="Confirm Password" id={"ConfirmPassword"} />
                {/* <Agreement>
                    By Creating an accont, I consent the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement> */}
                <Button type="button" onClick={handelSubmit}>CREATE</Button>
                <Link to="/log" style={{ textDecoration: 'none', color: 'black' }}><MenuItem>I HAVE AN ACCOUNT</MenuItem></Link>
            </Form>
        </Wrapper>
    </Container>
    </>
  )
}

export default Register

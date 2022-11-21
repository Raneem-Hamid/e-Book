import React,{ useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import {popularBooks} from "../data"
import Book from './Book';
import Search from './Search';
// import axios from "axios";
import { AppContext } from '../Context';
import axios from 'axios';

// const apiUrl = "https://example-data.draftbit.com/books?_limit=15";

const Div = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
`;
const Container = styled.div`
padding: 10px 20px 20px 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

function Books() {

  // const {post}=useContext(AppContext)
  const [post ,setPost] = useState([]);
  const [posts,setPosts] = useState([]);
  const [result , setResult] = useState("");
  const [result2 , setResult2] = useState("");


const apiUrl = "https://example-data.draftbit.com/books?_limit=24";

 useEffect(() => {
    axios.get(apiUrl).then((res) => {
      setPost(res.data);
      setPosts(res.data);
    //   console.log(res.data);
    });
  }, []);




  // useEffect(()=>{
  //   console.log(post);
  //   setPosts(post);
  // },[])

  useEffect(()=>{
    console.log(result2);
    const arr=post.filter(item=>{console.log( item.rating);
      return  Number(item.rating) <= Number(result2);
        });
       
            
    setPosts(arr);

  },[result2])

  useEffect(()=>{
    console.log(result);
    const arr=post.filter(item=>{
      return item.title.toLowerCase().includes(result.toLowerCase());
    });
    setPosts(arr);

  },[result])


  return (
<>
    <Div>
   <Search result={result} setResult={setResult } result2={result2} setResult2={setResult2}/>
   <Container>
    {/*?.filter((pos)=> pos.volumeInfo.imageLinks) */}
    {  posts?.map((item,i)=>(
        
        i<=23 ?<Book data={item} key={item.id}/> : ''
    ))}
   {/* { console.log(item)} */}
   </Container>
   </Div>
   </>

  )
}

export default Books

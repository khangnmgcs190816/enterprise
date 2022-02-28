import data from '../../data/comments.json';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export const getComments = async () => {
    return data.comment;
  };
  
  export const createComment = async (text, parentId=null, ideaId) => {


    try {
      const response = await axios.post(`http://localhost:8000/comments?ideaId=${ideaId}`, {content: text, owner:'62184aad8150e62e4251a14d'},{
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE4NGFhZDgxNTBlNjJlNDI1MWExNGQiLCJpYXQiOjE2NDU3NTkxNzMsImV4cCI6MTY0NjM2Mzk3M30.ZF6LfiA9Pq25VHK2eGM9ogEdWNO8oBNW3kTrHHouE5k"
        }
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
    return {
      id: Math.random().toString(36).substr(2, 9),
      content: text,
      parentId,
      userId: "1",
      username: "John",
      created_at: new Date(),
      closed_date: text
    };
  };

  // export const getParentId = async () =>{
  //   return{
  //     parentId
  //   };
  // };
  
  export const updateComment = async (text) => {
    return { text };
  };

  
  // export const deleteComment = async () => {
  //   fetch('http://localhost:8000/comment/' + comment.id, {
  //     method: 'DELETE'
  //   }).then(() => {
  //     navigate.push('/');
  //   }) 
  // };
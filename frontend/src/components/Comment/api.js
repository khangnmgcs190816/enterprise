import data from '../../data/comments.json';
import { useNavigate, useParams } from "react-router-dom";
export const getComments = async () => {
    return data.comment;
  };
  
  export const createComment = async (text, parentId=null) => {
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
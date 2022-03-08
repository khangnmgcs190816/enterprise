import data from '../../data/comments.json';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export const getComments = async () => {
  return data.comment;
};
const token = window.localStorage.getItem('authToken');
export const createComment = async (text, parentId = null, ideaId) => {
  try {
    const response = await axios.post(`http://localhost:8000/comments?ideaId=${ideaId}`, { content: text, owner: '62184aad8150e62e4251a14d' }, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
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
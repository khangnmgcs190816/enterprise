import { Card, Divider, Paper } from '@mui/material';
import React from 'react'

const listComment = [{
    id: "4",
    content: "your idea sucks 1",
    created_at: "23:59 1-1-2022",
    closed_date: "23:59 30-4-2023"
},
{
    id: "5",
    content: "your idea sucks 2",
    created_at: "23:59 1-1-2022",
    closed_date: "23:59 30-4-2023"
},
{
    id: "6",
    content: "your idea sucks 3",
    created_at: "23:59 1-1-2022",
    closed_date: "23:59 30-4-2023"
}];

const Comment = () => {
    return (
        <>
            <div>
                <form>
                    <input type="textarea" name="content" placeholder="Write something"></input>

                    {/* author of cmt can be hidden */}
                    {/* <input type="checkbox">Comment as Anonymous</input> */}
                    <button type="submit">Post</button>
                </form>
            </div>
            <Divider></Divider>
            <CommentList></CommentList>
        </>
    )
}

const CommentList = ({ id }) => {

    let commentList = listComment;
    console.log(commentList)

    return (
        <h1>
            {
                commentList.map((comment) => (
                    <Card style={{ margin: "2rem" }} >
                        {comment.content}
                        <Divider></Divider>
                        {comment.created_at}
                    </Card>
                ))
            }

        </h1>
    );
}



export default Comment
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import { Typography } from "@material-ui/core";
// import ThumbsCount from "../../components/Idea/Thumbs";
// import { Box, Divider } from "@mui/material";
// import axios from "axios";
// import useAxios from "../../services/useAxios";

// const IdeaList = ({idea}) => {
//     const [ownerName, setOwnerName] = useState();
//     const { response, loading, error } = useAxios({
//         url: "http://127.0.0.1:8000/ideas",
//         method: "get",
//       });

//     useEffect(() => {
//         if (response != null) {
//           // setIdeas(response);
//           response.map(async (item) => {
//             // const user = await axios.get(`http://localhost:8000/users/${idea.owner}`);
//             // setOwnerName(user.data.name);
//             const user = await axios.get(
//               `http://localhost:8000/users/${item.owner}`
//             );
//             setOwnerName(user.data.name);
//           });
//         }
//       }, [response]);
//   return (
//     <div className="idea-list">
//             <List>
//               <ListItem alignItems="flex-start" key={idea._id}>
//                 {/* <Link to={`/idea/${idea._id}`}> */}
//                 {/* <h3 component={Link} to={`/idea/${idea._id}`} variant="h3" key={idea._id}>{idea.title}</h3> */}
//                 {/* </Link> */}
//                 {/* <Typography variant="body1">{idea.content}</Typography>
//                                     <Typography variant="subtitle1">{idea['ownerName']}</Typography> */}
//                 <ListItemText
//                   primary={
//                     <>
//                       <Typography
//                         sx={{ display: "inline" }}
//                         component="span"
//                         variant="h6"
//                         color="text.primary"
//                         data-testid="idea-title"

//                       >
//                         <Link
//                           to={`/ideas/${idea._id}`}
//                           underline="hover"
//                           key={idea._id}
//                         >
//                           {idea.title}
//                         </Link>
//                         - by {ownerName}
//                       </Typography>
//                     </>
//                   }
//                   secondary={
//                     <>
//                       <Typography
//                         sx={{ display: "inline" }}
//                         component="span"
//                         variant="body2"
//                         color="text.primary"
//                       >
//                         Views: {idea.views}
//                         <br />
//                         Content: {idea.content}
//                       </Typography>
//                       <ThumbsCount />
//                       <Divider variant="inset" />
//                     </>
//                   }
//                 // secondary={
//                 //   <>
//                 //     <Typography
//                 //       sx={{ display: "inline" }}
//                 //       component="span"
//                 //       variant="body2"
//                 //       color="text.primary"
//                 //     >
//                 //       Views: {idea.views}
//                 //     </Typography>
//                 //     <ThumbsCount />
//                 //     <Divider variant="inset" />
//                 //   </>
//                 // }
//                 />
//               </ListItem>
//             </List>
//     </div>
//   );
// };

// export default IdeaList;
// import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import data from "../../data/ideas.json";

// const IdeaList = () => {

//     const {category} = useParams();
//     const [ideas, setIdeas] = useState([]);
//     const {response, loading, error} = useAxios({
//         url: "http://localhost:8000/ideas",
//         method: "get",
//     });
//     useEffect(() => {
//         if (response != null) {
//             setIdeas(response);
//             response.map(async (item) => {
//                 const users = await axios.get(`http://localhost:8000/users/${item.owner}`);
//                 item['ownerName'] = users.data.name;
//             });

//         }
//     }, [response]);

//     if (error) throw error;
//     if (loading) return <LoadingIndicator/>;
//     if (ideas.length === 0) return <PageNotFound/>;
//   return (
//     <div className="idea-list">
//       {
//         ideas.map((idea) => {
//                 return (
//                     <li>
//                         <ul key={idea._id}>
//                             <Link to={`/idea/${idea._id}`}>
//                                 <h3 key={idea._id}>{idea.title}</h3>
//                             </Link>
//                             <p>{idea.content}</p>
//                             <p>{idea['ownerName']}</p>
//                         </ul>
//                     </li>
//                 );
//             }
//         )}
//     </div>
//   );
// };

// export default IdeaList;
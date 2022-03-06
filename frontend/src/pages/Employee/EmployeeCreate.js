import Axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Box, Divider } from "@mui/material";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import useAxios from "../../services/useAxios";
import LoadingIndicator from "../../components/Loading";
import PageNotFound from "../../components/errorHandling/PageNotFound";
import axios from "axios";

// const TitleFrame = styled("div")({
//     color: lightBlue[600],
//     // textAlign: "center",
//     fontSize: 30,
//     fontWeight: "bold",
//     marginBottom: "1rem",
// });
axios.defaults.baseURL = "http://localhost:8000/"

export default function EmployeeCreate(props) {
    let navigate = useNavigate();
    // const token = window.localStorage.getItem('authToken');
    // const [result, setResult] = useState(null);
    const [user, setUser] = useState(null);
    // const { response, loading, error } = useAxios({
    //     url: "users",
    //     method: "post",
    //     body: user,
    //     // headers: { token: token }
    // });

    const createUser = () => {
        if (user != null) {
            axios({
                method: 'post',
                url: 'http://localhost:8000/users',
                data: user
            }).then((response) => {
                if (response.status === 201) {
                    console.log('Khang')
                    console.log('Khang')
                    console.log('Khang')
                    console.log('Khang')
                    console.log('Khang')
                    console.log(response);
                    // setResult(response);
                    navigate('/employees');
                } else {
                    console.log('Cannot create')
                }

            });

            // if (response.status === 201) {
            // }
        }
    }


    // if (error) throw error;
    // if (loading) return <LoadingIndicator />;
    // if (result.length === 0) return <PageNotFound />;

    const handleSubmit = (e) => {
        e.preventDefault();
        createUser();
    }


    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <TextField
                        id="outlined-basic"
                        type="text"
                        label="Name"
                        variant="outlined"
                        name="name"
                        placeholder='Name'
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                        size="small"
                        sx={{
                            width: "20%",
                            alignSelf: "center",
                        }}
                        required />
                    <TextField
                        id="outlined-basic"
                        type="text"
                        label="Email"
                        variant="outlined"
                        name="email"
                        placeholder='Email'
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        size="small"
                        sx={{
                            width: "20%",
                            alignSelf: "center",
                        }}
                        required />
                    <TextField
                        id="outlined-basic"
                        type="text"
                        label="Password"
                        variant="outlined"
                        name="password"
                        placeholder='Password'
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        size="small"
                        sx={{
                            width: "20%",
                            alignSelf: "center",
                        }}
                        required />
                    <TextField
                        id="outlined-basic"
                        type="text"
                        label="Age"
                        variant="outlined"
                        name="age"
                        placeholder='Age'
                        onChange={(e) => setUser({ ...user, age: e.target.value })}
                        size="small"
                        sx={{
                            width: "20%",
                            alignSelf: "center",
                        }}
                        required />
                    <Box>
                        <Button
                            type="submit"
                            variant="contained"
                            startIcon={<SendIcon />}
                            sx={{ marginLeft: "1rem", marginRight: "1rem" }}
                        >
                            Create
                        </Button>

                        <Button
                            component={RouterLink}
                            to="/employees"
                            variant="contained"
                            color="secondary"
                            sx={{ margin: "1rem 0rem" }}
                        >
                            Cancel
                        </Button>
                    </Box>
                    {/* <p>
                        {result !== null ? result : 'Invalid'}
                    </p> */}
                </Box>
            </form>
        </div>
    );
}

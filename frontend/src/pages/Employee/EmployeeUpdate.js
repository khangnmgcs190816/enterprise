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
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';


const boxStyle = {
    border: 1,
    borderRadius: "25px",
    boxShadow: 4,
    borderColor: "white",
    m: 2,
    p: 3
};
const boxFlex = {
    display: "flex",
    justifyContent: "center",
    m: 1
}

export default function EmployeeUpdate() {
    let navigate = useNavigate();

    const [user, setUser] = useState(null);


    const updateUser = () => {
        if (user != null) {
            axios({
                method: 'put',
                url: 'http://localhost:8000/users',
                data: user
            }).then((response) => {
                if (response.status === 201) {
                    navigate('/employees');
                } else {
                    console.log('Cannot create')
                }
            });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser();
    }

  return (
    <Box sx={boxStyle}>
            <form onSubmit={handleSubmit}>
                <Box sx={{ boxFlex, flexDirection: 'column' }}>
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
                    <Box sx={boxFlex}>
                        <Button
                            type="submit"
                            variant="contained"
                            startIcon={<SendIcon />}
                            sx={{ marginLeft: "1rem", marginRight: "1rem" }}
                        >
                            <PersonAddAltIcon />
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
        </Box>  
  )
}

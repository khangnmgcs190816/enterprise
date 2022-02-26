import React from "react";
import styled from "@emotion/styled";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Box, Divider } from "@mui/material";
import TextField from "@mui/material/TextField";
import { lightBlue } from "@mui/material/colors";
import SendIcon from "@mui/icons-material/Send";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";

// LINK CATEGORY NẰM Ở DROPDOWN USER NHÁ!!!!!!

const TitleFrame = styled("div")({
    color: lightBlue[600],
    // textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: "1rem",
});

const CategoryCreate = () => {
    var date = new Date(); //Cái nì là chứa ngày tháng cho cái created_at nè

    const [categoryName, setCategoryName] = useState("Unknown category"); //cái nì là cái chứa tên category(?), đang bị lú chỗ này
    const [created_at, setCreateDate] = useState(date);
    const [updated_at, setUpdateDate] = useState();
    const [isPending, setIsPending] = useState(false);
    // Thêm const "used"(?)

    // Hàm này để bấm Submit thì nó sẽ đẩy vô json nè
    const handleSubmit = async (e) => {
        e.preventDefault();


        const category = {
            categoryName,
            created_at,
            updated_at,
        };

        setIsPending(true);

        try {
            const response = await axios.post("http://localhost:8000/categories",
                JSON.stringify(category), {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            console.log(response);
            console.log("New category added");
            setIsPending(false);
        } catch (error) {
            console.log(`ERROR: ${error}`);
        }
    };

    return (
        <Box>
            <Box
                sx={{
                    border: 1,
                    borderColor: "white",
                    boxShadow: 4,
                    borderRadius: "25px",
                    margin: "2rem 3rem",
                    padding: "2rem",
                    maxWidth: "100%",
                }}
            >
                <TitleFrame>Create Category</TitleFrame>
                <Divider
                    sx={{
                        marginBottom: "1.5rem",
                    }}
                />

                <form onSubmit={handleSubmit}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <TextField
                            id="outlined-basic"
                            type="text"
                            label="New Category"
                            variant="outlined"
                            name="tag" //Đổi chỗ này nếu có đổi trên const [tag...]
                            placeholder={categoryName} //Đổi chỗ này nếu có đổi trên const [tag...]
                            onChange={(e) => setCategoryName(e.target.value)} //Đổi chỗ này nếu có đổi trên const [tag...]
                            size="small"
                            sx={{
                                width: "50%",
                                alignSelf: "center",
                            }}
                        />
                        <Box>
                            {/* NÚT TẠO Ở ĐÂY */}
                            <Button
                                type="submit"
                                variant="contained"
                                startIcon={<SendIcon />}
                                sx={{ marginLeft: "1rem", marginRight: "1rem" }}
                            >
                                Create
                            </Button>

                            {/* NÀY NÚT RETURN HOME */}
                            <Button
                                component={RouterLink}
                                to="/"
                                variant="contained"
                                color="secondary"
                                sx={{ margin: "1rem 0rem" }}
                            >
                                Cancel
                            </Button>
                        </Box>
                    </Box>
                </form>
            </Box>
            <Box sx={{
                border: 1,
                borderColor: "white",
                boxShadow: 4,
                borderRadius: "25px",
                margin: "2rem 3rem",
                padding: "2rem",
                maxWidth: "100%",
            }}>
                <TitleFrame>Category/Tags List</TitleFrame>

                {/* <table className="table table-stripped">
        <tbody>{display}</tbody>
      </table> */}
            </Box>
        </Box>

    );
};

export default CategoryCreate;

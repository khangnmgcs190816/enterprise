import React from "react";
import styled from "@emotion/styled";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Box, Divider } from "@mui/material";
import TextField from "@mui/material/TextField";
import { lightBlue } from "@mui/material/colors";
import SendIcon from "@mui/icons-material/Send";
import { Link as RouterLink } from "react-router-dom";

// LINK CATEGORY NẰM Ở DROPDOWN USER NHÁ!!!!!!

const TitleFrame = styled("div")({
  color: lightBlue[600],
  textAlign: "center",
  fontSize: 30,
  fontWeight: "bold",
  marginBottom: "1rem",
});

const Category = () => {
  var date = new Date(); //Cái nì là chứa ngày tháng cho cái created_at nè

  const [tag, setCateName] = useState("Category Name"); //cái nì là cái chứa tên category(?), đang bị lú chỗ này
  const [created_at, setCreateDate] = useState(date);
  const [updated_at, setUpdateDate] = useState();
  const [isPending, setIsPending] = useState(false);
  // Thêm const "used"(?)

  // Hàm này để bấm Submit thì nó sẽ đẩy vô json nè
  const handleSubmit = (e) => {
    e.preventDefault();
    // Nguyên cái cục nì chứa các data về category mà user nhập vào
    const tag = {
      tag,
      created_at,
      updated_at,
    };

    setIsPending(true);

    // đẩy nó dô đúng file json categories
    fetch("http://localhost:8080/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tag), //đang bị lú chỗ này
    }).then(() => {
      console.log(tag); //đang bị lú chỗ này
      console.log("new tag added");
      setIsPending(false);
    });
  };

  return (
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
      <TitleFrame>New Category</TitleFrame>
      <Divider
        sx={{
          marginBottom: "1.5rem",
        }}
      ></Divider>

      {/* PHẦN CHÍNH Ở ĐÂY */}
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <TextField
            id="outlined-basic"
            type="text"
            label="Category Name"
            variant="outlined"
            name="tag" //Đổi chỗ này nếu có đổi trên const [tag...]
            placeholder={tag} //Đổi chỗ này nếu có đổi trên const [tag...]
            onChange={(e) => setCateName(e.target.value)} //Đổi chỗ này nếu có đổi trên const [tag...]
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
  );
};

export default Category;

import { Link as RouterLink } from "react-router-dom";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function CreateStaffBtn() {
    return (
        <Button
            variant="contained"
            startIcon={<AddCircleIcon />}
            component={RouterLink}
            to="/employees"
        >
            New
        </Button>
    );
}
export default CreateStaffBtn;
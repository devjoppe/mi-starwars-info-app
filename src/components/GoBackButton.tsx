// React
import {useNavigate} from "react-router-dom";
// MUI
import {ArrowBack} from "@mui/icons-material";
import Button from "@mui/material/Button";

const GoBackButton = () => {

    const navigate = useNavigate()

    return(
        <Button sx={{
            background: '#041449',
            color: '#f45957',
            [`&:hover`]: {
                backgroundColor: "#041449",
                color: '#f45957',
            },
        }} startIcon={<ArrowBack />} onClick={() => {
            navigate(-1)
        }}>Go back</Button>
    )
}

export default GoBackButton
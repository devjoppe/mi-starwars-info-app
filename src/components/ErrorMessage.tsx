// React
import React from "react";
import {Link} from "react-router-dom";
// MUI
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {ArrowBack} from "@mui/icons-material";

interface IProp {
    message: string | any
}
const ErrorMessage:React.FC<IProp> = ({message}) => {
    return(
        <Box sx={{ display:'flex', justifyContent:'center'}}>
            <Alert variant="outlined" severity="error">
                Something went wrong! {message}
                <Box sx={{ marginTop: '8px' }}>
                    <Link to={`/`}>
                        <Button startIcon={<ArrowBack />} >back to start</Button>
                    </Link>
                </Box>
            </Alert>
        </Box>
    )
}

export default ErrorMessage
// React
import React from "react";
import {Link as LinkTo} from "react-router-dom";
// MUI
import Breadcrumbs from "@mui/material/Breadcrumbs";
import {Typography} from "@mui/material";

interface IProp {
    levelA: string,
    levelB: string|null
}

const BreadCrumb:React.FC<IProp> = ({levelA, levelB}) => {
    return(
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                <LinkTo to="/">
                    start
                </LinkTo>
                { levelB != null ?
                <LinkTo to={`/${levelA}`}>
                    {levelA}
                </LinkTo> : <Typography color="white">{levelA}</Typography>
                }
                {levelB != null && <Typography color="white">{levelB}</Typography>}
            </Breadcrumbs>
        </div>
    )
}

export default BreadCrumb
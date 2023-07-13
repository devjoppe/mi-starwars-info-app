// React
import {Link} from "react-router-dom";
import React from "react";
// MUI
import {Typography} from "@mui/material";
// Interfaces
import {DetailListLinksInt} from "../interfaces/DetailView.ts";

interface IProp {
    title: string,
    data: DetailListLinksInt[]
    category: string
}
const DetailInfoBox:React.FC<IProp> = ({title, data, category}) => {

    return(
        <div className="sw-detail-infobox-data">
            <Typography variant="h3">{title}</Typography>
            <div className="sw-info-box">
                    {
                        data.map((item) => (
                            <Link key={item.id} to={`/${category}/${item.id}`}>
                                {item.title ? item.title : item.name }
                            </Link>
                        ))
                    }
            </div>
        </div>
    )
}

export default DetailInfoBox
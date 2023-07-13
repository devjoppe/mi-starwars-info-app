// React
import React from "react";
// Components
import DetailInfoBox from "../../../components/DetailInfoBox.tsx";
// Interfaces
import {DetailStarshipsInt} from "../../../interfaces/DetailView.ts";
// MUI
import {Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
interface IProp {
    detailData: DetailStarshipsInt
}
const DetailPlanets:React.FC<IProp> = ({detailData}) => {

    return(
        <div className="sw-detail-infoboxes">
            <Typography variant="h2">{detailData.name}</Typography>
            <div className="sw-detail-main-info">
                <Typography>
                    {detailData.name} is of model {detailData.model} with the class of {detailData.starship_class}, and is manufactured by {detailData.manufacturer}.
                    The ships length is {detailData.length} meters and is operated by a crew of {detailData.crew} and can take {detailData.passengers} passengers.
                    The cargo capacity is {detailData.cargo_capacity} and can operate for {detailData.consumables}.
                    {detailData.name} has a top atmospheric speed of {detailData.max_atmosphering_speed} and have a hyper rating of {detailData.hyperdrive_rating}.
                    The megalight per hour (MGLT) is {detailData.MGLT} and the ship can be purchased for {detailData.cost_in_credits} credits.
                </Typography>
            </div>
            <Grid container spacing={2}>
                { detailData.pilots && detailData.pilots.length > 0 &&
                    <Grid xs={12} md={6}>
                        <DetailInfoBox title={"Pilots"} data={detailData.pilots} category={'people'} />
                    </Grid>
                }
                { detailData.films && detailData.films.length > 0 &&
                    <Grid xs={12} md={6}>
                        <DetailInfoBox title={"Films"} data={detailData.films} category={'films'} />
                    </Grid>
                }
            </Grid>
        </div>
    )
}

export default DetailPlanets
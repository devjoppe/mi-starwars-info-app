// React
import React from "react";
// Components
import DetailInfoBox from "../../../components/DetailInfoBox.tsx";
// Interfaces
import {DetailPlanetInt} from "../../../interfaces/DetailView.ts";
// MUI
import {Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
interface IProp {
    detailData: DetailPlanetInt
}
const DetailPlanets:React.FC<IProp> = ({detailData}) => {
    return(
        <div className="sw-detail-infoboxes">
            <Typography variant="h2">{detailData.name}</Typography>
            <div className="sw-detail-main-info">
                <Typography>
                    Welcome to {detailData.name}! This planet has a rotation period of {detailData.rotation_period} years and a orbital period of {detailData.orbital_period} years. The climate is {detailData.climate} and has a gravity pull of {detailData.gravity}.
                    The terrain is {detailData.terrain} with a water surface of {detailData.surface_water}%, that is currently sustaining a population of {detailData.population}
                </Typography>
            </div>
            <Grid container spacing={2}>
                { detailData.residents && detailData.residents.length > 0 &&
                    <Grid xs={12} md={6}>
                        <DetailInfoBox title={"Residents"} data={detailData.residents} category={'people'} />
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
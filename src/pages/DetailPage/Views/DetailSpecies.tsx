// React
import React from "react";
// Components
import DetailInfoBox from "../../../components/DetailInfoBox.tsx";
// Interfaces
import {DetailSpeciesInt} from "../../../interfaces/DetailView.ts";
// MUI
import {Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
interface IProp {
    detailData: DetailSpeciesInt
}
const DetailPlanets:React.FC<IProp> = ({detailData}) => {
    return(
        <div className="sw-detail-infoboxes">
            <Typography variant="h2">{detailData.name}</Typography>
            <div className="sw-detail-main-info">
                <Typography>
                    {detailData.name} species has the classification of {detailData.classification} and designation {detailData.designation}.
                    The average height is {detailData.average_height} cm and has a average lifespan of {detailData.average_lifespan} years.
                    The species eye color is often {detailData.eye_colors}, with {detailData.hair_colors} hair colors, and a skin with the color of {detailData.skin_colors}.
                    The {detailData.name} talks in the language of {detailData.language}.
                </Typography>
            </div>
            <Grid container spacing={3}>
                { detailData.homeworld &&
                    <Grid xs={12} md={4}>
                        <DetailInfoBox title={"Homeworld"} data={[detailData.homeworld]} category={'planets'} />
                    </Grid>
                }
                { detailData.people && detailData.people.length > 0 &&
                    <Grid xs={12} md={4}>
                        <DetailInfoBox title={"Characters"} data={detailData.people} category={'people'} />
                    </Grid>
                }
                { detailData.films && detailData.films.length > 0 &&
                    <Grid xs={12} md={4}>
                        <DetailInfoBox title={"Films"} data={detailData.films} category={'films'} />
                    </Grid>
                }
            </Grid>
        </div>
    )
}

export default DetailPlanets
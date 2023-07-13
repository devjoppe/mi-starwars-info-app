// React
import React from "react";
// Components
import DetailInfoBox from "../../../components/DetailInfoBox.tsx";
// Interfaces
import {DetailPeopleInt} from "../../../interfaces/DetailView.ts";
// MUI
import {Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
interface IProp {
    detailData: DetailPeopleInt
}
const DetailPeople:React.FC<IProp> = ({detailData}) => {
    return(
        <div className="sw-detail-infoboxes">
            <Typography variant="h2">{detailData.name}</Typography>
            <div className="sw-detail-main-info">
                <Typography>
                    {detailData.name} was born/created {detailData.birth_year} and has today a height of {detailData.height}cm and a mass of {detailData.mass}kg. {detailData.name}s skin color is {detailData.skin_color} and has {detailData.eye_color} eyes.
                </Typography>
            </div>
            <Grid container spacing={3}>
                { detailData.species && detailData.species.length > 0 &&
                    <Grid xs={12} md={4}>
                        <DetailInfoBox title={"Species"} data={detailData.species} category={'species'} />
                    </Grid>
                }
                { detailData.homeworld &&
                    <Grid xs={12} md={4}>
                        <DetailInfoBox title={"Homeworld"} data={[detailData.homeworld]} category={'planets'} />
                    </Grid>
                }
                { detailData.starships && detailData.starships.length > 0 &&
                    <Grid xs={12} md={4}>
                        <DetailInfoBox title={"Starships"} data={detailData.starships} category={'starships'} />
                    </Grid>
                }
                { detailData.vehicles && detailData.vehicles.length > 0 &&
                    <Grid xs={12} md={4}>
                        <DetailInfoBox title={"Vehicles"} data={detailData.vehicles} category={'vehicles'} />
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

export default DetailPeople
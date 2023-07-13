// React
import React from "react";
// Components
import DetailInfoBox from "../../../components/DetailInfoBox.tsx";
// Interfaces
import {DetailFilmsInt} from "../../../interfaces/DetailView.ts";
// MUI
import {Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

interface IProp {
    detailData: DetailFilmsInt
}
const DetailPeople:React.FC<IProp> = ({detailData}) => {
    return(
        <div className="sw-detail-infoboxes">
            <Typography variant="h2">{detailData.title}</Typography>
            <div className="sw-detail-main-info">
                <Typography>
                    {detailData.opening_crawl}
                </Typography>
                <div className="sw-detail-list">
                    <div className="sw-detail-list-item">
                        <b>Episode number: </b>{detailData.episode_id}
                    </div>
                    <div className="sw-detail-list-item">
                        <b>Director: </b>{detailData.director}
                    </div>
                    <div className="sw-detail-list-item">
                        <b>Producer: </b>{detailData.producer}
                    </div>
                    <div className="sw-detail-list-item">
                        <b>Release date: </b>{detailData.release_date}
                    </div>
                </div>
            </div>
            <Grid container spacing={3}>
                { detailData.characters && detailData.characters.length > 0 &&
                    <Grid xs={12} md={4}>
                        <DetailInfoBox title={"characters"} data={detailData.characters} category={'people'} />
                    </Grid>
                }
                { detailData.planets && detailData.planets.length > 0 &&
                    <Grid xs={12} md={4}>
                        <DetailInfoBox title={"Planets"} data={detailData.planets} category={'planets'} />
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
                { detailData.species && detailData.species.length > 0 &&
                    <Grid xs={12} md={4}>
                        <DetailInfoBox title={"Species"} data={detailData.species} category={'species'} />
                    </Grid>
                }
            </Grid>
        </div>
    )
}

export default DetailPeople
// React
import React from "react";
import {Link} from 'react-router-dom'
// MUI
import {Card, CardActions, CardContent, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import { ArrowForward } from '@mui/icons-material';
// Interfaces
import {ListViewInt} from "../interfaces/ListView.ts";


interface IProp {
    itemData: ListViewInt,
}

const ListItem:React.FC<IProp> = ({itemData}) => {
    return(
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h3" component="div">{itemData.name || itemData.title }</Typography>
                {itemData.terrain &&
                    <div className="sw-card-extra">
                        A {itemData.terrain} planet
                    </div>
                }
                {itemData.homeworld &&
                    <div className="sw-card-extra">
                        Has <Link to={`/planets/${itemData.homeworld.id}`}>{itemData.homeworld.name}</Link> as home planet
                    </div>
                }
                {itemData.manufacturer &&
                    <div className="sw-card-extra">
                        Built by {itemData.manufacturer}
                    </div>
                }
                {itemData.average_height && itemData.average_lifespan &&
                    <div className="sw-card-extra">
                        Is on average {itemData.average_height}cm tall and can live for {itemData.average_lifespan} years
                    </div>
                }
                {itemData.vehicle_class &&
                    <div className="sw-card-extra">
                        Is of a {itemData.vehicle_class} class
                    </div>
                }
                {itemData.director && itemData.release_date &&
                    <div className="sw-card-extra">
                        Directed by {itemData.director} and released {itemData.release_date}
                    </div>
                }
            </CardContent>
            <CardActions>
                <Link to={`${itemData.id}`}>
                    <Button size="medium" endIcon={<ArrowForward />}>
                        Learn more
                    </Button>
                </Link>
            </CardActions>
        </Card>
    )
}

export default ListItem
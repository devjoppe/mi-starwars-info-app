// React
import {Link} from 'react-router-dom'
// Components
import MainHeader from "../components/MainHeader.tsx";
// Data
import navData from './../assets/data/mainNav.json'
// MUI
import Grid from "@mui/material/Unstable_Grid2";

const StartPage = () => {

    return (
        <div>
            <MainHeader />
            <div className="sw-start">
                <Grid container spacing={3}>
                    { navData &&
                        navData.map(item => (
                            <Grid key={item.id} xs={12} md={4}>
                                <Link to={item.url}>
                                    <div className="sw-start-box" style={{backgroundImage: `url(${item.bg})`}}>
                                        <span>{item.title}</span>
                                    </div>
                                </Link>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </div>
    )
}

export default StartPage
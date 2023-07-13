// Hooks
import {useEffect, useLayoutEffect, useState} from "react";
import {useParams} from "react-router";
import {useNavigate} from "react-router-dom";
import {useAllData} from "../../layout/MainLayout.tsx";
import {useGetData} from "../../hooks/useGetData.ts";
// Components
import BreadCrumb from "../../components/BreadCrumb.tsx";
import ErrorMessage from "../../components/ErrorMessage.tsx";
import GoBackButton from "../../components/GoBackButton.tsx";
// Detail views
import DetailPlanets from "./Views/DetailPlanets.tsx";
import DetailPeople from "./Views/DetailPeople.tsx";
import DetailStarships from "./Views/DetailStarships.tsx";
import DetailSpecies from "./Views/DetailSpecies.tsx";
import DetailVehicles from "./Views/DetailVehicles.tsx";
import DetailFilms from "./Views/DetailFilms.tsx";
// Interfaces
import {DetailDataInt} from "../../interfaces/DetailView.ts";
// MUI
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import {ArrowBack, ArrowForward} from '@mui/icons-material';
import {Typography} from "@mui/material";
import {Container} from "@mui/material";


const DetailPage = () => {

    // Using navigate and params
    const navigate = useNavigate()
    const urlParam = useParams().category
    const urlId = useParams().id

    // UseStates
    const [detailData, setDetailData] = useState<DetailDataInt|null>(null)
    const [pageNumber, setPageNumber] = useState(Number(urlId))
    const [isLoadingData, setIsLoadingData] = useState(true)
    const [indexNumber, setIndexNumber] = useState<number>(0)

    // Set the API end point
    const [dataEndPoint, setDataEndPoint] = useState<string|null>(null)

    // Custom hook: get API data
    const {apiData, isLoading, errorMessage} = useGetData<DetailDataInt>(dataEndPoint)

    // Get the mainData from parent
    const { mainData} = useAllData()

    // Yes Johan, I know.. but this will be my solution for this assignment.
    useLayoutEffect(() => {
        setIsLoadingData(true)
    }, [urlParam])

    // Check the params and fetch data
    useEffect(() => {
        setDataEndPoint(`${urlParam}/${urlId}`)
        if(apiData) {
            setDetailData(apiData)
        }
    }, [urlParam, urlId, apiData])

    // Calculating where in the array the objects are so Next and Previous work on the detail page
    useEffect(() => {
        if (mainData) {
            const checkId = mainData.data.map(item => item.id).indexOf(Number(urlId))
            setIndexNumber(checkId)
            setPageNumber(checkId + 1)
        }
    }, [apiData, mainData, urlId]);

    // Handle when clicking on next and previous
    const handleClick = (step:number) => {
        const getItemID = mainData.data[indexNumber + step]
        setIsLoadingData(true)
        navigate(`/${urlParam}/${getItemID.id}`)
    }

    // When Loading is complete
    useEffect(() => {
        if(!isLoading) {
            setIsLoadingData(false)
        }
    }, [isLoading])

    return(
        <div>
            {!errorMessage &&
                <>
                    <div className="sw-breadcrumb">
                        {isLoadingData && <Typography>Loading...</Typography> }
                        {detailData && urlParam && !isLoadingData && <BreadCrumb levelA={urlParam} levelB={detailData.name ? detailData.name : detailData.title}/>}
                    </div>
                    <div className="sw-go-back">
                        <GoBackButton />
                    </div>
                </>
            }
            { isLoading && isLoadingData &&
                <Box sx={{ display: 'flex', height: '100px', color: 'white', marginTop: '32px', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            }
            { errorMessage && <ErrorMessage message={errorMessage} />}
            {!isLoading && !isLoadingData && detailData && urlParam === 'planets' && <DetailPlanets detailData={detailData} />}
            {!isLoading && !isLoadingData && detailData && urlParam === 'people' && <DetailPeople detailData={detailData}/>}
            {!isLoading && !isLoadingData && detailData && urlParam === 'starships' && <DetailStarships detailData={detailData}/>}
            {!isLoading && !isLoadingData && detailData && urlParam === 'species' && <DetailSpecies detailData={detailData}/>}
            {!isLoading && !isLoadingData && detailData && urlParam === 'vehicles' && <DetailVehicles detailData={detailData}/>}
            {!isLoading && !isLoadingData && detailData && urlParam === 'films' && <DetailFilms detailData={detailData}/>}
            { mainData && !errorMessage &&
                <div className="sw-go-to">
                    <Container fixed className="sw-container">
                    <div className="sw-go-to-buttons">
                        <Button startIcon={<ArrowBack />} onClick={() => handleClick(-1)} disabled={pageNumber === 1}>Previous</Button>
                        <div className="sw-go-to-totals">{pageNumber} of {mainData.data.length}</div>
                        <Button endIcon={<ArrowForward />} onClick={() => handleClick(1)} disabled={pageNumber === mainData.data.length}>Next</Button>
                    </div>
                    </Container>
                </div>
            }
        </div>
    )
}

export default DetailPage
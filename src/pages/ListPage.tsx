// Hooks
import {useGetData} from "../hooks/useGetData.ts";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
// Components
import ListItem from "../components/ListItem.tsx";
import PaginationList from "../components/PaginationList.tsx";
import BreadCrumb from "../components/BreadCrumb.tsx";
import SearchField from "../components/SearchField.tsx";
import MainNavigation from "../components/MainNavigation.tsx";
import ErrorMessage from "../components/ErrorMessage.tsx";
// Interfaces
import {ListViewInt} from "../interfaces/ListView.ts";
import {ListAllDataInt} from "../interfaces/AllDataInt.ts";
// MUI
import Grid from '@mui/material/Unstable_Grid2';
import {Typography} from "@mui/material";
import Box from '@mui/material/Box';
import {Chip} from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

const ListPage = () => {
    // UseStates
    const [allData, setAllData] = useState<ListAllDataInt|null>(null)
    const [listData, setListData] = useState<ListViewInt[]|null>([])
    const [page, setPage] = useState<number>(1)
    const [pageParam] = useSearchParams()
    const [searchText, setSearchText] = useState<string|null>(null)
    const [isLoadingData, setIsLoadingData] = useState(true)
    const [dataEndPoint, setDataEndPoint] = useState<string|null>(null)

    // Get the url param
    const urlParam = useParams().category

    // Custom hook: get API data
    const { apiData, isLoading, errorMessage} = useGetData(dataEndPoint)

    // Get the params
    const checkPage = Number(pageParam.get('page'))
    const checkQuery = pageParam.get('search')

    // Fetching data to list based on the params
    useEffect(() => {
        // When going to new URL and by that fetching new data, set IsLoading to true
        setIsLoadingData(true)

        //Set the initial params and constructing the endPoint: The brain of all params ;)
        let endPoint = `/${urlParam}${checkPage === 0 ? '' : checkQuery || searchText && checkPage > 0 ? `/?search=${checkQuery}&page=${checkPage}` : `/?page=${checkPage}`}`

        // Check the pageParams
        if(checkQuery) {
            setSearchText(checkQuery)
            if(checkPage === 0) {
                endPoint += `/?search=${checkQuery}`
            }
        } else {
            setSearchText(null)
        }
        // Set the endPoint
        setDataEndPoint(endPoint)

        if(checkPage !== 0) {
            setPage(checkPage)
        } else {
            setPage(1)
        }

    }, [pageParam, urlParam, checkQuery, apiData, checkPage, searchText])

    useEffect(() => {
        if(apiData) {
            setAllData(apiData)
            setListData(apiData.data)
        }
    }, [apiData])

    // If allData (and so listData) is changed, switch isLoading to false.
    useEffect(() => {
        if (isLoading) {
            setIsLoadingData(true)
        } else {
            setIsLoadingData(false)
        }
    }, [allData, isLoading])

    return (
        <div>
            <MainNavigation />
            <Typography variant="h2">{urlParam}</Typography>
            <div className="sw-breadcrumb">
                {urlParam && <BreadCrumb levelA={urlParam} levelB={searchText ? "search" : null}/>}
            </div>
            {urlParam && <SearchField category={urlParam} />}
            { isLoading && isLoadingData &&
                <Box sx={{ display: 'flex', height: '100px', color: 'white', marginTop: '32px', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            }
            { errorMessage && <ErrorMessage message={errorMessage} /> }
            {!isLoading && !isLoadingData && listData && allData &&
                <>
                    {searchText &&
                        <div className="sw-list-results">
                            <Chip label={`"${searchText}" with ${allData && allData.total} results`} variant="outlined" />
                        </div>
                    }
                    <div className="sw-list-items">
                        <Grid container spacing={3}>
                            { listData.map((data) => (
                                    <Grid key={data.id} xs={12} md={6}>
                                        <ListItem itemData={data} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </div>
                </>
            }
            <div className="sw-pagination">
                { urlParam && allData &&
                    <PaginationList pageNumber={allData.last_page} currentPage={page} category={urlParam} searchText={searchText} />
                }
            </div>
        </div>
    )
}

export default ListPage
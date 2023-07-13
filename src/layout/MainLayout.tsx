// React
import {Outlet, useParams, useOutletContext} from "react-router-dom";
// Hooks
import {useEffect, useState} from "react";
import {useGetData} from "../hooks/useGetData.ts";
// Interfaces
import {ListAllDataInt} from "../interfaces/AllDataInt.ts";
// Components
import MainHeader from "../components/MainHeader.tsx";
import ErrorMessage from "../components/ErrorMessage.tsx";
// Set Type
type ContextDataType = { mainData: ListAllDataInt }

const MainLayout = () => {

    const [mainData, setMainData] = useState<ListAllDataInt|null>(null)

    // Get the url param
    const {category} = useParams()

    // Set the API end point
    const [dataEndPoint, setDataEndPoint] = useState<string|null>(null)

    // Get data from API with hook
    const {apiData, errorMessage} = useGetData(dataEndPoint)

    // This is only need to get the data once to use as general information.
    // This is mainly here if the user reloads, or go to a different url with another category, it will fetch that list data.
    // The data is passed down to its children in to <Outlet>.
    // Setting the endPoint just as a variable to check against the category. If changed the data will fetch again.
    useEffect(() => {
        if(category && category != dataEndPoint) {
            // Want all the items in one array.
            const perPage = "?per_page=100"
            setDataEndPoint(category+perPage)
        }
        if(apiData) {
            setMainData(apiData)
        }
    }, [category, apiData, dataEndPoint])

    return(
        <div>
            <div>
                <MainHeader />
                { errorMessage && <ErrorMessage message={errorMessage}/>}
                { mainData && <Outlet context={{mainData} }/>}
            </div>
        </div>
    )
}

export default MainLayout

export function useAllData() {
    return useOutletContext<ContextDataType>()
}
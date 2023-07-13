// Services
import {getData} from "../services/swAPI.ts";
// Hooks
import {useState, useEffect} from "react";

export const useGetData = <T = any>(endpoint: string|null) => {

    // UseStates
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [apiData, setApiData] = useState<T | null>(null);

    useEffect(() => {
        if(!endpoint) {
            return
        }
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await getData<T>(endpoint);
                if(!res) {
                    setErrorMessage('The page you are trying to find does not exist')
                } else {
                    setApiData(res);
                }
            } catch (error: any) {
                setErrorMessage(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [endpoint]);

    return { isLoading, errorMessage, apiData };
};
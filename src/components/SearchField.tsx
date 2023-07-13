// React
import {useNavigate} from "react-router-dom";
// React Hooks
import React, {useState} from "react";
// MUI
import Button from "@mui/material/Button";
import {TextField} from "@mui/material";

interface IProp {
    category: string
}

const SearchField:React.FC<IProp> = ({category}) => {

    const [searchText, setSearchText] = useState("")

    const navigate = useNavigate()

    return(
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                navigate(`/${category}/?search=${searchText}`)
                setSearchText("")
            }}>
                <TextField fullWidth label={`Search in ${category}`} id="fullWidth"
                   value={searchText}
                   onChange={(e) => {
                       setSearchText(e.target.value)
                   }
                }/>
                <Button type="submit">Search</Button>
            </form>
        </div>
    )
}

export default SearchField
// React
import React from "react";
import {Link} from 'react-router-dom'
// MUI
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

interface IProp {
    pageNumber: number,
    currentPage: number,
    category: string,
    searchText: string|null
}
const PaginationList:React.FC<IProp> = ({pageNumber, currentPage, category, searchText}) => {

    return(
        <Pagination page={currentPage} count={Number(pageNumber)}
            renderItem={(item) => (
                <PaginationItem component={Link} to={`/${category}/${item.page === 1 && searchText === null ? '' : searchText ? `?search=${searchText}&page=${item.page}` : `?page=${item.page}`}`}
                    {...item}
                />
            )}
        />
    )
}

export default PaginationList
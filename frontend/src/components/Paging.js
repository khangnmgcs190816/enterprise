import PropTypes from 'prop-types';
import {Box, Divider} from "@mui/material";
import {Pagination} from "@mui/material";

const Paging = ({ totalPages, handlePageClick}) => {
    const pages=[...Array(totalPages).keys()].map(num =>num+1);
    return(
        <div>
            {pages.map(num => (
                <button
                    key={num}
                    onClick={()=>handlePageClick(num)}
                >{num}</button>
            ))}
        </div>
    )
}

export default Paging;
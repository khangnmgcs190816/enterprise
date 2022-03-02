import PropTypes from 'prop-types';
import {Box, Divider} from "@mui/material";
import {Pagination} from "@mui/material";

Paging.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func
};

Paging.defaultProps = {
    onPageChange: null,
};

function Paging(props){
    const {pagination, onPageChange }=props;
    const {skip, limit, totalRows}= pagination;
    // page = Math.floor(skip/5);
    const totalPages = Math.ceil(totalRows / limit);

    function handlePageChange(newPage){
        if (onPageChange){
            onPageChange(newPage);

        }
    }

    return(
        <div>
            <button
                disabled={skip <= 0}
                onClick={() => handlePageChange(skip-2)}
            >Prev</button>

            {/* Pagination area
            <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                > */}
                    {/* <Pagination count={10} variant="outlined" color="primary"/> */}
                {/* </Box> */}
            <button
                disabled={skip>= totalRows}
                onClick={() => handlePageChange(skip+2)}
            >Next</button>
        </div>
    );
}

export default Paging;
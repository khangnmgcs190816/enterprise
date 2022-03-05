import React, { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import useAxios from "../../services/useAxios";
import LoadingIndicator from "../../components/Loading";
import PageNotFound from "../../components/errorHandling/PageNotFound";

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 280 },
    { field: 'email', headerName: 'Email', width: 420 },
    { field: 'age', headerName: 'Age', type: 'number', width: 90, },
    { field: 'role', headerName: 'Role', width: 210, },
];

const pageSize = 5;
const rowsPerPageOptions = [5];

const EmployeeTable = () => {
    const { response, loading, error } = useAxios({
        url: "users",
        method: "get",
    });

    const [users, setUsers] = useState({});

    useEffect(() => {
        if (response != null) {
            const userList = response.map((user, id) => {
                return {
                    id: id + 1,
                    name: user.name,
                    email: user.email,
                    age: user.age,
                };
            })
            setUsers(userList);
        }
    }, [response]);

    if (error) throw error;
    if (loading) return <LoadingIndicator />;
    if (users.length === 0) return <PageNotFound />;

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={users}
                columns={columns}
                pageSize={pageSize}
                rowsPerPageOptions={rowsPerPageOptions}
                checkboxSelection
            />
        </div>

    );
}

export default EmployeeTable;
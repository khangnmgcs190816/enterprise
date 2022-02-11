import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import data from "../data/employees.json"

const EmployeeList = () => {
    const [employees, setEmployees] = useState(data.idea);

    const [addFormData, steAddFormData] = useState({
        first_name: "",
        last_name: "",
        username: "",
        password: "",
        email: "",
        role: "",
        department: "",
        idea: [
            {
                id: "",
                title: "",
                user: "",
                content: "",
                thumbs_up: "",
                thumbs_down: "",
                document: "",
                academic_year: "",
                category: [
                    {
                        id: "",
                        tag: ""
                    }
                ],
                comment: [
                    {
                        id: "",
                        content: ""
                    }
                ]
            }
        ]
    });

    const [editFormId, setEditFormId] = useState(null);

    const handleAddFormChange = (event) => {
        event.preventDefault();
        return;
    }
    const handleEditFormChange = (e) => {

    }

    const handleSubmitFormChange = (e) => { }


    const handleEditClick = () => {


    };

    const handleCancelClick = () => { };

    return (
        <div className="employeelist">
            <form onSubmit={handleEditFormSubmit}>
                <table>
                    <thead>
                        <tr>
                            <li key={1}>
                                <th>ID</th>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Department</th>
                                <th>Idea</th>
                            </li>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <Fragment>
                                {editEmployeeId === employee.id ? (
                                    <EditableRow
                                        editFormData={editFormData}
                                        handleEditFormChange={handleEditFormChange}
                                        handleCancelClick={handleCancelClick}
                                    />
                                ) : (
                                    <ReadOnlyRow
                                        idea={idea}
                                        handleEditClick={handleEditClick}
                                        handleDeleteClick={handleDeleteClick}
                                    />
                                )}
                            </Fragment>
                        ))}
                    </tbody>
                </table>
            </form>

            <h2>Add an employee</h2>
            <form onSubmit={handleAddFormSubmit}>
                <input
                    type="text"
                    name="firstname" i
                    required="required"
                    placeholder="Enter a first name..."
                    onChange={handleAddFormChange}
                />
                <input
                    type="text"
                    name="lastname"
                    requ ired="required"
                    plac eholder="Enter last name..."
                    onCh ange={handleAddFormChange}
                />
                <input
                    type="text"
                    name="username"
                    required="required"
                    placeholder="Enter username..."
                    onChange={handleAddFormChange}
                />
                <input
                    type="text"
                    name="email"
                    required="required"
                    placeholder="email role..."
                    onChange={handleAddFormChange}
                />
                <input
                    type="text"
                    role="tags"
                    required="required"
                    placeholder="Enter role..."
                    onChange={handleAddFormChange}
                />

                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default EmployeeList;

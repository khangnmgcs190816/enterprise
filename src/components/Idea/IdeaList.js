// import Search from "../../components/Search.js";
// import { Link } from 'react-router-dom';
import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import data from "../../data/ideas.json";
import EditableRow from "./EditableRow.js";
import ReadOnlyRow from "./ReadOnlyRow.js";
// import "../../index.css";

const IdeaList = () => {
  const [ideas, setIdeas] = useState(data.idea);

  const [addFormData, setAddFormData] = useState({
    title: "",
    user: "",
    content: "",
    thumbs_up: "",
    thumbs_down: "",
    academic_year: "",
    document: "",
    created_at: "",
    updated_at: " ",
    closed_date: "",
    category: [
      {
        id: "",
        tag: "",
      },
    ],
    comment: [
      {
        id: "",
        content: "",
        created_at: "",
        closed_date: "",
      },
    ],
  });

  const [editFormData, setEditFormData] = useState({
    title: "",
    user: "",
    content: "",
    thumbs_up: "",
    thumbs_down: "",
    academic_year: "",
    document: "",
    created_at: "",
    updated_at: " ",
    closed_date: "",
    category: [
      {
        id: "",
        tag: "",
      },
    ],
    comment: [
      {
        id: "",
        content: "",
        created_at: "",
        closed_date: "",
      },
      {
        id: "",
        content: "",
        created_at: "",
        closed_date: "",
      },
      {
        id: "",
        content: "",
        created_at: "",
        closed_date: "",
      },
    ],
  });

  const [editIdeaId, setEditIdeaId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldId = event.target.getAttribute("id");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldId] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldId = event.target.getAttribute("id");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldId] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newIdea = {
      id: nanoid(),
      title: "",
      user: "",
      content: "",
      thumbs_up: "",
      thumbs_down: "",
      academic_year: "",
      document: "",
      created_at: "",
      updated_at: " ",
      closed_date: "",
      category: [
        {
          id: "",
          tag: "",
        },
      ],
      comment: [
        {
          id: "",
          content: "",
          created_at: "",
          closed_date: "",
        },
      ],
    };

    const newIdeas = [...ideas, newIdea];
    setIdeas(newIdeas);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedIdea = {
      id: editIdeaId,
      title: editFormData.title,
      user: editFormData.user,
      content: editFormData.content,
      thumbs_up: editFormData.thumbs_up,
      thumbs_down: editFormData.thumbs_down,
      academic_year: editFormData.academic_year,
      document: editFormData.document,
      created_at: editFormData.created_at,
      updated_at: editFormData.updated_at,
      closed_date: editFormData.closed_date,
      category: [
        {
          id: editFormData.category_id,
          tag: editFormData.tag,
        },
      ],
      comment: [
        {
          id: editFormData.comment_id,
          content: editFormData.comment_content,
          created_at: editFormData.comment_create_at,
          closed_date: editFormData.comment_close_date,
        },
      ],
    };

    const newIdeas = [...ideas];

    const index = ideas.findIndex((idea) => idea.id === editIdeaId);

    newIdeas[index] = editedIdea;

    setIdeas(newIdeas);
    setEditIdeaId(null);
  };

  const handleEditClick = (event, idea) => {
    event.preventDefault();
    setEditIdeaId(idea.id);

    const formValues = {
      department: idea.department,
      tags: idea.tags,
      title: idea.title,
      content: idea.content,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditIdeaId(null);
  };

  const handleDeleteClick = (ideaId) => {
    const newIdeas = [...ideas];

    const index = ideas.findIndex((idea) => idea.id === ideaId);

    newIdeas.splice(index, 1);

    setIdeas(newIdeas);
  };
  const handleThumbUpClick = (ideaId) => {};
  const handleThumbDownClick = (ideaId) => {};
  return (
    <div className="idealist">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <li key={1}>
                <th>ID</th>
                <th>Department</th>
                <th>Tags</th>
                <th>Title</th>
                <th>Content</th>
                <th>Actions</th>
                <th>Thumbs</th>
              </li>
            </tr>
          </thead>
          <tbody>
            {ideas.map((idea) => (
              <Fragment>
                {editIdeaId === idea.id ? (
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

      <h2>Add an idea</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="department"
          required="required"
          placeholder="Enter a department..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="tags"
          required="required"
          placeholder="Enter tags..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="title"
          required="required"
          placeholder="Enter a title..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="content"
          required="required"
          placeholder="Enter content..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>

    // {/* 1. Title: ‘Idea List’
    // 2. Pagination (5 per page)
    // 3. Search idea
    // 4. Records are shown with the following column:
    // Idea ID
    // Title
    // Department
    // Content
    // Time Stamp
    // 5. Thumbs up/down
    // 6. Tags
    // 7. View Idea Detail
    // 8. Create idea
    // 9. Create Closure Date for new ideas
    // */}

    // {/* <IdeaCreate /> */}
  );
};

export default IdeaList;

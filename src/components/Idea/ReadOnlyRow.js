import React from "react";

const ReadOnlyRow = ({ idea, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{idea.id}</td>
      <td>{idea.department}</td>
      <td>{idea.tags}</td>
      <td>{idea.title}</td>
      <td>{idea.content}</td>
      <td>
        <button type="button" onClick={(event) => handleEditClick(event, idea)}>
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(idea.id)}>
          Delete
        </button>
      </td>
      <td>
        <button type="button">Thumbs Up</button>
        <button type="button">Thumbs Down</button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;

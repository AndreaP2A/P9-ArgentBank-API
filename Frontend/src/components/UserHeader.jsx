import { useState } from "react";
import PropTypes from "prop-types";
import EditNameForm from "./EditNameForm";

const UserHeader = ({ userName }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (newName) => {
    console.log("Saved name:", newName);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const [firstName, lastName] = userName.split(" ");

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {userName}!
      </h1>
      {isEditing ? (
        <EditNameForm
          onSave={handleSave}
          onCancel={handleCancel}
          currentFirstName={firstName}
          currentLastName={lastName}
        />
      ) : (
        <button className="edit-button" onClick={() => setIsEditing(true)}>
          Edit Name
        </button>
      )}
    </div>
  );
};

UserHeader.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default UserHeader;

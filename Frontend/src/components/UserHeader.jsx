import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserName } from "../features/userSlice";
import EditNameForm from "./EditNameForm";

const UserHeader = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.userName);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (newName) => {
    dispatch(updateUserName(newName));
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

export default UserHeader;

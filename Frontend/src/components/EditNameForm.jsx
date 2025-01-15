import { useState } from "react";
import PropTypes from "prop-types";

const EditNameForm = ({
  onSave,
  onCancel,
  currentFirstName,
  currentLastName,
}) => {
  const [firstName, setFirstName] = useState(currentFirstName);
  const [lastName, setLastName] = useState(currentLastName);

  const handleSave = () => {
    onSave({ firstName, lastName });
  };

  const handleCancel = () => {
    setFirstName(currentFirstName);
    setLastName(currentLastName);
    onCancel();
  };

  return (
    <div className="edit-name-form">
      <div className="edit-name-form_inputs">
        <input
          type="text"
          placeholder={currentFirstName}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="edit-name-form_inputs_input"
        />
        <input
          type="text"
          placeholder={currentLastName}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="edit-name-form_inputs_input"
        />
      </div>
      <div className="edit-name-form_buttons">
        <button className="edit-name-form_buttons_btn" onClick={handleSave}>
          Save
        </button>
        <button className="edit-name-form_buttons_btn" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

EditNameForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  currentFirstName: PropTypes.string.isRequired,
  currentLastName: PropTypes.string.isRequired,
};

export default EditNameForm;

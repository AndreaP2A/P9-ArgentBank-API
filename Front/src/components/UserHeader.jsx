import PropTypes from "prop-types";

const UserHeader = ({ userName }) => {
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {userName}!
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
};

UserHeader.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default UserHeader;

import PropTypes from "prop-types";

const FeatureItem = ({ imgSrc, title, children }) => {
  return (
    <div className="feature-item">
      <img src={imgSrc} alt="Feature Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{children}</p>
    </div>
  );
};

FeatureItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FeatureItem;

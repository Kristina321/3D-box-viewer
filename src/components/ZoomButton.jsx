import PropTypes from "prop-types";

export const Buttons = ({ handleZoomIn, handleZoomOut }) => {

  return (
    <div className="zoom-box">
      <button
        className="zoom-box__btn"
        onClick={handleZoomIn}>
        +
      </button>
      <button
        className="zoom-box__btn"
        onClick={handleZoomOut}>
        -
      </button>
    </div>
  );
}

Buttons.propTypes = {
  handleZoomIn: PropTypes.func.isRequired,
  handleZoomOut: PropTypes.func.isRequired,
};

import PropTypes from "prop-types";

const FilterGroup = ({ title, inputType, options }) => {
  return (
    <div className="mb-4">
      <h4 className="text-sm text-gray-700 font-semibold mb-2">{title}</h4>
      {options.map((option, idx) => (
        <div className="flex align-items-center mb-2" key={idx}>
          <input
            type={inputType}
            name={title}
            value={option.value || option.text}
            className="mr-2"
            style={{
              width: "22px",
              height: "22px",
              backgroundColor: "#6200ea",
              accentColor: "#6200ea",
            }}
          />
          <label className="text-gray-700 text-sm">{option.text}</label>
        </div>
      ))}
    </div>
  );
};

FilterGroup.propTypes = {
  title: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf(["checkbox", "radio"]).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string,
    })
  ).isRequired,
};

export default FilterGroup;

import { NavLink } from "react-router-dom";

const InformationSection = ({ title, informations }) => {
  return (
    <div className="flex flex-column gap-2">
      <h4 className="text-base font-bold text-white">{title}</h4>
      {informations.map((info, index) => (
        <NavLink
          key={index}
          to={info.link}
          className="white-space-normal no-underline text-base font-light text-white 
          hover:text-gray-400 line-height-4 w-15rem"
        >
          {info.text}
        </NavLink>
      ))}
    </div>
  );
};

export default InformationSection;

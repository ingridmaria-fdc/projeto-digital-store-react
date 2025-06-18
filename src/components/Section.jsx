import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Section = ({ title, titleAlign = "left", link, children }) => {
  return (
    <section className="w-full my-5 px-8">
      <div
        className={`flex ${
          titleAlign === "center"
            ? "flex-column align-items-center text-center"
            : "flex-row justify-content-between align-items-center"
        }`}
      >
        <span className="text-2xl font-bold text-gray-700 pb-3">{title}</span>

        {link && (
          <Link
            to={link.href}
            className="flex align-items-center gap-2 text-pink-600 font-medium text-sm hover:underline no-underline"
          >
            {link.text}
            <i className="pi pi-arrow-right text-sm" />
          </Link>
        )}
      </div>

      <div className="mt-3">{children}</div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  titleAlign: PropTypes.oneOf(["left", "center"]),
  link: PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }),
  children: PropTypes.node.isRequired,
};

export default Section;

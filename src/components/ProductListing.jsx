import ProductCard from "./ProductCard";
import PropTypes from "prop-types";

const ProductListing = ({ products }) => {
  return (
    <div className="flex mb-5">
      {products.map((product, i) => (
        <div key={i} className="col-12 sm:col-6 md:col-3">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

ProductListing.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductListing;

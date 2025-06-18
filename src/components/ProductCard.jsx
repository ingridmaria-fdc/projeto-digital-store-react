import "../styles/ProductCardSection.css";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  const { name, image, price, priceDiscount } = product;
  const hasDiscount = priceDiscount !== undefined;

  return (
    <div className="card-product py-3 pl-3 gap-5 mb-6">
      {hasDiscount && <span className="offer text-left absolute">50%OFF</span>}

      <img
        src={image}
        alt={name}
        className="mx-auto object-contain text-center"
        width="240px"
        height="240px"
      />

      <div className="mt-5 text-left">
        <span className="text-sm text-gray-500 text-left">Tênis</span>
        <div>
          <span className="text-base font-medium text-gray-800 text-left">
            {name}
          </span>
        </div>
      </div>

      <div className="mt-1 text-left">
        {hasDiscount ? (
          <>
            <span className="text-gray-400 line-through mr-2 ">${price}</span>
            <span className="text-black font-bold ">${priceDiscount}</span>
          </>
        ) : (
          <span className="text-black font-bold">${price}</span>
        )}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    priceDiscount: PropTypes.number,
  }).isRequired,
};

export default ProductCard;

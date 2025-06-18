import "../styles/BuyBox.css";
import { Button } from "primereact/button";
import starBorderYellowIcon from "../assets/star-border-yellow.png";
import starWhiteIcon from "../assets/star-white.png";
import starYellowIcon from "../assets/star.png";

export default function BuyBox({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) {
  return (
    <div>
      <h1 className="product-name">{name}</h1>
      <p className="ref">Casual | Nike | REF: {reference}</p>

      <div className="flex items-center gap-2 mt-2">
        <img src={starYellowIcon} alt="star" width="20.5px" height="20px" />
        <img src={starYellowIcon} alt="star" width="20.5px" height="20px" />
        <img src={starYellowIcon} alt="star" width="20.5px" height="20px" />
        <img src={starYellowIcon} alt="star" width="20.5px" height="20px" />
        <img
          src={starBorderYellowIcon}
          alt="star"
          width="20.5px"
          height="20px"
        />

        <span className="card-star">
          {stars}{" "}
          <img src={starWhiteIcon} alt="star" width="12.5px" height="12px" />
        </span>
        <span className="ref text-gray-400 py-1">({rating} avaliações)</span>
      </div>

      <div className="mt-3 pb-3">
        {priceDiscount ? (
          <div className="flex items-center gap-2">
            <span className="text-2xl text-gray-700 font-semibold">
              R$ {priceDiscount}
            </span>
            <span className="py-2 text-gray-400 text-sm line-through">
              R$ {price}
            </span>
          </div>
        ) : (
          <span className="text-2xl text-gray-700 font-semibold">
            R$ {price}
          </span>
        )}
      </div>

      <span className="description pt-4">Descrição do produto</span>
      <p className="w-10 text-sm text-gray-600 ">{description}</p>

      <div className="mt-4">{children}</div>

      <Button
        label="COMPRAR"
        className="mt-4 w-5	bg-yellow-500 border-none text-white text-base font-bold"
      />
    </div>
  );
}

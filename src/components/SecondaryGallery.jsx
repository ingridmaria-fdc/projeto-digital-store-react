import "../styles/Gallery.css";
import { Button } from "primereact/button";
import { Galleria } from "primereact/galleria";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SecondaryGallery({
  className = "",
  width = "640px",
  height = "360px",
  radius = "8px",
  images = [],
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const itemTemplate = (item) => {
    return (
      <img
        src={item.src}
        alt={item.alt}
        style={{
          width: "100%",
          height: height,
          objectFit: "cover",
          borderRadius: radius,
        }}
      />
    );
  };

  return (
    <div
      className={`flex flex-col items-left ${className}`}
      style={{ width: width, backgroundColor: "#ffffff" }}
    >
      <Galleria
        value={images}
        numVisible={1}
        item={itemTemplate}
        showThumbnails={false}
        showIndicators={false}
        showItemNavigators
        circular
        activeIndex={activeIndex}
        onItemChange={(e) => setActiveIndex(e.index)}
      />

      <div className="text-left px-6 w-60rem justify-content-center align-content-center">
        <p className="text-pink-500 text-sm font-semibold">Oferta especial</p>

        <span className="title">
          Air Jordan edição de <br /> colecionador
        </span>

        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip
        </p>

        <Link to="/products/1">
          <Button label="Ver Ofertas" className="button" />
        </Link>
      </div>
    </div>
  );
}
